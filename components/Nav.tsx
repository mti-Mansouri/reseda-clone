"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useCart } from "@/app/context/CartContext";
export default function Nav() {
  const currentPath = usePathname();
  const colors = currentPath === "/information" ? "dark" : "light";
  const [user, setUser] = useState<User | null>(null);
  const cart = useCart();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  // ---------------
  useEffect(() => {
    const body = document.body;
    body.classList.remove("dark", "light");
    if (currentPath === "/information") {
      body.classList.add("dark");
    } else {
      body.classList.add("light");
    }
  }, [currentPath]);
  return (
    <nav className={currentPath === "/information" ? "dark" : "light"}>
      <div className="logo">
        <Link href="/">RESEDA PHOTOGRAPHY</Link>
      </div>

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
        <li>
          {user ? (
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={handleSignOut}
            >
              Sign out
            </div>
          ) : (
            // <img className="user-icon"
            //                 style={{
            //       filter: currentPath === "/information" ? "invert(1)" : "none",
            //     }}
            // src="/icons/user-solid-full.svg" alt="" />
            <Link href="/login">Sign In</Link>
          )}
        </li>
        <li>
          <Link href="/shopping-cart">
            <div className="shopping-card">
              <img
                style={{
                  filter: currentPath === "/information" ? "invert(1)" : "none",
                }}
                src="/icons/cart-shopping-light-full.svg"
                alt=""
              />
              <span>{cart.itemCount}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
