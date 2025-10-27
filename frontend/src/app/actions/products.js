"use server";

export async function getProducts() {
    const res = await fetch("http://localhost:8000/products");
    return res.json();
}
export async function getProductById(id) {
    const res = await fetch(`http://localhost:8000/products/${id}`);
    return res.json();
}