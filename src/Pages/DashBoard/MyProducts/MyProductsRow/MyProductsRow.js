import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loader from '../../../../CustomComponents/Loader';

const MyProductsRow = ({ myProduct, decimal, handleDelete, handleAdvertise }) => {

    const { _id, picture, carName, resalePrice } = myProduct;
    // const [advertisedMessage, setAdvertisedMessage] = useState('');

    const { data: isOrdered, isLoading } = useQuery({
        queryKey: ['products', _id],
        queryFn: () => fetch(`http://localhost:5000/products/${_id}`)
            .then(res => res.json())
    });
    const { data: isAdvertised } = useQuery({
        queryKey: ['advertisingProducts', _id],
        queryFn: () => fetch(`http://localhost:5000/advertisingProducts?productId=${_id}`)
            .then(res => res.json())
    });

    console.log(isAdvertised?.message);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/advertisingProducts?productId=${_id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.message) {
    //                 setAdvertisedMessage(data.message);
    //             }
    //         })
    // }, [_id])

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(myProduct)} className="btn btn-circle bg-red-700 text-black font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>{decimal + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{carName}</div>
            </td>
            <td>
                <div className="font-bold">{resalePrice}</div>
            </td>
            <td>
                <div className={`font-bold text-center text-black rounded-lg ${isOrdered?.message === 'alreadyBooked' ? 'bg-yellow-600' : 'bg-green-500'}`}>{isOrdered?.message === 'alreadyBooked' ? 'Booked' : 'Available'}</div>
            </td>
            <th>
                <button
                    onClick={() => handleAdvertise(myProduct)}
                    disabled={
                        isOrdered?.message === 'alreadyBooked' || isAdvertised?.message === 'adreadyAdvertised'
                    }
                    className="btn btn-secondary btn-xs font-bold text-black">
                    {
                        isOrdered?.message === 'alreadyBooked' ? 'Already Booked' : (
                            isAdvertised?.message === 'adreadyAdvertised' ? 'Already Advertised' : 'Make Advertise'
                        )
                    }
                </button>
            </th>
        </tr>
    );
};

export default MyProductsRow;