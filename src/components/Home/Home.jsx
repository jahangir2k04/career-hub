import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory.jsx/JobCategory';

const Home = () => {
    const [categories, setCategories] = useState([]);
    
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
                <p className='text-center mt-4 mb-8 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-1 md:grid-cols-4  gap-6 '>
                    {
                        categories.map(category => 
                        <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;