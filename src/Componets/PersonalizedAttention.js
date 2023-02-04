import React from 'react';
import Slide from 'react-reveal/Slide';
import attention from '../assests/lawyer-listening.jpg';

const PersonalizedAttention = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto lg:flex justify-between items-center my-5'>
            <Slide left>
                <div className='w-full lg:w-2/4'>
                    <h4 className='text-xl font-bold text-jane2nd border-l-4 border-jane2nd pl-5'>I Care About You</h4>
                    <h2 className='text-3xl lg:text-5xl text-jane font-bold my-5'>Personalized Attention</h2>
                    <p className='text-lg font-semibold'>
                        I believe that when you hire an attorney, you should be able to communicate directly with that attorney. You’re not treated like a number at My Chamber- I work hard to understand the specifics of your situation and to craft a compelling case to fight for the best outcome for you.
                        If you problem match any of my given service, then directly contact me, I promise I will give you best support.
                    </p>
                </div>
            </Slide>
            <Slide bottom>
                <div className='w-full lg:w-2/4'>
                    <img src={attention} alt='Personalized Attention' className='rounded-xl my-5' />
                </div>
            </Slide>
        </div>
    );
};

export default PersonalizedAttention;