import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const Layout = () => {
  return (
    <div id="layout-wrapper">
      <Header />
      <div id="body-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
