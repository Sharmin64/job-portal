import React from 'react';
import { Link } from 'react-router-dom';
import logo from './hireman.jpg'

const Demand = () => {
  return (
    <>
        <div className='flex flex-grid flex-col-reverse lg:flex-row grid-cols-2 mx-auto items-center justify-around'>
      <div className='my-3'>
        <h2 className='text-5xl font-bold mb-4'>One Step <br />Ahead to Your <br />  <span className='text-[#6897bb]'>Favourite Job</span></h2>
        <p className='pb-4'>Explore thousands of job opportunities <br/> with all the information you need. Its your future. <br/> Come find it. Manage all your job application  <br/>from start to finish.</p>
        <Link to='/'>
        <button className='btn px-6 py-4 bg-[#66cccc] rounded btn-outlined'>Get Started</button>
        </Link>
      </div>
      <div>
        <img className='object-cover  mt-5 px-8 overflow-hidden' src={logo} alt="jobman" />
      </div>
      </div>
      <div className='mt-12 '>
        <h2 className='text-5xl'>Petition Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
    </>
  );
};

export default Demand;