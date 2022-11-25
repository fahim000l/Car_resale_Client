import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../../CustomComponents/Loader';
import OrdersRow from './OrdersRow/OrdersRow';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user],
        queryFn: () => fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-full mt-10'>
            <p className='text-5xl my-5 font-bold text-start text-white ml-5'>My Orders</p>
            <div data-theme="synthwave" className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map((order, i) => <OrdersRow
                                key={order._id}
                                decimal={i}
                                order={order}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;