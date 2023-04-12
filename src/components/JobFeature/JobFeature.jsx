import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobFeature = ({ jobFeature }) => {
    // console.log(jobFeature);
    const { id, name, company, logo, environment, location, salary } = jobFeature;

    const navigate = useNavigate();
    const jobDetailHandler = () => {
        navigate(`/job-details/${id}`)
    }

    return (
        <div className='border p-4 md:p-10 rounded-lg'>
            <img className='h-11' src={logo} alt="" />
            <h3 className='mt-8 mb-2 text-2xl font-bold'>{name}</h3>
            <p className='text-xl text-gray-400 font-semibold'>{company}</p>

            <div className='flex my-4 gap-4'>
                <button className='py-2 px-5 border border-blue-500 rounded font-bold text-violet-600'>{environment.type}</button>
                <button className='py-2 px-5 border border-blue-500 rounded font-bold text-violet-600'>{environment.status}</button>
            </div>

            <div className='mb-6 flex gap-6'>
                <div className='flex items-center gap-2'>
                    <img src="/public/assets/Icons/Location Icon.png" alt="" />
                    <p className='text-xl text-gray-400 font-semibold'>{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/public/assets/Icons/Frame.png" alt="" />
                    <p className='text-xl text-gray-400 font-semibold'>Salary : {salary}</p>
                </div>
                
            </div>
            
            <button onClick={jobDetailHandler} className='my-bg-color py-3 px-4 text-xl font-bold text-white rounded'>View Details</button>
        </div>
    );
};

export default JobFeature;