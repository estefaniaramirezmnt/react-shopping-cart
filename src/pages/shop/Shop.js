import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

export default function Shop() {
  return (
    <div className="shop">
      <h1>Shopping cart</h1>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
}
