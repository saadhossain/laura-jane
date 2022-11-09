import React from 'react';
import { Link } from 'react-router-dom';

const BlogShowCase = ({ blog }) => {
    const { title, thumbnail, description, author } = blog
    return (
        <div>
            <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-md bg-slate-100 dark:text-gray-900">
                <div>
                    <img src={thumbnail} alt="" className="object-cover w-full mb-4 h-52" />
                    <div className='p-6'>
                        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                        <p className="text-md">{description}</p>
                    </div>
                </div>
                <div className="flex mb-5 ml-5">
                    <img alt="" src={author?.img || 'https://i.ibb.co/mtVG4YQ/laura-jane-author.jpg'} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link className="text-sm font-semibold">{author?.name || 'Laura Jane'}</Link>
                        <span className="text-xs">4 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogShowCase;