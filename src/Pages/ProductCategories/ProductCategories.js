import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../CustomComponents/Loader';
import CategoryCard from './CategoryCard/CategoryCard';

const ProductCategories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mt-10'>
            {
                categories.map(category => <CategoryCard></CategoryCard>)
            }
        </div>
    );
};

export default ProductCategories;