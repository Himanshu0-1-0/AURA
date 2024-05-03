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
      const updatedCart = cart.filter(item => item.id !== itemId);
      setCart(updatedCart); // Update the state first
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Then update local storage
  };


  const updateCart = (itemId, operation) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      if (operation === '+1') {
        updatedCart[itemIndex].quantity += 1;
      } else if (operation === '-1') {
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex].quantity -= 1;
        } else {
          updatedCart.splice(itemIndex, 1); // Remove item if quantity becomes 0
        }
      }
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// to use
// import { useCart } from '+../contexts/CartContext';

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
//      image: 
//     // Any other relevant details about the product
//   }
  
