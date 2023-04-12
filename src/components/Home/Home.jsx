import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory.jsx/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {
    const [isJobFeatures, setIsJobFeatures] = useState(false);
    const [categories, setCategories] = useState([]);

    const allJobFeatures = useLoaderData();
    const defaultJobFeatures = allJobFeatures.slice(0, 4);

    const jobFeatures = (isJobFeatures ? allJobFeatures : defaultJobFeatures);
    // console.log(allJobFeatures);
    // console.log(defaultJobFeatures);
    // console.log(jobFeatures);

    useEffect(() => {

        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, []);

    return (
        <div>
            {/* header section */}
            <div className='my-container grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center'>
                <div className=''>
                    <div className='text-7xl font-bold'>
                        <span>One Step </span> <br />
                        <span>Closer To Your</span> <br />
                        <span className='my-color'>Dream Job</span>
                    </div>
                    <p className='mt-6 mb-8 text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className='my-bg-color text-white text-xl font-bold px-7 py-5 rounded-lg'>
                        Get Started
                    </button>
                </div>
                <div className=''>
                    <img src="/public/assets/All-Images/header-cover.png" alt="" />
                </div>
            </div>

            {/* job category section */}
            <section className='my-container'>
                <h1 className='text-center text-5xl font-bold'>Job Category List</h1>
                <p className='text-center mt-4 mb-8 text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future.</p>

                <div className='grid grid-cols-1 md:grid-cols-4  gap-6 '>
                    {
                        categories.map(category =>
                            <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </section>

            {/* job features section */}
            <section className='my-container'>
                <h1 className='text-5xl text-center font-bold '>Featured Jobs</h1>
                <p className='text-center text-gray-400 mt-4 mb-8'>Explore  job features with all the information you need. Its your future.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        jobFeatures.map(jobFeature =>
                            <JobFeature
                                key={jobFeature.id}
                                jobFeature={jobFeature}
                            ></JobFeature>)
                    }
                </div>

                <div className='text-center mt-10'>
                    <button
                        onClick={() => setIsJobFeatures(true)}
                        className={`${isJobFeatures ? 'hidden' : ''} mx-auto my-bg-color py-3 px-8 text-xl font-bold text-white rounded`}>
                        See All Jobs
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;