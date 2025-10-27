import { getProductById } from "app/actions/products"

function generateStaticParams() {}
 
export default async function consultProduct({ params }) {
  const { id } = await params
  const product = await getProductById(id)
 
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  )
}