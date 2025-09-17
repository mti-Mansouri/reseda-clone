"use server";

import { supabase } from "../../lib/supabaseClient";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { CartItem } from "./context/CartContext";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession(items: CartItem[]) {
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

    if (session.url) {
      redirect(session.url);
    } else {
      throw new Error("Could not create Stripe session");
    }
  } catch (e) {
    console.error("Error creating Stripe session:", e);
    return { error: "Could not create checkout session." };
  }
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
