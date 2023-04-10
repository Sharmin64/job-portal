import React from 'react';

const Job = ({ job }) => {
  const {image, title,quantity}=job
  return (
    <div className='card bg-[#f0f8ff] p-7 my-6'>
      <img src={image}alt="" />
      <h3>{title}</h3>
      <p>{quantity} Jobs Available</p>
    </div>
  );
};

export default Job;