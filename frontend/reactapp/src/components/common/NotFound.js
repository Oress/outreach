import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-stone-900">
            {/* <h1 className="text-6xl font-bold text-white">404</h1> */}
            <img src="/images/404.png" alt="404" className="w-72 mt-8" />
            <h1 className="text-4xl font-medium text-gray-300">Page Not Found</h1>
            <Link to="/" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Go Back
            </Link>
        </div>
    );
};

export default NotFound;