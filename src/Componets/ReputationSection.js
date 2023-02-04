import React from 'react';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import reputation from '../assests/reputation-law.jpg';

const ReputationSection = () => {
    return (
        <div className='w-11/12 lg:w-8/12 mx-auto lg:flex items-center justify-between my-5'>
            <Flip left>
                <div className='w-full lg:w-2/4'>
                    <img src={reputation} alt='Reputation' className='rounded-xl' />
                </div>
            </Flip>
            <Slide right>
                <div className='w-full lg:w-2/4'>
                    <h2 className='text-3xl lg:text-5xl text-jane2nd font-bold my-5'>Solid Reputation</h2>
                    <p className='text-lg font-semibold'>
                        There’s a reason that My reputation precedes me: I have a 15-year history in Washington has garnered me some of the top reviews in the Law Sector. If you or someone you love has suffered the consequences of another person’s negligence, I'm here for you.
                        If you’re not convinced that you’ve found the right place to handle your case just yet, you will find me best. Go see for yourself what our clients have to say about the quality of services I provide.
                    </p>
                </div>
            </Slide>
        </div>
    );
};

export default ReputationSection;