import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../../CustomComponents/Loader';
import MyProductsRow from './MyProductsRow/MyProductsRow';

const MyProducts = () => {


    const { user } = useContext(AuthContext)
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user],
        queryFn: () => fetch(`http://localhost:5000/products?email=${user?.email}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    };

    const handleDelete = (deletingProduct) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure? You want to delete this product.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`http://localhost:5000/products/${deletingProduct._id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.acknowledged) {
                                    refetch();
                                    toast.success('Item deleted successfully');
                                }
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        return;
                    }
                }
            ]
        });
    }

    return (
        <div className='w-full mt-10'>
            <p className='text-5xl my-5 font-bold text-start text-white ml-5'>My Products</p>
            <div data-theme="synthwave" className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>#</th>
                            <th>Image</th>
                            <th>Car Name</th>
                            <th>Resale Price</th>
                            <th>Sales Status</th>
                            <th>Advertisement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            myProducts.map((myProduct, i) => <MyProductsRow
                                decimal={i}
                                key={myProduct._id}
                                myProduct={myProduct}
                                handleDelete={handleDelete}
                            ></MyProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;