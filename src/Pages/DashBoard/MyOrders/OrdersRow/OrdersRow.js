import React from 'react';
import Loader from '../../../../CustomComponents/Loader';
import UsePaidCheck from '../../../../Hooks/UsePaidCheck';

const OrdersRow = ({ order, decimal, setPayingProduct }) => {



    const { productName, picture, price, productId } = order;

    const { isPaid, paidLoading } = UsePaidCheck(productId);

    if (paidLoading) {
        return <Loader></Loader>
    }

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
                <button onClick={() => setPayingProduct(order)} disabled={isPaid?.message === 'paid'}>
                    <label className={`btn ${isPaid?.message === 'paid' ? 'btn-success' : 'btn-error'} btn-xs`} htmlFor="paymentModal">{
                        isPaid?.message === 'paid' ?
                            'paid'
                            :
                            'pay'
                    }</label>
                </button>
            </th>
        </tr >
    );
};

export default OrdersRow;