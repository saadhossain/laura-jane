import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesShowcase from '../../Componets/ServicesShowcase';

const Services = () => {
    const services = useLoaderData([])
    return (
        <div>
            <h1 className='text-3xl lg:text-6xl font-bold text-jane text-center my-2 lg:my-5'>All Services</h1>
            <div className='w-11/12 lg:w-10/12 mx-auto grid lg:grid-cols-3 gap-5 my-2 lg:my-5'>
                {
                    services.map(service => <ServicesShowcase
                        key={service._id}
                        service={service}
                    ></ServicesShowcase>)
                }
            </div>
        </div>
    );
};

export default Services;