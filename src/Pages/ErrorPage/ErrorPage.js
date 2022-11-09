import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='error relative'>
            <Link to='/' className='justify-center flex'>
                <button className='jane-btn absolute bottom-10'>BACK TO HOME</button>
            </Link>
        </div>
    );
};

export default ErrorPage;