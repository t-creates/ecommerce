import React from 'react';
import Link from 'next/link';
// simple shopping icon
import { AiOutlineShopping } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Company Name Here</Link>
      </p>

      <button className="cart-icon" type="button" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">!</span>
      </button>
    </div>
  )
}

export default Navbar