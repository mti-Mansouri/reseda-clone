"use client"
import { useActionState } from "react";
import { message } from "@/app/actions";
export default function InformationPage() {
  const [state, formAction, isPending] = useActionState(message, { message: "" });
  return (
    <section className="information-page-container">
      <h1>About sofia</h1>
      <p className="info-p1">
        Sofia Parazi is a photographer, art director, and filmmaker based in Los
        Angeles. Raised in the south of Italy, Sofia Pazari was drawn to
        spending as much time as possible outdoors. Sofia’s photos use natural
        light as a callback to a childhood spent basking in the sun 
      </p>
      <p className="info-p2">
        Sofia is
        based in Los Angeles, CA. For business inquiries, feel free to contact
        her.
      </p>
      <form action={formAction}>
        <fieldset>
            <legend>Name</legend>
            <div className="message-input">
              <label htmlFor="name"><span>First Name</span> <span>(required)</span></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="message-input">
              <label htmlFor="surname"  ><span>Last Name</span></label>
              <input type="text" name="surname" id="surname" required />
            </div>
            
        </fieldset>
        <div 
        // style={{
        //   flexGrow:1
        // }}
         className="message-input">
          <label htmlFor="email"><span>Email</span> <span>(required)</span></label>
              <input type="text" name="email" id="email"  required/>
        </div>
            <div className="message-input">
              <label htmlFor="message"><span>Message</span><span>(required)</span></label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button className="dark-button" type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Submit"}
            </button>

      </form>
      <p>
      {state?.message && state.message}

      </p>
            <img src="/information.webp" alt="" />

    </section>
  );
}
