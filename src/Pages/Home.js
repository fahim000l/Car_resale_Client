import React from 'react';
import Carousel from './Carousel/Carousel';
import IntroCard from './IntroCard/IntroCard';
import ProductCategories from './ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Carousel></Carousel>
            <ProductCategories></ProductCategories>
            <IntroCard></IntroCard>
        </div>
    );
};

export default Home;