import React, { useEffect, useState } from 'react';
import ServicesShowcase from '../../Componets/ServicesShowcase';
import './Services.css';

const Services = () => {
    //Store data to this state
    const [services, setServices] = useState([])
    //Store total data count to this state
    const [totalService, setTotalService] = useState(0)
    const [servicePerPage, setServicePerPage] = useState(6)
    console.log(servicePerPage);
    //Current Page Number
    const [currentPage, setCurrentPage] = useState();
    //Calculate total page based on total service and total service to show per page
    const totalPage = Math.ceil(totalService / servicePerPage)
    //Get All Data and totalDatacount from the Database
    useEffect(() => {
        fetch(`https://laura-jane.vercel.app/services?servicePerPage=${servicePerPage}&currentPage=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.result)
                setTotalService(data.count)
            })
            .catch(err => console.error(err))
    }, [currentPage, servicePerPage])

    return (
        <div>
            <h1 className='text-3xl lg:text-6xl font-bold text-jane text-center my-2 lg:my-5'>All Services</h1>
            <div className='w-11/12 lg:w-10/12 mx-auto flex justify-end'>
                <label htmlFor="service" className='text-jane font-semibold mr-2'>Filter</label>
                <select onClick={(e) => setServicePerPage(e.target.value)} it="service" className='border-2 border-jane rounded font-semibold'>
                    <option value="3">3 Service</option>
                    <option value="6" selected>6 Service</option>
                    <option value="12">12 Service</option>
                    <option value="15">15 Service</option>
                </select>
            </div>
            <div className='w-11/12 lg:w-10/12 mx-auto grid lg:grid-cols-3 gap-5 my-2 lg:my-5'>
                {
                    services.map(service => <ServicesShowcase
                        key={service._id}
                        service={service}
                    ></ServicesShowcase>)
                }
            </div>
            <div className='flex justify-center my-5'>
                {
                    [...Array(totalPage).keys()].map(number => <button key={number}
                        onClick={() => setCurrentPage(number)}
                        className={currentPage === number ? 'page-selected' : 'page-btn'}
                    >
                        {number + 1}
                    </button>)
                }
            </div>
        </div>
    );
};

export default Services;