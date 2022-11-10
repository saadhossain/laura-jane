import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const BlogDetails = () => {
    const blog = useLoaderData()[0]
    //Set title
    useTitle('Blog Details')
    const { title, thumbnail, description, author, publishedOn } = blog
    return (
        <div className='w-11/12 lg:w-8/12 mx-auto my-5'>
            <div>
                <h2 className='text-2xl font-semibold text-jane'>{title}</h2>
                <div className="flex mb-5 ml-5 gap-5">
                    <img alt="" src={author?.img ? author.img : 'https://i.ibb.co/mtVG4YQ/laura-jane-author.jpg'} className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col">
                        <h3 className="text-md font-semibold">{author?.name ? author.name : 'Laura Jane'}</h3>
                        <span className="text-xs">{publishedOn.toString().slice(0, 10)}</span>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    <PhotoProvider>
                        <PhotoView src={thumbnail}>
                            <img src={thumbnail} alt={title} className='rounded-xl' />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;