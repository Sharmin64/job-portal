import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from './hireman.jpg'
import Job from '../Job/Job';

const Demand = () => {
  const jobData = useLoaderData()
  console.log(jobData);
  //const [jobList,setJobList]= useState()
  return (
    <>
        <div className='flex flex-grid flex-col-reverse lg:flex-row grid-cols-2 mx-auto items-center justify-around'>
      <div className='my-3'>
        <h2 className='text-5xl font-bold mb-4 font-serif'>One Step <br />Ahead to Your <br />  <span className='text-[#6897bb]'>Favourite Job</span></h2>
        <p className='pb-4'>Explore thousands of job opportunities <br/> with all the information you need. Its your future. <br/> Come find it. Manage all your job application  <br/>from start to finish.</p>
        <Link to='/'>
        <button className='btn px-6 py-4 bg-[#66cccc] rounded btn-outlined'>Get Started</button>
        </Link>
      </div>
      <div>
        <img className='object-cover  mt-5 px-8 overflow-hidden' src={logo} alt="jobman" />
      </div>
      </div>
      <div className='mt-12 text-center mb-8'>
        <h2 className='text-5xl mb-4 font-bold font-serif'>Petition Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='flex flex-col mx-auto justify-around items-center lg:flex-row'>
        {
          jobData.map(job => <Job
            key={job.id}
            job={job}
          >

          </Job>
            
          )
}
      </div>
    </>
  );
};

export default Demand;