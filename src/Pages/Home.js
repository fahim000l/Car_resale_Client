import React from 'react';
import Carousel from './Carousel/Carousel';
import IntroCard from './IntroCard/IntroCard';

const Home = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Carousel></Carousel>
            <IntroCard></IntroCard>
        </div>
    );
};

export default Home;