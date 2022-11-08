import React from 'react';
import { MdStarRate } from 'react-icons/md';
const ReviewShowCase = ({ review }) => {
    console.log(review);
    const { reviewerImg, reviewerName, rating, description, reviewPlace } = review;
    return (
        <div>
            <div className="rounded-md shadow-md bg-gray-200 text-gray-900">
                <div className="flex items-center p-3 pb-1 gap-2 border-b-[1px] border-gray-500 mx-5">
                    <img src={reviewerImg} alt={reviewerName} className="w-20 h-20 rounded-full shadow-lg" />
                    <h2 className="text-lg font-semibold leading-none">{reviewerName}</h2>
                </div>
                <div className="p-5 pt-2">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center text-white'>
                            <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                            <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                            <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                            <MdStarRate className='bg-jane2nd w-5 h-5'></MdStarRate>
                            <p className='font-semibold text-gray-900'>{rating}</p>
                        </div>
                        <p className='font-semibold text-gray-900'>{reviewPlace}</p>
                    </div>
                    <p className="text-sm font-semibold mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewShowCase;