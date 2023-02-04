import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carousel1 from '../assests/banner/lawyer-1.jpg';
import carousel2 from '../assests/banner/lawyer-2.jpg';
const HomeCarousel = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true
    };
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto rounded-xl my-2 lg:my-5'>
            <Slider {...settings}>
                <div>
                    <img src={carousel1} className="w-full h-[200px] lg:h-[450px] rounded-xl px-1" alt='' />
                </div>
                <div>
                    <img src={carousel2} className="w-full h-[200px] lg:h-[450px] rounded-xl px-1" alt='' />
                </div>
            </Slider>
        </div>
    );
};

export default HomeCarousel;