import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const PostBlog = () => {
    //Get Logged in user from context
    const { user } = useContext(AuthContext);

    //Store all Field value when user input
    const [blogDetails, setBlogDetails] = useState()
    const handleFieldValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedBlog = { ...blogDetails };
        updatedBlog[field] = value;
        setBlogDetails(updatedBlog)

    }
    //Store all Service data to make it easier to send via body
    const blogData = {
        title: blogDetails?.title,
        description: blogDetails?.description,
        thumbnail: blogDetails?.thumbnail,
        addedBy: user.email,
        author : {
            name: user.displayName ? user.displayName : 'Laura Jane',
            img : user.photoURL ? user.photoURL : 'https://i.ibb.co/mtVG4YQ/laura-jane-author.jpg',
        },
        publishedOn : new Date()
    }
    //Handle Post/Create/Add new Service
    const handleAddService = (e) => {
        e.preventDefault()
        console.log(blogData);
        fetch('http://localhost:5000/blog/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New Article Added Successful...')
                    e.target.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto lg:flex gap-5 justify-center items-start my-5'>

            <div className="w-full lg:w-9/12 py-8 rounded-xl bg-jane text-white flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center mb-5">Publish New Article</h1>
                <form onSubmit={handleAddService} className="space-y-4 mx-5 ">
                    {/* Field First Row */}
                    <div className='lg:flex gap-3'>
                        <div>
                            <label htmlFor="title" className="text-lg font-semibold">Title</label>
                            <input onBlur={handleFieldValue} type="text" name="title" id="title" placeholder="Enter Title" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="thumbnail" className="text-md font-semibold">Thumbnail</label>
                            <input onBlur={handleFieldValue} type="text" name="thumbnail" id="thumbnail" placeholder="Article Thumbnail URL/Link" className="w-full px-4 py-3 rounded-md text-gray-900" />
                            <p className='text-jane2nd'>Dimention 450 X 250 pixels</p>
                        </div>
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="description" className="block text-md font-semibold">Write Article Details</label>
                        <textarea onBlur={handleFieldValue} name="description" id="description" placeholder="Write Article Details" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-white font-bold bg-jane2nd rounded-3xl">Publish</button>
                </form>
            </div>
        </div>
    );
};

export default PostBlog;