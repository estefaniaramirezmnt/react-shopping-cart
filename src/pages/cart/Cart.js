import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";

import "./cart.css";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product}/>;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: $</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}
