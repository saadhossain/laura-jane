import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()[0]
    // console.log(service[0]);
    const { _id, name, description, img, serviceCost, completedCase, rating } = service;
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5 lg:flex gap-10'>
            <div className='w-full lg:w-2/5 relative bg-slate-100 rounded-lg shadow-xl'>
                <img src={img} alt={name} className='w-full rounded-t-lg' />
                <button className='bg-jane2nd rounded-lg py-1 px-2 text-white font-semibold absolute top-2 left-2 shadow-xl'>Success :{completedCase} Case</button>
                <div className='p-5 flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold text-jane'>{name}</h2>
                    <div className='flex justify-between items-center'>
                    <h4 className='text-lg font-semibold text-jane'>Service Fee : ${serviceCost}</h4>
                    <p className='font-semibold bg-jane2nd text-white py-1 px-2 rounded-2xl'>Rating: {rating.rate} Total {rating.total} (person)</p>
                    </div>
                    <p>{description}</p>
                    <p className='font-semibold'>
                        <span className='text-red-500 mr-2'>***</span>
                        Service Fee 50% for Orphan and Poor victim.
                    </p>
                    <Link to={`/service/${_id}`}><button className='jane-btn my-5'>Book Service</button></Link>
                </div>
            </div>
            <div className='w-full lg:w-2/5'>
                <h1>Right SideBar</h1>
            </div>
        </div>
    );
};

export default ServiceDetails;