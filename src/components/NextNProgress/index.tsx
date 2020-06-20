import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <Head>
    {/* Import CSS for nprogress */}
    <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
    />
  </Head>
);
