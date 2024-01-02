import { prisma } from "@/lib/db/prisma"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Add Product - Ecommerce'
}

async function addProduct(formData: FormData) {
  "use server"
  const name = formData.get("name")?.toString()
  const description = formData.get("description")?.toString()
  const imageUrl = formData.get("imageUrl")?.toString()
  const price = Number(formData.get("price") ?? 0)

  if (!name || !description || !imageUrl || !price)
  {
    throw Error("Missing required fields")
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    }
  })

  redirect("/")
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input className="mb-3 w-full input input-bordered" type="text" required name="name" placeholder="name" />
        <textarea className="textarea textarea-bordered mb-3 w-full" name="description" required placeholder="Description"></textarea>
        <input className="mb-3 w-full input input-bordered" type="text" required name="imageUrl" placeholder="Image Url" />
        <input className="mb-3 w-full input input-bordered" type="number" required name="price" placeholder="Price" />
        <button className="btn btn-primary btn-block" type="submit">Add Product</button>
      </form>
    </div>
  )
} 