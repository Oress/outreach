import React from 'react';

const Personal = () => {
    return (
        <div className="bg-stone-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Personal Information</h1>
            <div className="flex flex-col mb-4">
                <label className="text-lg mb-2">Name</label>
                <p className="text-xl">John Doe</p>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-lg mb-2">Email</label>
                <p className="text-xl">johndoe@example.com</p>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-lg mb-2">Phone Number</label>
                <p className="text-xl">123-456-7890</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Edit Information
            </button>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Addresses</h2>
                <ul className="list-disc pl-6">
                    <li>123 Main St, City, State, ZIP</li>
                    <li>456 Elm St, City, State, ZIP</li>
                </ul>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Package Receivers</h2>
                <ul className="list-disc pl-6">
                    <li>John Doe</li>
                    <li>Jane Smith</li>
                </ul>
            </div>
        </div>
    );
};

export default Personal;