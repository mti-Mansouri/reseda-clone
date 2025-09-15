"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
export default function Nav() {
  const currentPath = usePathname();
  const colors = currentPath === "/information" ? "dark" : "light";
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
          <div className="shopping-card">
            <a href="">cart</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
