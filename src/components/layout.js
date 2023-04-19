// Layout.js

import React from 'react';
import Header from './student home page/Header';
import Sidebar from './student home page/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
