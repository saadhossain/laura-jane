import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
    //Set page title
    useTitle('Edit Review')
    const { user } = useContext(AuthContext);
    const review = useLoaderData()[0];
    const { _id, serviceId, reviewerName, rating, reviewerImg, description } = review;
    //Use Navigate after redirecting to activity dashboard after successfully edit
    const navigate = useNavigate()
    //Storing Rating Point to a state because it is changeable
    const [updatedRating, setUpdatedRating] = useState(rating);
    //Storing Rating details to a state
    const [reviewDetails, setReviewDetails] = useState();

    //Store Review data to a variable 
    const reviewData = {
        serviceId,
        email: user?.email,
        reviewerName: reviewDetails?.reviewerName ? reviewDetails.reviewerName : reviewerName,
        rating: updatedRating,
        reviewerImg: reviewDetails?.reviewerImage ? reviewDetails.reviewerImage : reviewerImg,
        description: reviewDetails?.description ? reviewDetails.description : description
    }
    //Handle Adding Review functionality
    const updateReview = (e) => {
        e.preventDefault();
        fetch(`https://laura-jane.vercel.app/reviews/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Your Review has been Updated')
                    navigate('/activity')
                }
            })
            .catch(err => console.error(err))
    }
    //Using onblure to store all input data together in a fency way, so that in future if we want to add more field we don't need to collect that data manually...
    const handleFieldValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRatingDetails = { ...reviewDetails };
        newRatingDetails[field] = value;
        setReviewDetails(newRatingDetails)
    }


    return (
        <div className='w-11/12 mx-auto flex justify-center my-10'>
            <div className="w-full lg:w-7/12 py-8 rounded-xl bg-jane text-white flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center mb-5">Update Your Review</h1>
                <form onSubmit={updateReview} className="space-y-4">
                    <div className='lg:flex justify-between gap-3 mx-5 lg:mx-0 '>
                        <div>
                            <label htmlFor="reviewerName">Your Name</label>
                            <input onChange={handleFieldValue} type="text" name="reviewerName" id="reviewerName" defaultValue={reviewerName} placeholder={reviewerName} readOnly className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" id="email" placeholder={user.email} readOnly className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                    </div>
                    <div className='lg:flex gap-3 justify-between items-center mx-5 lg:mx-0'>
                        <div>
                            <label htmlFor="reviewerImage">Update Picture</label>
                            <input onChange={handleFieldValue} type="text" name="reviewerImage" id="reviewerImage" defaultValue={reviewerImg} placeholder={reviewerImg} className="w-full px-4 py-3 rounded-md text-gray-900" />
                            <p className='text-jane2nd'>Picture Dimention 250 X 250 pixels</p>
                        </div>
                        <div>
                            <label>Edit Your Experience</label>
                            <div className='flex justify-between items-center gap-5 mt-1'>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setUpdatedRating(1)} className={updatedRating === 1 ? 'selected' : 'rating-btn'}>1</span>
                                    <p>Bad</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setUpdatedRating(2)} className={updatedRating === 2 ? 'selected' : 'rating-btn'}>2</span>
                                    <p>Neutral</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setUpdatedRating(3)} className={updatedRating === 3 ? 'selected' : 'rating-btn'}>3</span>
                                    <p>Good</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setUpdatedRating(4)} className={updatedRating === 4 ? 'selected' : 'rating-btn'}>4</span>
                                    <p>Satisfy</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setUpdatedRating(5)} className={updatedRating === 5 ? 'selected' : 'rating-btn'}>5</span>
                                    <p>Happy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1 text-lg mx-5 lg:mx-0">
                        <label htmlFor="description" className="block">Edit your Experience</label>
                        <textarea onChange={handleFieldValue} name="description" id="description" defaultValue={description} placeholder={description} className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-white font-bold bg-jane2nd rounded-3xl">Update Review</button>
                </form>
            </div>
        </div>
    );
};

export default EditReview;