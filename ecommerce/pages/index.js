import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData }) => (
  <div>
    {/* heroBanner --> pass through if bannerData.length > 0 (true) and the first object of the array */}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Boogly Woogly Sounds</p>
    </div>

    <div className="products-container">
      {products?.map((product) => product.name)}
    </div>

    <FooterBanner />

  </div>
);


// Use for next.js when pre-rendering a page. Server-side will request the data (API) and return it -- ASYNC
export const getServerSideProps = async () => {
  // Grabbing all products from our Sanity dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home;