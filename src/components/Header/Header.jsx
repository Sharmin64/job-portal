import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  
    <nav className='flex flex-col lg:flex-row grid-cols-3 justify-around bg-[#f5f5f5]  items-center mx-auto'>
      <div>
        <h2 className='text-5xl font-serif'>JobWorld </h2>
      </div>
      <div className='space-x-5 flex flex-col lg:flex-row p-2 items-center'>
       
      <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'font-medium tracking-wide text-gray-500  transition-colors duration-200')}
            >
              Home
            </NavLink>
            <NavLink
              to='/statistics'
              aria-label='statistics'
              title='statistics'
              className={({ isActive }) => (isActive ? 'active' : 'font-medium tracking-wide text-gray-500  transition-colors duration-200')}
            >
              Statistics
            </NavLink>
            <NavLink
              to='/appliedJobs'
              aria-label='appliedJobs'
              title='appliedJobs'
              className={({ isActive }) => (isActive ? 'active' : 'font-medium tracking-wide text-gray-500  transition-colors duration-200')}
            >
             Applied Jobs
            </NavLink>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'active' : 'font-medium tracking-wide text-gray-500  transition-colors duration-200')}
            >
           Blog
            </NavLink>
   
       </div>
      <div>
        <button className='bg-[#66cccc] rounded px-6 py-4 text-xl'>Appeal Now</button>
    </div>
      </nav>

   
  );
};

export default Header;