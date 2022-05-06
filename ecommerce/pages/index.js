import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Boogly Woogly Sounds</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner />

    </>
  );
}

// Use for next.js when pre-rendering a page. Server-side will request the data (API) and return it -- ASYNC
export const getServerSideProps = async => {
  // Grabbing all products from our Sanity dashboard
  const query = '[*_type == "product"]';
}
export default Home;