'use client'
import Aboutus from "@/Components/Aboutus/Aboutus";
import NavbarShow from "@/Components/product-page/NavbarShow.js";
import Contactform from "@/Components/Contactform/Contactform";
import Footer from "@/Components/Footer/Footer";
import { AuthProvider } from "@/store/AuthContext";
import { CartProvider } from "@/store/CartContext";

export default function About() {
    return (
        <AuthProvider>
          <CartProvider>
          <NavbarShow/>
          <Aboutus/>
          <Contactform/>
            <Footer/>
        </CartProvider>
        </AuthProvider>
    );
  }