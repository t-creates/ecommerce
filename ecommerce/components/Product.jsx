import React from 'react';
// import a link so we can use that to link to the product Details
import Link from 'next/link';

// Grabs image from sanity dashboard
import { urlFor } from '../lib/client'

// SLUG for when we have the same product names, it's adds some characters to make each product unique

const Product = ({ product: { image, name, price, slug } }) => {
  return (
    <div>
      <Link href={`product/${slug.current}`} >
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">$ {price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product