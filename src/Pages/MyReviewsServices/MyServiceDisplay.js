import React from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

const MyServiceDisplay = ({ service }) => {
    const { _id, name, serviceCost, completedCase, description, rating } = service;

    return (
        <div>
            <div className='bg-white py-5 px-4 mb-5 rounded-lg shadow-lg'>
                <div className='flex justify-between items-center mb-3'>
                    <h3 className='text-lg font-semibold text-jane'>{name}</h3>
                    <h3 className='text-lg font-semibold text-jane'>Feedback: {rating.total}</h3>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <h3 className='text-lg font-semibold text-jane'>Service Fees: ${serviceCost}</h3>
                    <h3 className='text-lg font-semibold text-jane'>Completed Case: {completedCase}</h3>
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

export default MyServiceDisplay;