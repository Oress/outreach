import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto bg-stone-900 text-white p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-stone-800 text-white border border-stone-700 rounded py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-stone-800 text-white border border-stone-700 rounded py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full bg-stone-800 text-white border border-stone-700 rounded py-2 px-3"
                        rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;