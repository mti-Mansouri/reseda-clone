"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function CartList() {
  const cart = useCart();

  let subtotal = cart.cartItems.reduce((totalPrice, item) => {
    const itemvalue = item.quantity * item.price;
    return totalPrice + itemvalue;
  }, 0);

  return (
    <>
      {cart.itemCount < 1 ? (
        <div> Your cart is empty!</div>
      ) : (
        cart.cartItems.map((item) => (
          <section key={item.id} className="cart-item">
            <div className="img-cart">{/* <Image ref={item.}></Image> */}</div>
            <p className="item-name" style={{ gridArea: "item-name" }}>
              {item.name}
            </p>
            <div className="item-count" style={{ gridArea: "item-count" }}>
              <button
                onClick={() => {
                  let newq = item.quantity - 1;
                  cart.updateQuantity(item.id, newq);
                }}
              >
                -
              </button>
              <div style={{ padding: "5px" }}>{item.quantity}</div>
              <button
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
            <button style={{ width: "100%" }} className="light-button">
              Checkout
            </button>
          </div>
        </section>
      )}
    </>
  );
}
