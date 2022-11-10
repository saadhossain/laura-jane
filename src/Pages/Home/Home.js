import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../../Componets/AboutSection';
import HomeCarousel from '../../Componets/HomeCarousel';
import PersonalizedAttention from '../../Componets/PersonalizedAttention';
import ReputationSection from '../../Componets/ReputationSection';
import ServicesShowcase from '../../Componets/ServicesShowcase';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://laura-jane.vercel.app/services/limit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <h1 className='text-3xl lg:text-6xl font-bold text-jane text-center my-2 lg:my-5'>Featured Services</h1>
            <div className='w-11/12 lg:w-10/12 mx-auto grid lg:grid-cols-3 gap-5 my-2 lg:my-5'>
                {
                    services.map(service => <ServicesShowcase
                        key={service._id}
                        service={service}
                    ></ServicesShowcase>)
                }
            </div>
            <div className='flex justify-center my-5'>
                <Link to='/services'><button className='jane-btn'>Show All Service</button></Link>
            </div>
            <AboutSection></AboutSection>
            <ReputationSection></ReputationSection>
            <PersonalizedAttention></PersonalizedAttention>
        </div>
    );
};

export default Home;