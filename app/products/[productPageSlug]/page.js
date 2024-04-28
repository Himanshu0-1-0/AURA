'use client'
import NavbarShow from "@/Components/product-page/NavbarShow.js";
import ProductPage from "@/Components/product-page/ProductPage.js";
import Footer from "@/Components/Footer/Footer";
import { CartProvider } from "@/store/CartContext";



export default function Product({params}) {
    return (
      <CartProvider>
        <NavbarShow />
        <ProductPage id={params.productPageSlug}/>
        <Footer/>
      </CartProvider>
    );
  }