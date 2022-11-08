import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const AddService = () => {
    //Get Logged in user from context
    const { user } = useContext(AuthContext);

    //Store all Field value when user input
    const [serviceDetails, setServiceDetails] = useState()
    const handleFieldValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedDetails = {...serviceDetails};
        updatedDetails[field] = value;
        setServiceDetails(updatedDetails)

    }
    //Store all Service data to make it easier to send via body
    const serviceData = {
        name: serviceDetails?.title,
        description: serviceDetails?.description,
        serviceCost: serviceDetails?.fees,
        completedCase: serviceDetails?.completed,
        rating: {
            total: serviceDetails?.totalRate,
            rate: serviceDetails?.rating
        },
        img: serviceDetails?.serviceImg,
        addedBy: user.email
    }
    //Handle Post/Create/Add new Service
    const handleAddService = (e) => {
        e.preventDefault()
        console.log(serviceDetails);
        fetch('http://localhost:5000/services/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('New Service Added Successful...')
                e.target.reset()
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto lg:flex gap-5 justify-center items-start my-5'>

            <div className="w-full lg:w-9/12 py-8 rounded-xl bg-jane text-white flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center mb-5">Add New Service</h1>
                <form onSubmit={handleAddService} className="space-y-4 mx-5 ">
                    {/* Field First Row */}
                    <div className='lg:flex gap-3 mx-2 lg:mx-0 '>
                        <div>
                            <label htmlFor="title" className="text-lg font-semibold">Service Title</label>
                            <input onBlur={handleFieldValue} type="text" name="title" id="title" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="serviceImg" className="text-md font-semibold">Service Image</label>
                            <input onBlur={handleFieldValue} type="text" name="serviceImg" id="serviceImg" placeholder="Service Image URL/Link" className="w-full px-4 py-3 rounded-md text-gray-900" />
                            <p className='text-jane2nd'>Picture Dimention 450 X 250 pixels</p>
                        </div>
                    </div>
                    {/* Input Fields Second Row */}
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mx-2 lg:mx-0 '>
                        <div>
                            <label htmlFor="fees" className="text-md font-semibold">Service Fees</label>
                            <input onBlur={handleFieldValue} type="digit" name="fees" id="fees" placeholder="E.g. $200 Fees" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="completed" className="text-md font-semibold">Completed Case</label>
                            <input onBlur={handleFieldValue} type="digit" name="completed" id="completed" placeholder="E.g. 320 Case" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="rating" className="text-md font-semibold">Rating</label>
                            <input onBlur={handleFieldValue} type="number" name="rating" id="rating" placeholder="E.g. 4.9" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="totalRate" className="text-md font-semibold">Total Feedback</label>
                            <input onBlur={handleFieldValue} type="digit" name="totalRate" id="totalRate" placeholder="E.g. 490" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                    </div>
                    <div className="space-y-1 text-lg mx-2 lg:mx-0">
                        <label htmlFor="description" className="block text-md font-semibold">Write Service Details</label>
                        <textarea onBlur={handleFieldValue} name="description" id="description" placeholder="Write Service Details" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-white font-bold bg-jane2nd rounded-3xl">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;