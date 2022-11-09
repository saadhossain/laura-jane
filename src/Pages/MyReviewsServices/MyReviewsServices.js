import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewDisplay from './MyReviewDisplay';
import MyServiceDisplay from './MyServiceDisplay';

const MyReviewsServices = () => {
    //Get the user from Context/Auth
    const {user, logOut} = useContext(AuthContext);
    const email = user?.email;
    //Get the Reviews for logged in users
    const [reviews, setReviews] = useState();
    //Get the Services added by the logged in users
    const [services, setServices] = useState();
    //Fetch Reviews from the server using email as query string
    useEffect(()=> {
        fetch(`http://localhost:5000/reviews?email=${email}`,{
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('Access_Token')}`
            }
        })
        .then(res => {
            //logout user if token doesn't match
            if(res.status === 401 || res.status === 403){
                return logOut()
            }
            return res.json()
        })
        .then(data => setReviews(data))
        .catch(err => console.error(err))
    }, [email, logOut]);
    //Fetch Services from the server using email as query string
    useEffect(()=> {
        fetch(`http://localhost:5000/services?email=${email}`, {
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('Access_Token')}`
            }
        })
        .then(res => {
            //logout user if token doesn't match
            if(res.status === 401 || res.status === 403){
                return logOut()
            }
            return res.json()
        })
        .then(data => setServices(data))
        .catch(err => console.error(err))
    }, [email, logOut])

    //Review Delete Functionality
    const deleteReview = (id) => {
        const confirmation = window.confirm('Do you want to Delete This Review?')
        if(confirmation){
            fetch(`http://localhost:5000/reviews/delete/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('Your Review Deleted')
                    const remainingReview = reviews.filter(review => review._id !== id)
                    setReviews(remainingReview)
                }
            })
            .catch(err => console.error(err))
        }
    }
    //Service Delete Functionality

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
                            deleteReview={deleteReview}
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