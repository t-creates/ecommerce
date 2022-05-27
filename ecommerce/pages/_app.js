import React from 'react';
// Notification Pop-up
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';

// Wrap entire application with StateContext
import { StateContext } from '../context/StateContext';



function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        {/* "Component" refers to component the user is actual on */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>

  )
}

export default MyApp
