import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ProfileLayout = () => {
    return (
        <div className="flex h-screen bg-stone-900">
            {/* Side Menu */}
            <div className="w-1/4 bg-stone-800 text-white">
                <ul className="py-8">
                    <li className="px-4 py-2">
                        <Link to="/profile/personal" className="block text-white">Douglas Jhones</Link>
                    </li>
                    <div className="border-b border-gray-700 mx-4"></div> {/* Horizontal Divider */}
                    <li className="px-4 py-2">
                        <Link to="/profile/orders" className="block text-white">My Orders</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/profile/cart" className="block text-white">Cart</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/wishlist" className="block text-white">Wishlist</Link>
                    </li>
                </ul>
            </div>

            {/* Outlet */}
            <div className="w-3/4 m-8 bg-stone-900 text-white">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProfileLayout;