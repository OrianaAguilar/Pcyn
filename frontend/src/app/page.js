"use server";
import { getProducts } from "./actions/products";
//import { useEffect } from "react";
export default async function Page() {
 // useEffect(async () => {
   const products = await getProducts();
 // }, []);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} {product.price}</li>
        ))}
      </ul>
    </div>
  );
}