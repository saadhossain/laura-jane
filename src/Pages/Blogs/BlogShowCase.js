import React from 'react';
import { Link } from 'react-router-dom';

const BlogShowCase = ({ blog }) => {
    const { _id, title, thumbnail, description, author, publishedOn } = blog
    return (
        <div>
            <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-md bg-slate-100 text-gray-900 relative">
                <div>
                    <img src={thumbnail} alt="" className="object-cover w-full mb-4 h-52" />
                    <div className='p-6'>
                        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                        <p className="text-md">{description.length > 200 ? description.slice(0, 200) + ' .....' : description}</p>
                    </div>
                </div>
                <div className="flex mb-5 ml-5 gap-5">
                    <img alt="" src={author?.img ? author.img : 'https://i.ibb.co/mtVG4YQ/laura-jane-author.jpg'} className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-md font-semibold">{author?.name ? author.name : 'Laura Jane'}</h3>
                        <span className="text-xs">{publishedOn.toString().slice(0, 10)}</span>
                    </div>
                </div>
                <Link to={`/blog/${_id}`}><button className='jane-btn absolute bottom-5 right-3'>Read More</button></Link>
            </div>
        </div>
    );
};

export default BlogShowCase;