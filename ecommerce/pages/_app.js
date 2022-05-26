import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';

// Wrap entire application with StateContext
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        {/* "Component" refers to component the user is actual on */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>

  )
}

export default MyApp
