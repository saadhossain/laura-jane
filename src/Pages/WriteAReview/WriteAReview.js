import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './WriteReview.css';

const WriteAReview = () => {
    const { user } = useContext(AuthContext);
    //Get single Service we are writing review on it
    const service = useLoaderData()[0];
    const { _id, name, img, completedCase, description } = service;

    //Storing Rating Point to a state because it is changeable
    const [rating, setRating] = useState(1);
    //Storing Rating details to a state
    const [reviewDetails, setReviewDetails] = useState();

    //Store Review data to a variable 
    const reviewData = {
        serviceId: _id,
        email: user.email,
        reviewerName: reviewDetails?.reviewerName,
        rating: rating,
        reviewerImg: reviewDetails?.reviewerImage,
        description: reviewDetails?.description,
        addedOn: new Date()
    }
    //Handle Adding Review functionality
    const handleAddReview = (e) => {
        e.preventDefault();
        fetch('https://laura-jane.vercel.app/reviews/write', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added Successfully...')
                }
            })
            .catch(err => console.error(err))
        e.target.reset()
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
        <div className='w-11/12 lg:w-10/12 mx-auto lg:flex gap-5 justify-between items-start my-5'>

            <div className="w-full lg:w-8/12 py-8 rounded-xl bg-jane text-white flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center mb-5">Leave Your Review</h1>
                <form onSubmit={handleAddReview} className="space-y-4">
                    <div className='lg:flex justify-between gap-3 mx-5 lg:mx-0 '>
                        <div>
                            <label htmlFor="reviewerName">Your Name</label>
                            <input onBlur={handleFieldValue} type="text" name="reviewerName" id="reviewerName" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" id="email" placeholder={user.email} readOnly className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                    </div>
                    <div className='lg:flex gap-3 justify-between items-center mx-5 lg:mx-0'>
                        <div>
                            <label htmlFor="reviewerImage">Profile Picture</label>
                            <input onBlur={handleFieldValue} type="text" name="reviewerImage" id="reviewerImage" placeholder="Your Your Photo URL" className="w-full px-4 py-3 rounded-md text-gray-900" />
                            <p className='text-jane2nd'>Picture Dimention 250 X 250 pixels</p>
                        </div>
                        <div>
                            <label>Rate Your Experience</label>
                            <div className='flex justify-between items-center gap-5 mt-1'>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setRating(1)} className={rating === 1 ? 'selected' : 'rating-btn'}>1</span>
                                    <p>Bad</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setRating(2)} className={rating === 2 ? 'selected' : 'rating-btn'}>2</span>
                                    <p>Neutral</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setRating(3)} className={rating === 3 ? 'selected' : 'rating-btn'}>3</span>
                                    <p>Good</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setRating(4)} className={rating === 4 ? 'selected' : 'rating-btn'}>4</span>
                                    <p>Satisfy</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span onClick={() => setRating(5)} className={rating === 5 ? 'selected' : 'rating-btn'}>5</span>
                                    <p>Happy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1 text-lg mx-5 lg:mx-0">
                        <label htmlFor="description" className="block">Write your Experience</label>
                        <textarea onBlur={handleFieldValue} name="description" id="description" placeholder="Write your Experience" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-gray-900 font-bold bg-jane2nd rounded-3xl">Submit Review</button>
                </form>
            </div>
            {/* The Service you are reviewing for */}
            <div className="w-full lg:w-3/12 rounded-lg shadow-xl bg-[#ebebeb] text-gray-900 relative mt-5 lg:mt-0">
                <img src={img} alt={name} className="w-full h-60 rounded-t-lg" />
                <button className='bg-jane2nd rounded-lg py-1 px-2 text-white font-semibold absolute top-2 left-2 shadow-xl'>Success :{completedCase} Case</button>
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button type="button" title="Like post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="button" title="Bookmark post" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-3">
                        <h2 className='text-2xl font-semibold'>{name}</h2>
                        <p className="text-sm">
                            {description.length > 200 ? description.slice(0, 200) + '...' : description}
                        </p>
                        <Link to={`/service/${_id}`}>
                            <button className='jane-btn my-5'>See Latest Review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteAReview;