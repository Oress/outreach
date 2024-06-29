import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    <nav className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <a className="text-3xl hover:text-gray-300">Outreach</a>
        </div>
        <div className="space-x-5 font-bold flex items-center">
          <a href="/about" className="hover:text-gray-300">Campaigns</a>
          <a href="/services" className="hover:text-gray-300">Analytics</a>
          <a href="/services" className="hover:text-gray-300">Docs & Tutorials</a>
          <a href="/services" className="hover:text-gray-300">Support</a>
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