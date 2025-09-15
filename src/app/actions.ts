"use server"

import { supabase } from "../../lib/supabaseClient";
import { revalidatePath } from "next/cache";


export async function message(prevState:{message:string},fromData:FormData) {
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
    if (error){
        console.error("supabase error",error);
    }

    return({message:'Message sent!' });
}

export async function subscribe(prevState:{message:string},fromData:FormData) {
    const email = fromData.get("email") as string;
    if (!email){
        return {message: "Email is required."};
    }
    const error = await supabase.from('subscriptions').insert([{email:email}]);
    if (error){
        console.error("supabase error",error);
    }

    return({message:'Thank you for subscribing!' });
    
}