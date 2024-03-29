// This file is used to manage the entire STATE of the project. 
// git streak alive!
import React, { createContext, useContext, useState, useEffect } from 'react';
// Toast is a pop up notification when we manipulate the cart data.
import { toast } from 'react-hot-toast';


const Context = createContext();

// Context Functional Component
export const StateContext = ({ children }) => {
  // Are we showing the cart or not
  const [showCart, setShowCart] = useState(false);
  // What items are in the cart
  const [cartItems, setCartItems] = useState([]);
  // Total Price
  const [totalPrice, setTotalPrice] = useState();
  // Total Quantity
  const [totalQuantities, setTotalQuantities] = useState(0);
  // Quantity
  const [qty, setQty] = useState(1);

  // Adding to cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems);
    } else {
      // update product quantitiy
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name}  added to the cart.`);
  }

  // Increase & decrease quantity logic
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  }

  // Context Provider
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )
}

// Let's us use state easily in the [slug] file
export const useStateContext = () => useContext(Context);

