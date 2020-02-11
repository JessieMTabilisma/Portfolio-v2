import React from 'react';
import '../../styles/index.css';
import Navbar from '../Navbar/Navbar';

const Layout = props => {
  return (
    <div className="block min-h-screen w-full items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <main className="w-full h-auto block bg-black-200">{props.children}</main>
    </div>
  );
};
export default Layout;
