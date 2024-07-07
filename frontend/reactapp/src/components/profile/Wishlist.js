import React from 'react';

const Wishlist = () => {
    return (
        <div className="bg-stone-900 text-white">
            <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Wishlist items go here */}
                <li className="bg-stone-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Item 1</h2>
                    <p className="text-stone-400">Description of item 1</p>
                </li>
                <li className="bg-stone-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Item 2</h2>
                    <p className="text-stone-400">Description of item 2</p>
                </li>
                <li className="bg-stone-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Item 3</h2>
                    <p className="text-stone-400">Description of item 3</p>
                </li>
                {/* Add more wishlist items as needed */}
            </ul>
        </div>
    );
};

export default Wishlist;