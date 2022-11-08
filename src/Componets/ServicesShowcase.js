import React from 'react';
import { Link } from 'react-router-dom';

const ServicesShowcase = ({service}) => {
    const {_id, name, description, completedCase, img} = service;
    return (
        <div>
            <div className="rounded-lg shadow-xl w-full bg-[#ebebeb] text-gray-900 relative">
                <img src={img} alt={name} className="w-full h-60 rounded-t-lg" />
                <button className='bg-jane rounded-lg py-1 px-2 text-white font-semibold absolute top-2 left-2 shadow-xl'>Success :{completedCase} Case</button>
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
                    </div>
                    <Link to={`/service/${_id}`}><button className='jane-btn my-5'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesShowcase;