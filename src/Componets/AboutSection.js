import React from 'react';
import experience from '../assests/experience.png';
import laura from '../assests/laura-jane-chamber.png';

const AboutSection = () => {
    return (
        <div className='bg-gray-100'>
            <div className='w-11/12 lg:w-10/12 mx-auto lg:flex justify-between items-center py-5'>
                <div className='w-full lg:w-2/5'>
                    <h1 className='text-jane text-4xl lg:text-6xl font-semibold'>About <br/> Laura Jane</h1>
                    <p className='text-lg font-semibold py-5'>
                        Over the years, the Laura Jane have achieved several domestic and international awards; and have worked with several fortune 150 companies, MNC's, Private Individual, & corporations with great success. Its biggest achievement lies in the satisfaction of its clients in every possible manner.
                        <br/>
                        I my Career I have served almost 750+ with no service fees and I always feels happy by standing besides of the people with Judicial Support.
                    </p>
                </div>
                <div className='w-full lg:w-2/5 relative'>
                    <img src={laura} alt="Laura Jane at Chamber" />
                    <img src={experience} alt="Laura's experience" className='absolute top-0 w-[40%]' />
                </div>
            </div>
        </div>

    );
};

export default AboutSection;