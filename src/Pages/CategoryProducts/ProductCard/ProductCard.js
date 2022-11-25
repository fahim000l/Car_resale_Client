import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../CustomComponents/Loader';

const ProductCard = ({ product, setBookingProduct }) => {

    const {
        _id,
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

    const { data, isLoading } = useQuery({
        queryKey: ['products', _id],
        queryFn: () => fetch(`http://localhost:5000/products/${_id}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="card card-compact shadow-xl">
            <figure><img className='w-full h-[300px]' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-start text-black bg-violet-400">
                <h2 className="card-title text-2xl font-bold">{carName}</h2>
                <p className='text-xl'>Resale Price : <span className='font-bold'>$ {resalePrice}</span></p>
                <p className='text-xl'>Original Price : <span className='font-bold'>$ {originalPrice}</span></p>
                <p className='text-xl'>years of use: {yearOfUse}</p>
            </div>
            <div className='flex items-center justify-between px-5 py-2 bg-violet-400'>
                <div className='text-start'>
                    <p className='text-xl text-black'>Seller Name: {sellerName}</p>
                    <p className='text-xl text-black'>Location : {location}</p>
                    <p className='text-xl text-black'>Posted Date : {postedTime}</p>
                </div>
                {
                    isVerified && <CheckCircleIcon className="h-[60px] w-[60px] text-blue-600" />
                }
            </div>
            <button onClick={() => setBookingProduct(product)} disabled={data?.message === 'alreadyBooked'}>
                <label htmlFor="bookNowModal" className={`btn ${data.message === 'alreadyBooked' ? 'bg-red-900' : 'bg-black'} font-bold w-full`}>{data?.message === 'alreadyBooked' ? 'Already Booked' : 'Book Now'}</label>
            </button>
        </div>
    );
};

export default ProductCard;