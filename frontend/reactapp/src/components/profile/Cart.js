import React from 'react';

const Cart = () => {
    return (
        <div className="bg-stone-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <div className="flex flex-col">
                {/* Cart items */}
                {/* Replace this with your cart items */}
                <div className="flex items-center justify-between p-4 bg-stone-800 mb-2">
                    <div className="flex items-center">
                        <img src="product-image.jpg" alt="Product" className="w-16 h-16 mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold">Product Name</h2>
                            <p className="text-gray-400">Price: $10</p>
                        </div>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                        Remove
                    </button>
                </div>
                {/* End of cart items */}
            </div>
            <div className="flex justify-between items-center p-4 bg-stone-800">
                <p className="text-lg">Total: $10</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;