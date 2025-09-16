
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/../components/Nav";
import Footer from "@/../components/Footer";
import { useCart, CartProvider } from "./context/CartContext";
export const metadata: Metadata = {
  title: "website clone",
  description: "mehdi's practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        // className={`${bodyColors}` }
      >
        <CartProvider>
          <Nav></Nav>
        {children}
        <Footer></Footer>
        </CartProvider>
      </body>
    </html>
  );
}
