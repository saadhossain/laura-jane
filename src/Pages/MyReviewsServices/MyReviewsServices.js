import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewDisplay from './MyReviewDisplay';
import MyServiceDisplay from './MyServiceDisplay';

const MyReviewsServices = () => {
    //Get the user from Context/Auth
    const {user} = useContext(AuthContext);
    const email = user?.email;
    //Get the Reviews for logged in users
    const [reviews, setReviews] = useState();
    //Get the Services added by the logged in users
    const [services, setServices] = useState();
    //Fetch Services from the server using email as query string
    useEffect(()=> {
        fetch(`http://localhost:5000/services?email=${email}`)
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.error(err))
    }, [email])
    //Fetch Reviews from the server using email as query string
    useEffect(()=> {
        fetch(`http://localhost:5000/reviews?email=${email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error(err))
    }, [email]);

    return (
        <div className='bg-slate-100'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-5 lg:flex lg:gap-10'>
                <div className='w-full lg:w-2/4'>
                    <h2 className='text-2xl font-bold bg-jane text-white text-center py-3 rounded-t-lg'>My Reviews</h2>
                    <div>
                        {
                        reviews?.map(review=> <MyReviewDisplay
                            key={review._id}
                            review={review}
                        ></MyReviewDisplay>)
                        }
                    </div>
                </div>
                <div className='w-full lg:w-2/4'>
                    <h2 className='text-2xl font-bold bg-jane text-white text-center py-3 rounded-t-lg'>My Services</h2>
                    <div>
                        {
                        services?.map(service => <MyServiceDisplay
                        key={service._id}
                        service={service}
                        ></MyServiceDisplay>) 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsServices;