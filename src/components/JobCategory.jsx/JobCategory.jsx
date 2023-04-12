import React from 'react';

const JobCategory = ({category}) => {
    // console.log(category);
    const {img, name, job_abl} = category;

    return (
        <div className='p-10 header-bg rounded-lg'>
            <img className='p-4 bg-violet-100 rounded-lg' src={img} alt="" />
            <h3 className='mt-8 mb-2 text-xl font-bold'>{name}</h3>
            <p className='text-gray-400'>{job_abl}+ Jobs Available</p>
        </div>
    );
};

export default JobCategory;