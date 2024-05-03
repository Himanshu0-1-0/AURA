'use client'
import Cart from "@/Components/Cart/Cart"
import { CartProvider } from "@/store/CartContext";
export default function Home() {
  return (
    <CartProvider>
      <Cart/>
    </CartProvider>
  )
}
