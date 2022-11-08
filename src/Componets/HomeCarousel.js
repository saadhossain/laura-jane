import React from 'react';
import carousel1 from '../assests/banner/lawyer-1.jpg';
import carousel2 from '../assests/banner/lawyer-2.jpg';
const HomeCarousel = () => {
    return (
        <div className='mx-2 lg:mx-0'>
            <div className="carousel w-full lg:w-10/12 mx-auto h-[200px] lg:h-[500px] rounded-xl my-2 lg:my-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={carousel2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle border-none bg-jane2nd hover:bg-jane">❮</a>
                        <a href="#slide2" className="btn btn-circle border-none bg-jane2nd hover:bg-jane">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={carousel1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle border-none bg-jane2nd hover:bg-jane">❮</a>
                        <a href="#slide1" className="btn btn-circle border-none bg-jane2nd hover:bg-jane">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;