import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../CustomComponents/Loader';
import AllSellersRow from './AllSellersRow/AllSellersRow';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users?role=seller')
            .then(res => res.json())
    });


    if (isLoading) {
        return <Loader></Loader>
    }

    const handleVerificationStatus = (seller) => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch();
                }
            })

    }

    return (
        <div className='w-full mt-10'>
            <p className='text-5xl my-5 font-bold text-start text-white ml-5'>All Sellers</p>
            <div data-theme="synthwave" className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>#</th>
                            <th>Image</th>
                            <th>Seller's Name</th>
                            <th>Seller's Email</th>
                            <th>Verification Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            sellers.map((seller, i) => <AllSellersRow
                                key={seller._id}
                                decimal={i}
                                seller={seller}
                                handleVerificationStatus={handleVerificationStatus}
                            ></AllSellersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;