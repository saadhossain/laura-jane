import React from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyReviewDisplay = ({ review, deleteReview }) => {
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
                    <Link to={`/review/edit/${_id}`}>
                        <BiMessageSquareEdit className='h-5 w-5 lg:h-6 lg:w-8 text-green-700' title='Edit Review'></BiMessageSquareEdit>
                    </Link>
                    <MdDeleteForever onClick={()=> deleteReview(_id)} className='h-5 w-5 lg:h-6 lg:w-8 text-red-600 cursor-pointer' title='Delete Review'></MdDeleteForever>
                </div>
            </div>
        </div>
    );
};

export default MyReviewDisplay;