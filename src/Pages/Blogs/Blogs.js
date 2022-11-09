import React, { useContext, useEffect, useState } from 'react';
import { MdRateReview } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import BlogShowCase from './BlogShowCase';

const Blogs = () => {
    //Get the Logged in user from context/auth
    const { user } = useContext(AuthContext)
    const [blogs, setBlogs] = useState([])
    //Get all blogs from the server
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='w-11/12 lg:10/12 mx-auto my-5'>
            <div className='flex justify-between items-center bg-jane py-2 px-2 lg:px-10 rounded-lg mt-5 lg:mt-0 mb-5 text-white'>
                <h2 className='text-xl lg:text-3xl font-semibold'>Latest Articles</h2>

                <Link to='/blog/publish' className='flex items-center gap-2 font-semibold'>
                    <MdRateReview className='h-8 w-8'></MdRateReview>
                    {user?.email ? 'Publish A Blog' : 'Login to Publish A Blog'}
                </Link>
            </div>
            {/* Show All Blogs */}
            {
                blogs.map(blog => <BlogShowCase key={blog._id} blog={blog}></BlogShowCase>)
            }
        </div>
    );
};

export default Blogs;