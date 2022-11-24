import React from 'react';

const ProductCard = ({ product }) => {

    const {
        carName,
        location,
        resalePrice,
        originalPrice,
        yearOfUse,
        postedTime,
        sellerName,
        isVerified,
        categoryName,
        categoryId,
        picture
    } = product;

    return (
        <div className="card card-compact bg-violet-400 shadow-xl">
            <figure><img className='w-full h-[300px]' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{carName}</h2>
                <p>{categoryName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;