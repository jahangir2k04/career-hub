import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJobs } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    // console.log(allJobs);
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedAppliedJobs = getAppliedJobs();
        const saveAppliedJobs = [];

        for (const id in storedAppliedJobs) {
            const addedAppliedJobs = allJobs.find(job => job.id === id);
            saveAppliedJobs.push(addedAppliedJobs);
        }
        setAppliedJobs(saveAppliedJobs);

    }, []);


    const handleFilter = (jobType) => {
        const storedAppliedJobs = getAppliedJobs();
        // const saveAppliedJobs = [];

        const addedAppliedJobs = allJobs.filter(job => job.environment.type === jobType);
        // saveAppliedJobs.push(addedAppliedJobs);
        // setAppliedJobs(saveAppliedJobs);
        setAppliedJobs(addedAppliedJobs);
    }


    return (
        <div className='my-container'>
            <h3 className='text-center text-5xl font-bold mb-8'>Applied Jobs</h3>
            <div className='flex justify-end gap-6 mb-6'>
                <button onClick={() => handleFilter('Onsite')} className='w-36 my-bg-color py-3 px-4 text-xl font-bold text-white rounded'>Onsite</button>

                <button onClick={() => handleFilter('Remote')} className='w-36 my-bg-color py-3 px-4 text-xl font-bold text-white rounded'>Remote</button>
            </div>

            <div>
                {
                    appliedJobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;