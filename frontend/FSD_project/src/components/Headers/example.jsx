/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {``
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Add an event listener to close the dropdown when clicking outside of it
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="mx-auto relative inline-block" ref={dropdownRef}>
     <button
  onClick={toggleDropdown}
  className="px-2 text-gray-500 hover:text-cyan-400 inline-flex gap-x-2 text-md font-medium bg-transparent backdrop-blur-sm backdrop-brightness-90   focus:outline-none"
  style={{ backgroundColor: 'transparent', border: 'none' }}
>
  Learn
  <svg
    className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out `}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    style={{ verticalAlign: 'middle' }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
</button>
 {isOpen && (
        <div className="z-50 absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2 bg-transparent back dark:bg-gray-700 dark:border dark:border-gray-500 dark:divide-gray-200">
          <Link
            to="/learn"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 transition duration-300 ease-in-out"
          >
            Labs
          </Link>
          <NavLink
            to="/labs"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 transition duration-300 ease-in-out"
          >
            Practice
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
