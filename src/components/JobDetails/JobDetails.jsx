import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    const jobData = useLoaderData();
    const [job, setJob] = useState([]);
    // console.log(job);

    useEffect(() => {
        if (jobData) {
            const checkData = jobData.find(jd => jd.id == jobId);
            setJob(checkData);
        }
    }, []);

    return (
        <div>
            <h3>Job Details</h3>
            <div>
                <p></p>
            </div>
        </div>
    );
};

export default JobDetails;