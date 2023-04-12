import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory.jsx/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {
    const [categories, setCategories] = useState([]);

    const jobFeatures = useLoaderData();
    // console.log(jobFeatures);
    
    useEffect( () => {

        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    } , []); 

    return (
        <div>
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
            </section>
        </div>
    );
};

export default Home;