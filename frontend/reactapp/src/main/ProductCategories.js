import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const categories = [
        'Electronics', 
        'Books', 
        'Clothing', 
        'Home & Kitchen',
        'Sports & Outdoors',
        'Toys & Games',
        'Beauty & Personal Care',
        'Grocery',
        'Automotive',
        'Pet Supplies'
      ];

    return (
        <div className="flex flex-wrap justify-center">
            {categories.map((category, index) => (
                <Link to={`/products/${category.toLowerCase()}`} className="bg-stone-800 hover:bg-stone-700 shadow-lg rounded-lg m-4 p-6 w-64 text-center transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                 key={index}>
                    <h2 className="text-xl font-bold mb-4">{category}</h2>
                    <p className="text-gray-500">Explore our {category} collection</p>
                </Link>
            ))}
        </div>
    );
};

export default ProductCategories;