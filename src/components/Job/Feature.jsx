import React from 'react';
import {  CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const Feature = ({ appealJob }) => {
  const {company,location, salary,title,image,id}=appealJob
  const navigate=useNavigate()
  return (
    <div className='card border rounded bg-[#f0f8ff] p-5 mx-auto m-7 w-3/4 justify-between items-center'>
      <div>
      <img className='object-cover w-32' src={image} alt="" />
     </div>
      <h3 className='text-2xl'>{title}</h3>
      <h2>{company}</h2>
      <div className='flex mx-3 space-x-2'>
      <p> <span> <MapPinIcon className='w-5 inline-flex text-[#00ced1]' ></MapPinIcon></span>{location}</p>
      <p> <span> <CurrencyDollarIcon className='w-5 inline-flex text-[#f6546a]'></CurrencyDollarIcon></span>{salary}</p>
      </div>
     
      <button onClick={()=>navigate(`/viewDetails/${id}`)} className='btn bg-[#00ced1] mt-3 px-6 py-3 rounded'>View Details</button>
   
    </div>
  );
};

export default Feature;