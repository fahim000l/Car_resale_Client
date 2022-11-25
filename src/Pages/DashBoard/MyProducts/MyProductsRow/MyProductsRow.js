import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../../CustomComponents/Loader';

const MyProductsRow = ({ myProduct, decimal, handleDelete, handleAdvertise }) => {

    const { _id, picture, carName, resalePrice } = myProduct;

    const { data, isLoading } = useQuery({
        queryKey: ['products', _id],
        queryFn: () => fetch(`http://localhost:5000/products/${_id}`)
            .then(res => res.json())
    });

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
                <div className={`font-bold text-center text-black rounded-lg ${data?.message === 'alreadyBooked' ? 'bg-yellow-600' : 'bg-green-500'}`}>{data?.message === 'alreadyBooked' ? 'Booked' : 'Available'}</div>
            </td>
            <th>
                <button onClick={() => handleAdvertise(myProduct)} disabled={data?.message === 'alreadyBooked'} className="btn btn-secondary btn-xs font-bold text-black">Advertise</button>
            </th>
        </tr>
    );
};

export default MyProductsRow;