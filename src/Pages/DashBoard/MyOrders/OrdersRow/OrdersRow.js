import React from 'react';

const OrdersRow = ({ order, decimal }) => {

    const { productName, picture, price } = order;
    return (
        <tr>
            <th>{decimal + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt='' />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{productName}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{price}</div>
                </div>
            </td>
            <th>
                <button className="btn btn-error btn-xs">Pay</button>
            </th>
        </tr>
    );
};

export default OrdersRow;