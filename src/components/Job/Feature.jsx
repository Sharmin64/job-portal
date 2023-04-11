import React from 'react';
import {  CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Feature = ({ appealJob }) => {
  const {company,location, salary,title,image}=appealJob
  return (
    <div className='card'>
      <div>
      <img className='object-cover w-32' src={image} alt="" />
     </div>
      <h3 className='text-2xl'>{title}</h3>
      <h2>{company}</h2>
      <div className='flex mx-3'>
      <p className='mx-4'> <span> <MapPinIcon className='w-5 inline-flex' ></MapPinIcon></span>{location}</p>
      <p> <span> <CurrencyDollarIcon className='w-5 inline-flex'></CurrencyDollarIcon></span>{salary}</p>
      </div>
      <button>View Details</button>
    </div>
  );
};

export default Feature;