import React from 'react'
import "../public/styles/style.min.css";
import '../public/styles/fontawesome/css/all.min.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
Router.events.on('routeChangeStart', () => {
  NProgress.start()
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
});

Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className="next">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;