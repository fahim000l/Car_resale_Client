import React from 'react';

const CategoryCard = ({ category }) => {

    const { categoryNAme, image } = category;
    return (
        <div className="card glass">
            <figure><img src={image} className='w-full h-[250px]' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white text-3xl font-bold shadow-lg">{categoryNAme}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;