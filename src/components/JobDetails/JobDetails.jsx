import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    const jobData = useLoaderData();
    const [job, setJob] = useState([]);
    // console.log(job);

    const { name, phone, email, des, res, requirement, experience, location, salary } = job;

    useEffect(() => {
        if (jobData) {
            const checkData = jobData.find(jd => jd.id == jobId);
            setJob(checkData);
        }
    }, []);

    return (
        <div className='my-container'>
            <h3 className='text-center font-bold text-2xl mb-5'>Job Details</h3>
            <div className="md:flex gap-8">
                <div className='md:w-[65%]'>
                    <p className='leading-8'>
                        <span className='font-bold'>Job Description : </span>
                        <span className='text-gray-500'>{des}</span>
                    </p>
                    <p className='my-6 leading-8'>
                        <span className='font-bold'>Job Responsibility : </span>
                        <span className='text-gray-500'>{res}</span>
                    </p>
                    <div className='mb-6 leading-8'>
                        <p className='font-bold'>Educational Requirements : </p>
                        <p className='text-gray-500'>{requirement}</p>
                    </div>
                    <div className='leading-8'>
                        <p className='font-bold'>Experiences : </p>
                        <p className='text-gray-500'>{experience}</p>
                    </div>
                </div>

                <div className='md:w-[35%]'>
                    <div className=' my-bg-color2 text-xl mb-6 p-7'>
                        <h3 className='text-xl font-bold'>Job Details</h3>
                        <hr className='my-6' />
                        <div className='flex items-center gap-2'>
                            <img src="/public/assets/Icons/Frame.png" alt="" />
                            <p>
                                <span className='font-semibold text-gray-700'>Salary </span> :
                                <span className='text-gray-400'> {salary}</span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src="/public/assets/Icons/Frame-1.png" alt="" />
                            <p className='mt-4 mb-8'>
                                <span className='font-semibold text-gray-700'>Job Title </span> :
                                <span className='text-gray-400'> {name}</span>
                            </p>
                        </div>

                        <h3 className='font-bold'>Contact Information</h3>
                        <hr className='my-6' />

                        <div className='flex items-center gap-2'>
                            <img src="/public/assets/Icons/Frame-2.png" alt="" />
                            <p>
                                <span className='font-semibold text-gray-700'>Phone </span> :
                                <span className='text-gray-400'> {phone}</span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <img src="/public/assets/Icons/Frame-3.png" alt="" />
                            <p>
                                <span className='font-semibold text-gray-700'>Email </span> :
                                <span className='text-gray-400'> {email}</span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src="/public/assets/Icons/Frame-4.png" alt="" />
                            <p>
                                <span className='font-semibold text-gray-700'>Address </span> :
                                <span className='text-gray-400'> {location}</span>
                            </p>
                        </div>
                    </div>
                    <button className='w-full my-bg-color text-xl font-bold text-white py-4 rounded-lg'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;