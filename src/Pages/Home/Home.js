import React, { useEffect, useState } from 'react';
import HomeCarousel from '../../Componets/HomeCarousel';
import ServicesShowcase from '../../Componets/ServicesShowcase';
const Home = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(()=> {
        fetch('http://localhost:5000/services/')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <div className='w-11/12 lg:w-10/12 mx-auto grid lg:grid-cols-3 gap-5 my-5'>
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

export default Home;