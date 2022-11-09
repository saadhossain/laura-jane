import React from 'react';
import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesShowcase = ({ service }) => {
    const { _id, name, description, completedCase, img, serviceCost, rating } = service;
    return (
        <div>
            <div className="rounded-lg shadow-xl w-full bg-[#ebebeb] text-gray-900 relative">
                <PhotoProvider>
                    <PhotoView src={img}>
                    <img src={img} alt={name} className="w-full h-60 rounded-t-lg" />
                    </PhotoView>
                </PhotoProvider>
                <button className='bg-jane2nd rounded-lg py-1 px-2 text-white font-semibold absolute top-2 left-2 shadow-xl'>Success :{completedCase} Case</button>
                <div className="p-3">
                    <div className="flex items-center space-x-3">
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1 items-center text-white'>
                                <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                                <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                                <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                                <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                                <p className='font-semibold text-gray-900'>{rating.rate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className='flex justify-between'>
                            <h2 className='text-xl font-semibold bg-jane text-white py-1 px-2 my-2 rounded-lg'>{name}</h2>
                            <h2 className='text-xl font-semibold bg-jane text-white py-1 px-2 my-2 rounded-lg'>Fees ${serviceCost}</h2>
                        </div>
                        <p className="text-sm">
                            {description.length > 200 ? description.slice(0, 200) + '...' : description}
                        </p>
                    </div>
                    <Link to={`/service/${_id}`}><button className='jane-btn my-5'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesShowcase;