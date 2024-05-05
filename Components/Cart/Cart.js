'use client'
import "./Cart.css"
import { useCart } from '@/store/CartContext';
import { useAuth } from "@/store/AuthContext";
import { useRouter } from 'next/navigation'
export default function Cart({displayRazorpay}) {
    const router = useRouter();
    const { cart, removeFromCart,updateCart } = useCart();
    const {email ,isLoggedIn}=useAuth();
    function handleRemove(id){
        removeFromCart(id);
    }
    function handleDec(id){
        updateCart(id,'-1')
    }
    function handleInc(id){
        updateCart(id,'+1') 
    }
    function handleClick(){
        if(isLoggedIn){
            displayRazorpay(email,cart);
        }else{
            router.push("/login?state=login")
        }
    }
    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <p className="cart-item-name">{item.name}</p>
                            <p>Price: {item.price}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={()=> handleDec(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> handleInc(item.id)}>+</button>
                        </div>
                        <div className="cart-item-actions">
                            <button className="cart-item-remove" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <button onClick={handleClick}>Pay Here..</button>
            </div>
        </div>
    );
}
