import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='header-bg'>
            <nav className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    {/* Logo Section */}
                    <Link to='/' className='inline-flex items-center'>
                        <BoltIcon className='h-6 w-6 text-violet-600' />
                        <span className='ml-2 text-4xl font-bold tracking-wide text-gray-800'>
                            Job Hunts
                        </span>
                    </Link>

                    {/* Nav Items Section */}
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/statistics'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/applied-jobs'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>


                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-violet-600' />
                        </button>

                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>
                                                <BoltIcon className='h-6 w-6 text-violet-600' />
                                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                    Job Hunts
                                                </span>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-violet-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/statistics'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Statistics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/applied-jobs'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Applied Jobs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/start-applying">
                                                    <button className='my-bg-color text-white text-base font-bold px-5 py-3 rounded-lg'>
                                                        Start Applying
                                                    </button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/start-applying" className='hidden md:block'>
                        <button className='my-bg-color text-white text-xl font-bold px-7 py-5 rounded-lg'>
                            Start Applying
                        </button>
                    </Link>
                </div>
            </nav>

            {/* <div className='my-container grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center'>
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
            </div> */}
        </div>
    )
};

export default Header;
