"use server";

import { supabase } from "../../lib/supabaseClient";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { CartItem } from "./context/CartContext";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/database";
import { use } from "react";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession(items: CartItem[]) {
  console.log("here");
  console.log("checkingout actions");

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // Amount in cents
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shopping-cart`,
    });

    return { url: session.url };
  } catch (e) {
    console.error("Error creating Stripe session:", e);
    return { error: "Could not create checkout session." };
  }
}
// -------------

export async function getUserCart(): Promise<CartItem[] | null> {
  const ck = cookies();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("carts")
    .select("cart_items")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user cart:", error.message);
    return null;
  }

  return (data?.cart_items as CartItem[]) || [];
}
// ---------- sync cart with database
export async function updateUserCart(items: CartItem[]) {
  const cookieStore = await cookies();
  const supabase = createServerActionClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "You must be logged in to update your cart." };
  }

  const { error } = await supabase.from("carts").upsert({
    user_id: user.id,
    cart_items: items,
  });

  if (error) {
    console.error("Error updating cart:", error);
    return { error: "Could not update cart in the database." };
  }
  return { success: true };
}
// ---------------
export async function message(
  prevState: { message: string },
  fromData: FormData
) {
  const name = fromData.get("name") as string;
  const surname = fromData.get("surname") as string;
  const email = fromData.get("email") as string;
  const newMessage = fromData.get("message") as string;

  if (!name || !surname || !email || !message) {
    return { message: "All fields are required." };
  }

  const error = await supabase.from("messages").insert([
    {
      name,
      surname,
      email,
      message: newMessage,
    },
  ]);
  if (error) {
    console.error("supabase error", error);
  }

  return { message: "Message sent!" };
}

export async function subscribe(
  prevState: { message: string },
  fromData: FormData
) {
  const email = fromData.get("email") as string;
  if (!email) {
    return { message: "Email is required." };
  }
  const error = await supabase.from("subscriptions").insert([{ email: email }]);
  if (error) {
    console.error("supabase error", error);
  }

  return { message: "Thank you for subscribing!" };
}
