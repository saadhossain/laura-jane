import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-jane"></div>
        </div>
    );
};

export default Loader;