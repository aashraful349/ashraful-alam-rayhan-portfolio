import React from 'react';
import bannerLogo from '../../assets/wallpaper2you_194632.gif';

const Banner = () => {
    return (
        <div className="w-full relative">
            <img src={bannerLogo} alt="Banner" className="w-full h-auto md:h-60" />
            <p className='font-bold text-white text-[2rem] absolute left-4  top-8 md:left-20'>Slow Learner!</p>
        </div>
    );
};

export default Banner;