import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../CustomComponents/Loader';
import ProductCard from './ProductCard/ProductCard';

const CategoryProducts = () => {

    const id = useParams().id;
    console.log(id);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['categoryProducts', id],
        queryFn: () => fetch(`http://localhost:5000/categoryProducts/${id}`)
            .then(res => res.json())
    });
    console.log(products);

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='my-10 lg:w-[90%] px-[10px] lg:px-0 lg:mx-auto'>
            <p className='text-5xl font-bold mb-5 bg-gray-500 rounded-lg p-5'>{products[0].categoryName}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;