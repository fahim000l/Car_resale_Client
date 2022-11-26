import React from 'react';

const AllSellersRow = ({ seller, decimal, handleVerificationStatus }) => {

    const { email, image, name, role, _id, isVerified } = seller;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                {decimal + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt='' />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{email}</div>
                </div>
            </td>
            <th>
                <button onClick={() => handleVerificationStatus(seller)} className={`btn btn-xs text-black font-bold ${isVerified ? 'bg-green-500' : 'bg-red-500'}`}>{isVerified ? 'Verified' : 'Unverified'}</button>
            </th>
        </tr>
    );
};

export default AllSellersRow;