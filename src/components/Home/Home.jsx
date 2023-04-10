import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className='mt-6'>
      <Outlet></Outlet>
   </div>
    </div>
  );
};

export default Home;