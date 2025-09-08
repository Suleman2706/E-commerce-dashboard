"use client"

import { useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false)

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    setAdded(true)
  }

  return (
    <button
      onClick={addToCart}
      className={`px-6 py-2 rounded text-white ${
        added ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {added ? "Added ✅" : "Add to Cart"}
    </button>
  )
}
