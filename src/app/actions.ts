"use server"

import { supabase } from "../../lib/supabaseClient";
import { revalidatePath } from "next/cache";


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