import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-container'>
                <div className='text-xl font-semibold mb-6'>
                    <p>1. When the context API is used ?</p>
                    <p>Answer :
                        <span className='text-gray-500'> When some data needs to be accessible at different nesting level components using props , it makes component reuse more difficult . But by using Context Api you can easily pass any data directly to any child component . </span>
                    </p>
                </div>
                <div className='text-xl font-semibold mb-6'>
                    <p>2. What is custom Hook ?</p>
                    <p>Answer :
                        <span className='text-gray-500'> A custom hook is a reusable JavaScript function that contains stateful logic and can be used by multiple components . </span>
                    </p>
                </div>
                <div className='text-xl font-semibold mb-6'>
                    <p>3. What is useRef and what does it do ?</p>
                    <p>Answer :
                        <span className='text-gray-500'> In React, useRef is a hook that returns a mutable ref object that can be used to hold a value or reference to a DOM node . </span>
                    </p>
                </div>
                <div className='text-xl font-semibold mb-6'>
                    <p>4. What is useMemo and what does it do ?</p>
                    <p>Answer :
                        <span className='text-gray-500'> In React, useMemo is a hook that allows you to memoize the result of a function and reuse it across re-renders of a component, improving performance by avoiding unnecessary calculations . </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;