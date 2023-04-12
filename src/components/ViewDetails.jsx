import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';

const ViewDetails = () => {
  const applyCartHandle = (id) => {
   addToDb(id)
}
 
  const [details, setDetails] = useState([]);
    const dynamic = useParams();
    const dynamicId = dynamic.id;
   
    const data = useLoaderData();
    useEffect(() => {
        const detailsData = data.find((dt) => dt.id === dynamicId);
        setDetails(detailsData)
    }, [])
 
    const { id,description,responsibilities,requirements, location, experience,  job_title, salary, email, phone } = details
  return (
    <div>
  
<div className="main">
        <div className="header bg-[#ccd6db] py-20 my-container">
                    <h1 className='font-bold text-3xl text-[#1A1919] text-center'>Job Details</h1>
                </div>
                <div className="detailsBody my-container grid grid-cols-3 gap-4 my-32">
                    <div className="details col-span-2">
                        <p> <span className='font-bold text-base text-[#1A1919]'>Job Description: </span> <span className='font-medium text-base text-[#757575]'>{description}</span> </p>
                        <br />
                        <p><span className='font-bold text-base text-[#1A1919]'>Job Responsibility:</span> <span className='font-medium text-base text-[#757575]'>{responsibilities}</span></p>
                        <br />
                        <p className='font-bold text-base text-[#1A1919]'>Educational Requirements:</p>
                        <p className='font-medium text-base text-[#757575]'>{requirements}</p>
                        <br />
                        <p className='font-bold text-base text-[#1A1919]'>Experiences:</p>
                        <p className='font-medium text-base text-[#757575]'>{experience}</p>

                    </div>
                    <div className="apply">
                        <div className="card w-3/4 mx-auto py-8 px-6 bg-gray-200">
                            <h2 className='font-bold text-xl text-[#1A1919]'>Job Details</h2>
                            <br />
                            <hr className='w-full h-1 bg-slate-100' />
                            <br />
                            <p>
                                <span className='font-bold text-lg text-[#1A1919]'>Salary: </span>
                                <span className='font-semibold text-lg text-[#757575]'>{salary}</span>
                            </p>
                            <p>
                                <span className='font-bold text-lg text-[#1A1919]'>Job Title: </span>
                                <span className='font-semibold text-lg text-[#757575]'>{job_title}</span>
                            </p>
                            <br />
                            <h4 className='font-bold text-xl text-[#1A1919]' >Contact Information</h4>
                            <br />
                            <hr className='w-full h-1 bg-slate-100' />
                            <br />
                            <p>
                                <span className='font-bold text-lg text-[#1A1919]'>Phone: </span>
                                <span className='font-semibold text-lg text-[#757575]'>{phone}</span>
                            </p>
                            <p>
                                <span className='font-bold text-lg text-[#1A1919]'>Email: </span>
                                <span className='font-semibold text-lg text-[#757575]'>{email}</span>
                            </p>
                            <p>
                                
                                <span className='font-bold text-lg text-[#1A1919]'>Address: </span>  <span className='font-semibold text-lg text-[#757575]'>{location}</span></p>
                        </div>
                        <div className='w-3/4 mx-auto'>
                            <span>
                                <button onClick={() => applyCartHandle(id)} className='my-btn w-full my-2'>Apply Now</button>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  );
};

export default ViewDetails;