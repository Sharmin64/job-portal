import React from 'react';

const Feature = ({ appealJob }) => {
  const {company,address, salary,title,image}=appealJob
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h2>{company}</h2>
      <p>{address}</p>
      <p>{salary}</p>
    </div>
  );
};

export default Feature;