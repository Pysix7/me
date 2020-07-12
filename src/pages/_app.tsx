import React from 'react';
import { AppProps } from 'next/app'
import Layout from '~/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp