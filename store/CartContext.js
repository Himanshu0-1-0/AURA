// contexts/CartContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    } 
  }, []);


  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // Item does not exist in the cart, add it
      setCart([...cart, item]);
      localStorage.setItem('cart', JSON.stringify([...cart, item]));
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// to use
// import { useCart } from '../contexts/CartContext';

// function MyComponent() {
//   const { cart, addToCart, removeFromCart } = useCart();

//   // Use cart state and functions as needed

//   return (
//     <div>
//       {/* Your component JSX */}
//     </div>
//   );
// }

// export default MyComponent;



// item str 
// {
//     id: 'unique_product_id',
//     name: 'Product Name',
//     price: 19.99,
//     quantity: 1,
//     // Any other relevant details about the product
//   }
  
