import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex flex-col lg:flex-row grid-cols-3 justify-around bg-[#f5f5f5]  items-center mx-auto'>
      <div>
        <h2 className='text-5xl font-serif'>JobWorld </h2>
      </div>
      <div className='space-x-5 flex flex-col lg:flex-row p-2'>
       
        <Link to="/"><p>Home</p></Link>
        <Link to="/statistics"><p>Statistics</p></Link>
        <Link to="/applied jobs"><p>Applied Jobs</p></Link>
        <Link to="/blog"><p>Blog</p></Link>
   
       </div>
      <div>
        <button className='bg-[#66cccc] rounded px-6 py-4 text-xl'>Appeal Now</button>
    </div>
    </nav>
  );
};

export default Header;