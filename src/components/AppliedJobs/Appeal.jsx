import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appeal = ({ jobDetail }) => {
  const {location,image,schedule,distance,company,title} = jobDetail

    const navigateDetails = useNavigate()
  const handleBack=()=> {
    navigateDetails(-1)
}
  return (
    <>
      <div className='border border-gray-300 p-8 w-full flex items-center gap-10 mb-5 rounded'>
            <div className='w-28 h-28'>
                <img className='' src={image} alt="" />
            </div>
            <div className='w-full flex justify-between items-center'>
                <div >
                    <h2 className='font-bold text-2xl text-[#474747] my-3'>{title}</h2>
                    <h3 className='font-semibold text-xl text-[#757575]'>{company}</h3>
                    <div className='flex items-center gap-3 my-3'>
                        <button className='my-rs-btn' >{distance}</button>
                        <button className='my-rs-btn'>{schedule}</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-xl text-[#757575]'>{location}</p>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <button onClick={handleBack}  className='my-btn my-4 mr-auto'>View Details</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Appeal;