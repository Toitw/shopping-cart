import React from 'react';
import Nav from './Nav';
import { Outlet } from "react-router-dom";


const MainPage = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default MainPage;
