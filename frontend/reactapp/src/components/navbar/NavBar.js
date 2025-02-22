import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dropdownRef = useRef(null);

  const loginOptions = {
    redirectUri: window.location.origin,
  }

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    UserService.isLoggedIn().then((result) => {
      setLoggedIn(result)
      console.log('isLoggedIn', result);
    }).catch((e) => {
      console.error('isLoggedIn', e);
    });

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
          <Link to="/profile/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/profile/wishlist" className="hover:text-gray-300">Wishlist</Link>
  
          {/* Profile Circle and Dropdown */}
          {isLoggedIn && 
          <div className="relative" ref={dropdownRef}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none">
            <img className="object-cover w-full h-full" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*B8c1ED3QV_yaa6PAWqDgMw.png" alt="Profile" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-stone-900 rounded-md shadow-xl z-20 te">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Your Profile</Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Settings</Link>
              <Link onClick={() => UserService.doLogout(loginOptions)} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Logout</Link>
            </div>
          )}
        </div>}

        {!isLoggedIn && 
          <div className="relative">
          <button type="button" onClick={() => UserService.doLogin(loginOptions)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </div>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;