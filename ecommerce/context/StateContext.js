// This file is used to manage the entire STATE of the project. 

import React, { createContext, useContext, useState, useEffect } from 'react';
// Toast is a pop up notification when we manipulate the cart data.
import { toast } from 'react-hot-toast';


const Context = createContext();

// Context Functional Component
export const StateContext = ({ children }) => {
  // Are we showing the cart or not
  const [showCart, setShowCart] = useState(false);
  // What items are in the cart
  const [cartItems, setCartItems] = useState();
  // Total Price
  const [totalPrice, setTotalPrice] = useState();
  // Total Quantity
  const [totalQuantities, settotalQuantities] = useState();
  // Quantity
  const [qty, setqty] = useState(1);

  // Context Provider
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty
      }}
    >
      {children}
      </Context.Provider>
  )
}

