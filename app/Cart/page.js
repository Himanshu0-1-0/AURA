'use client'
import Cart from "@/Components/Cart/Cart"
import { CartProvider } from "@/store/CartContext";
import { AuthProvider } from "@/store/AuthContext";
import { useRouter } from 'next/navigation'
// import { useAuth } from "@/store/AuthContext";
import axios from 'axios';

export default function Home() {
  const router = useRouter();
    
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}


async function displayRazorpay(email,cart) {
 
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  // creating a new order
  const result = await axios.post("http://localhost:5173/order");

  if (!result) {
      alert("Server error. Are you online?");
      return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
      key:process.env.NEXT_PUBLIC_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "AURA",
      description: "Test Transaction",
      image: "bg-2.jpg",
      order_id: order_id,
      handler: async function (response) {
          const data = {
            //   orderCreationId: order_id,
            //   razorpayPaymentId: response.razorpay_payment_id,
            //   razorpayOrderId: response.razorpay_order_id,
            //   razorpaySignature: response.razorpay_signature,
              email:email,
              cartdata:cart,
          };

          const result = await axios.post("http://localhost:5173/success", data);
          router.push("/");
        //   alert(result.data.msg);
      },
      prefill: { 
          name: "XYZ",
          email: "XYZ.com",
          contact: "9999999999",
      },
      notes: {
          address: "Sector-12 Chandigarh",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

}

  return ( 
    <AuthProvider>
    <CartProvider>
      <Cart displayRazorpay={displayRazorpay}/>
    </CartProvider>
    </AuthProvider>
  )
}