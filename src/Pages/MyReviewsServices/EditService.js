import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const EditService = () => {
    //Get Logged in user from context
    const { user } = useContext(AuthContext);
    //Use Navigate to redirect user to their activity dashboard after successful service update
    const navigate = useNavigate()
    //Get single Service that we editing
    const service = useLoaderData()[0];
    const {_id, name, img, completedCase, description, serviceCost, rating} = service;
    //Store all Field value when user input
    const [serviceDetails, setServiceDetails] = useState()
    const handleFieldValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedDetails = { ...serviceDetails };
        updatedDetails[field] = value;
        setServiceDetails(updatedDetails)
        console.log(updatedDetails);

    }
    //Store all Service data to make it easier to send via body
    //Here I am storing data conditionally because if anyone can't change any of the field then data will be undefiened, so to prevent this I am using conditons
    const serviceData = {
        name: serviceDetails?.title ? serviceDetails.title : name,
        description: serviceDetails?.description ? serviceDetails.description :description ,
        serviceCost: serviceDetails?.fees ? serviceDetails.fees : serviceCost,
        completedCase: serviceDetails?.completed ? serviceDetails.completed : completedCase,
        rating: {
            total: serviceDetails?.totalRate ? serviceDetails.totalRate : rating.total,
            rate: serviceDetails?.rating ? serviceDetails.rating : rating.rate
        },
        img: serviceDetails?.serviceImg ? serviceDetails.serviceImg : img,
        addedBy: user.email
    }
    //Handle Post/Create/Add new Service
    const handleUpdateService = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/services/edit/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Service Updated Successfully...')
                    navigate('/activity')
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto lg:flex gap-5 justify-center items-start my-5'>

            <div className="w-full lg:w-9/12 py-8 rounded-xl bg-jane text-white flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center mb-5">Update Service</h1>
                <form onSubmit={handleUpdateService} className="space-y-4 mx-5 ">
                    {/* Field First Row */}
                    <div className='lg:flex gap-3 mx-2 lg:mx-0 '>
                        <div>
                            <label htmlFor="title" className="text-lg font-semibold">Service Title</label>
                            <input onChange={handleFieldValue} type="text" name="title" id="title" defaultValue={name} placeholder={name} className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="serviceImg" className="text-md font-semibold">Service Image</label>
                            <input onChange={handleFieldValue} type="text" name="serviceImg" id="serviceImg" defaultValue={img} placeholder={img} className="w-full px-4 py-3 rounded-md text-gray-900" />
                            <p className='text-jane2nd'>Picture Dimention 450 X 250 pixels</p>
                        </div>
                        <img src={img} alt={name} className='w-32 rounded-lg hidden lg:block'/>
                    </div>
                    {/* Input Fields Second Row */}
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mx-2 lg:mx-0 '>
                        <div>
                            <label htmlFor="fees" className="text-md font-semibold">Service Fees</label>
                            <input onChange={handleFieldValue} type="digit" name="fees" id="fees" defaultValue={serviceCost} placeholder={serviceCost} className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="completed" className="text-md font-semibold">Completed Case</label>
                            <input onChange={handleFieldValue} type="digit" name="completed" id="completed" defaultValue={completedCase} placeholder={completedCase} className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="rating" className="text-md font-semibold">Rating</label>
                            <input onChange={handleFieldValue} type="digit" name="rating" id="rating" defaultValue={rating.rate} placeholder={rating.rate} className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="totalRate" className="text-md font-semibold">Total Feedback</label>
                            <input onChange={handleFieldValue} type="digit" name="totalRate" id="totalRate" defaultValue={rating.total} placeholder={rating.total} className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                    </div>
                    <div className="space-y-1 text-lg mx-2 lg:mx-0">
                        <label htmlFor="description" className="block text-md font-semibold">Write Service Details</label>
                        <textarea onChange={handleFieldValue} name="description" id="description" defaultValue={description} placeholder={description} className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-white font-bold bg-jane2nd rounded-3xl">Update Service</button>
                </form>
            </div>
        </div>
    );
};

export default EditService;