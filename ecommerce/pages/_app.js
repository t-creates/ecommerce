import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* "Component" refers to component the user is actual on */}
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
