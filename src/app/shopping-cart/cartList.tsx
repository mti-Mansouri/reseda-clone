"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { createCheckoutSession } from "../actions";
import { useMemo, useState } from "react";

export default function CartList() {
  const cart = useCart();
  const [isCheckingout, setCheckingOut] = useState(false);
  // -----------------------------------
  const totalPrice = useMemo(() => {
    return cart.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart.cartItems]);

  let subtotal = cart.cartItems.reduce((totalPrice, item) => {
    const itemvalue = item.quantity * item.price;
    return totalPrice + itemvalue;
  }, 0);
  // -----------------------------------

  const handleCheckout = async () => {
    console.log("checkingout handlers");
    setCheckingOut(true);
    const res = await createCheckoutSession(cart.cartItems);
    if (res?.url) {
      setCheckingOut(false);

      window.location.href = res.url;
    } else {
      console.error("Checkout session failed", res?.error);
    }
  };
  return (
    <>
      {cart.itemCount < 1 ? (
        <div> Your cart is empty!</div>
      ) : (
        cart.cartItems.map((item) => (
          <section key={item.id} className="cart-item">
            <div className="img-cart">
              <Image
                alt={item.name ?? "item image"}
                src={item.photo ?? "/placeholder.svg"}
                // width={}
                fill
              ></Image>
            </div>
            <p className="item-name" style={{ gridArea: "item-name" }}>
              {item.name}
            </p>
            <div className="item-count" style={{ gridArea: "item-count" }}>
              <button
                className="quantity-btn"
                onClick={() => {
                  let newq = item.quantity - 1;
                  cart.updateQuantity(item.id, newq);
                }}
              >
                -
              </button>
              <div style={{ padding: "5px" }}>{item.quantity}</div>
              <button
                className="quantity-btn"
                onClick={() => {
                  let newq = item.quantity + 1;
                  cart.updateQuantity(item.id, newq);
                }}
              >
                +
              </button>
            </div>
            <div className="item-price" style={{ gridArea: "item-price" }}>
              <div>${item.price}</div>
              <button
                className="quantity-btn"
                onClick={() => {
                  cart.removeFromCart(item.id);
                }}
              >
                x
              </button>
            </div>
          </section>
        ))
      )}
      {cart.itemCount >= 1 && (
        <section className="checkout">
          <div className="checkout-box">
            <div className="price">
              <p>Subtotal</p>
              <div>${subtotal}</div>
            </div>
            <button
              disabled={isCheckingout ? true : false}
              onClick={handleCheckout}
              style={{ width: "100%" }}
              className="light-button"
            >
              {isCheckingout ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        </section>
      )}
    </>
  );
}
