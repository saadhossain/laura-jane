import React from 'react';
import {BiMessageSquareEdit} from 'react-icons/bi'
import {MdDeleteForever} from 'react-icons/md'

const MyReviewDisplay = ({ review }) => {
    const { _id, reviewerName, description, rating } = review;
    return (
        <div>
            <div className='bg-white py-5 px-4 mb-5 rounded-lg shadow-lg'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-jane'>{reviewerName}</h3>
                    <h3 className='text-lg font-semibold text-jane'>Rating: {rating}</h3>
                </div>
                <p className='py-3'>{description}</p>
                <div className='flex justify-end'>
                    <BiMessageSquareEdit className='h-5 w-5 lg:h-6 lg:w-8 text-green-700'></BiMessageSquareEdit>
                    <MdDeleteForever className='h-5 w-5 lg:h-6 lg:w-8 text-red-600'></MdDeleteForever>
                </div>
            </div>
        </div>
    );
};

export default MyReviewDisplay;