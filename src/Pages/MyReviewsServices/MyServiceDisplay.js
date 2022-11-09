import React from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyServiceDisplay = ({ service }) => {
    const { _id, img, name, serviceCost, completedCase, description, rating } = service;

    return (
        <div>
            <div className='bg-white py-5 px-4 mb-5 rounded-lg shadow-lg'>
                <div className='grid grid-cols-2 lg:grid-cols-3 items-start justify-between'>
                    <img src={img} alt={name} className='w-32 rounded-lg' />
                    <div className='-ml-6 mr-2'>
                        <h3 className='text-xl font-semibold bg-jane px-2 py-1 rounded text-white'>{name}</h3>
                        <h3 className='text-lg font-semibold text-jane'>Service Fees: ${serviceCost}</h3>
                    </div>
                    {/* This will shown only large device */}
                    <div className='text-end hidden lg:block'>
                        <h3 className='text-lg font-semibold text-jane'>Case: {completedCase}</h3>
                        <h3 className='text-lg font-semibold text-jane'>Feedback: {rating.total}</h3>
                    </div>
                </div>
                {/* this will shown only small device */}
                <div className='flex justify-between mt-2 lg:hidden border-t-2'>
                    <h3 className='text-lg font-semibold text-jane'>Case: {completedCase}</h3>
                    <h3 className='text-lg font-semibold text-jane'>Feedback: {rating.total}</h3>
                </div>
                <p className='py-3'>{description}</p>
                <div className='flex justify-end'>
                    <Link to={`/service/edit/${_id}`}>
                        <BiMessageSquareEdit className='h-5 w-5 lg:h-6 lg:w-8 text-green-700'></BiMessageSquareEdit>
                    </Link>
                    <MdDeleteForever className='h-5 w-5 lg:h-6 lg:w-8 text-red-600'></MdDeleteForever>
                </div>
            </div>
        </div>
    );
};

export default MyServiceDisplay;