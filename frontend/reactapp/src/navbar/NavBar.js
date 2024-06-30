import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <nav className={`bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6 ${isSearchFocused ? 'bg-opacity-50 backdrop-filter backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="text-3xl hover:text-gray-300">Outreach</Link>
        </div>
        <div className="relative">
          <input
            type="text"
            className="h-10 w-96 pl-4 pr-10 rounded-full text-sm bg-gray-800 text-white placeholder-gray-500"
            placeholder="Search..."
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
            <svg className="h-6 w-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {isSearchFocused && (
            <div className="absolute top-full mt-2 w-96 bg-gray-800 rounded-md shadow-lg z-20">
              {/* Populate this div with your search suggestions */}
              <p className="text-white text-sm p-2">Suggestion 1</p>
              <p className="text-white text-sm p-2">Suggestion 2</p>
              {/* Add more suggestions here */}
            </div>
          )}
        </div>
        {/* Navigation Links */}
        <div className="space-x-5 font-bold flex items-center">
          <Link to="/categories" className="hover:text-gray-300">Categories</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/wishlist" className="hover:text-gray-300">Wishlist</Link>
  
          {/* Profile Circle and Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none">
              <img className="object-cover w-full h-full" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*B8c1ED3QV_yaa6PAWqDgMw.png" alt="Profile" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-stone-900 rounded-md shadow-xl z-20 te">
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Your Profile</a>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Settings</a>
                <a href="/logout" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;