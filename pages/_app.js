import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

class JessieTabilisma extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return <Component {...pageProps} key={router.route} />;
  }
}
export default withGA('UA-155165987-1', Router)(JessieTabilisma);
