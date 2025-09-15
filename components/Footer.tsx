"use client";
import Link from "next/link";
import {useActionState } from "react";
import {  useFormStatus } from "react-dom";
import { subscribe } from "@/app/actions";
const initialState = {
  message:""
}

function SubmitButton (){
  const { pending } = useFormStatus();

  return(
    <button className="dark-button" type="submit" disabled={pending}>
      {pending ? 'Signing Up...' : 'Sign Up'}
    </button>
  )
}
export default function Footer() {

  const [state , formAction]= useActionState(subscribe,initialState)
  return (
    <footer className="container">
      <h4 className="ft1">subscribe</h4>
      <p className="footer-cta1">
        Sign up with your email address to receive news and updates.
      </p>
      <form action={formAction}>
        <input type="email"
        name="email" 
        placeholder="Email Address" required />
       <SubmitButton></SubmitButton>
      </form>
      <p className="footer-cta2">We respect your privacy.</p>
      <div className="logo-txt">RESEDA</div>
      <section className="list-left">
        <h4>SITE MAP</h4>
        <ul>
          <li>
            <Link href="/services">services</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
          <li>
            <Link href="/information">information</Link>
          </li>
        </ul>
      </section>
      <section className="list-right">
        <h4>FOLLOW</h4>
        <ul>
          <li>
            <a href="">INSTAGRAM</a>
          </li>
          <li>
            <a href="">LINKEDIN</a>
          </li>
          <li>
            <a href="">TWITTER</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
