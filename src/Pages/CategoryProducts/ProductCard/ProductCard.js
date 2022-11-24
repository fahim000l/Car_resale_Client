import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product }) => {

    const {
        carName,
        location,
        resalePrice,
        originalPrice,
        yearOfUse,
        postedTime,
        sellerName,
        isVerified,
        picture
    } = product;

    return (
        <div className="card card-compact bg-violet-400 shadow-xl">
            <figure><img className='w-full h-[300px]' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-start text-black">
                <h2 className="card-title text-2xl font-bold">{carName}</h2>
                <p className='text-xl'>Resale Price : <span className='font-bold'>$ {resalePrice}</span></p>
                <p className='text-xl'>Original Price : <span className='font-bold'>$ {originalPrice}</span></p>
                <p className='text-xl'>years of use: {yearOfUse}</p>
            </div>
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='text-start'>
                    <p className='text-xl text-black'>Seller Name: {sellerName}</p>
                    <p className='text-xl text-black'>Location : {location}</p>
                    <p className='text-xl text-black'>Posted Date : {postedTime}</p>
                </div>
                {
                    isVerified && <CheckCircleIcon className="h-[60px] w-[60px] text-blue-600" />
                }
            </div>
        </div>
    );
};

export default ProductCard;