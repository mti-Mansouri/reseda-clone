"use client";
import Image from "next/image";
import { Database } from "@/types/database";
import { useState } from "react";
import { useCart, CartItem } from "../context/CartContext";
type ButtonState = "Purchase package" | "adding..." | "added";
type Service = Database["public"]["Tables"]["services"]["Row"];
export default function ServiceCard({ service }: { service: Service }) {
  const [btnState, SetbtnState] = useState<ButtonState>("Purchase package");
  const [quantity, SetQuantity] = useState<number>(1);
  const cart = useCart();

  const decrease = () => {
    if (quantity <= 1) {
      return;
    }
    SetQuantity((prev) => prev - 1);
  };

  const increase = () => {
    SetQuantity((prev) => prev + 1);
  };

  const handlePurchasebtm = () => {
    SetbtnState("adding...");
    cart.addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      quantity: quantity,
    });
    setTimeout(() => {
      SetbtnState("added");

      setTimeout(() => {
        SetbtnState("Purchase package");
      }, 2000);
    }, 1000);
  };
  // ----------

  return (
    <section key={service.id} className="service-container">
      <h4>{service.name}</h4>
      <p>${service.price}</p>
      <div className="service-img">
        <Image
          alt={service.name ?? "Service image"}
          src={service.image_url ?? "/placeholder.svg"}
          // width={}
          fill
        ></Image>
      </div>
      <ul>
        {(service.features ?? []).map((feature: string) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="act">
        <div className="quantity">
          <button
            style={{
              cursor: quantity <= 1 ? "default" : "pointer",
            }}
            onClick={decrease}
            // disabled={quantity === 1 ? true : false}
          >
            -
          </button>
          <div
            style={{
              padding: "10px 0 ",
              margin: "0 5px",
              textAlign: "center",
            }}
          >
            {quantity}
          </div>
          <button onClick={increase}>+</button>
        </div>
        <button onClick={handlePurchasebtm} className="light-button">
          {btnState}
        </button>
      </div>
    </section>
  );
}
