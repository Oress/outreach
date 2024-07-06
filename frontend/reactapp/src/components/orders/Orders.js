import React from 'react';

const Orders = () => {
    const orders = [
        { id: 1, name: 'Order 1', status: 'Pending' },
        { id: 2, name: 'Order 2', status: 'Shipped' },
        { id: 3, name: 'Order 3', status: 'Delivered' },
    ];

    return (
        <div className="bg-stone-900 text-white">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <ul className="space-y-4">
                {orders.map((order) => (
                    <li key={order.id}
                        className="bg-stone-800 p-4 rounded-md flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">{order.name}</h2>
                            <p className="text-stone-400">{order.status}</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;