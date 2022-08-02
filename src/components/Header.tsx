import React from 'react';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>header</header>
      <Outlet />
    </>
  );
}

export default Header;
