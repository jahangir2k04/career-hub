import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJobs } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    // console.log(allJobs);
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect( () => {
        const storedAppliedJobs = getAppliedJobs();
        const saveAppliedJobs = [];

        for(const id in storedAppliedJobs){
            const addedAppliedJobs = allJobs.find(job => job.id === id);
            saveAppliedJobs.push(addedAppliedJobs);
        }
        setAppliedJobs(saveAppliedJobs);

    } , []);

    return (
        <div className='my-container'>
            <h3>Applied Jobs</h3>
            <div>
                {
                    appliedJobs.map( job => <AppliedJob
                        key={job}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;