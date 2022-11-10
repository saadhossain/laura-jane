import React, { useContext, useEffect, useState } from 'react';
import { MdRateReview } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewShowCase from '../../Componets/ReviewShowCase';
import { AuthContext } from '../../Context/AuthProvider';

const ServiceDetails = () => {
    //Get user from the Context/Auth
    const { user } = useContext(AuthContext)
    //Get Single Service from the loader
    const service = useLoaderData()[0]
    const { _id, name, description, img, serviceCost, completedCase, rating } = service;
    //Get the All Reviews for a Single Service
    const [reviews, setReviews] = useState([]);
    //Fetch Data using query, while quering pass single service id;
    useEffect(() => {
        fetch(`https://laura-jane.vercel.app/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5 lg:flex gap-5'>
            <div className='w-full lg:w-2/4 relative bg-slate-100 rounded-lg shadow-xl'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt={name} className='w-full rounded-t-lg' />
                    </PhotoView>
                </PhotoProvider>
                <button className='bg-jane2nd rounded-lg py-1 px-2 text-white font-semibold absolute top-2 left-2 shadow-xl'>Success :{completedCase} Case</button>
                <div className='p-5 flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold text-jane'>{name}</h2>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-lg font-semibold text-jane'>Service Fee : ${serviceCost}</h4>
                        <p className='font-semibold bg-jane2nd text-white py-1 px-2 rounded-2xl'>Rating: {rating.rate} Feedback {rating.total}</p>
                    </div>
                    <p>{description}</p>
                    <p className='font-semibold'>
                        <span className='text-red-500 mr-2'>***</span>
                        Service Fee 50% for Orphan and Poor victim.
                    </p>
                    <Link to={`/service/${_id}`}><button className='jane-btn my-5'>Book Service</button></Link>
                </div>
            </div>
            <div className='w-full lg:w-2/4'>
                <div className='flex justify-between items-center bg-jane p-2 rounded-lg mt-5 lg:mt-0 mb-5 text-white'>
                    <h2 className='text-xl lg:text-3xl font-semibold'>Clients Feedback</h2>

                    <Link to={`/write-review/${_id}`} className='flex items-center gap-2 font-semibold'>
                        <MdRateReview className='h-8 w-8'></MdRateReview>
                        {user?.email ? 'Write A Review' : 'Login to Write Review'}
                    </Link>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-2'>
                    {
                        reviews.map(review => <ReviewShowCase
                            key={review._id}
                            review={review}
                        ></ReviewShowCase>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;