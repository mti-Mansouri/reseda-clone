// "use client"

// import { supabase } from "../../../lib/supabaseClient" ;
import SignInButton from "../../../components/sign-in-button";
export default function LoginPage() {
  // async function  signInWithGoogle() {
  //     const {error} = await supabase.auth.signInWithOAuth({
  //         provider:"google"
  //     });

  //     if(error)
  //     {
  //         console.error("eroor singin in with google:",error)
  //     }

  // }

  return (
    <section className="login-page-container">
      <SignInButton />
    </section>
  );
}
