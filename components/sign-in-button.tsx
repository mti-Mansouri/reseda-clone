"use client"
import { supabase } from "../lib/supabaseClient";

export default function SignInButton() {
  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("eroor singin in with google:", error);
    }
  }
  return (
    <button className="light-button" onClick={signInWithGoogle}>
      Sign In With Google
    </button>
  );
}
