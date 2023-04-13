import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    // console.log(job);
    const { id, name, company, logo, environment, location, salary } = job;

    const navigate = useNavigate();
    const jobDetailHandler = () => {
        navigate(`/job-details/${id}`)
    }

    return (
        <div>
            <div className='flex gap-8 p-8 border rounded-lg items-center mb-6'>
                <div className='w-60 h-60 bg-gray-100 rounded-lg grid items-center justify-center p-6'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h3 className='font-bold text-2xl text-gray-600'>{name}</h3>
                    <p className='text-xl font-semibold text-gray-400 mt-2'>{company}</p>
                    <div className='flex mt-4 mb-6 gap-4'>
                        <button className='py-2 px-5 border border-blue-500 rounded font-bold text-violet-600'>{environment.type}</button>
                        <button className='py-2 px-5 border border-blue-500 rounded font-bold text-violet-600'>{environment.status}</button>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-2'>
                            <img src="/public/assets/Icons/Location Icon.png" alt="" />
                            <p className='text-xl text-gray-400 font-semibold'>{location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src="/public/assets/Icons/Frame.png" alt="" />
                            <p className='text-xl text-gray-400 font-semibold'>Salary : {salary}</p>
                        </div>

                    </div>
                </div>
                <div className='ms-auto'>
                    <button onClick={() => jobDetailHandler(id)} className='my-bg-color py-3 px-4 text-xl font-bold text-white rounded'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;