import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b w-full">
      <div className="logo flex items-center border-r pr-4">
        <img src="/go-to-store-logo.png" alt="Go-To Store Logo" />
      </div>
      <div className="flex items-center bg-yellow-100 p-2 rounded-full shadow-md w-1/2">
        <img src="/search-icon.png" alt="Search-Icon" className="h-5 w-5 ml-2" />
        <input
          type="text"
          placeholder="Search Products"
          className="bg-yellow-100 outline-none flex-grow px-2"
        />
        <button className="bg-yellow-200 hover:bg-yellow-300 text-gray-600 font-bold py-1 px-3 rounded-full">
          <img src="/x.png" alt="Clear" className="h-5 w-5" />
        </button>
      </div>
      <div className="flex space-x-4">
        <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-full flex items-center">
          <Link to="/wishlist">
          <span className="mr-1">Wishlist</span> <img src="Heart-icon.png" alt="Heart-icon" className="h-5 w-5" />
          </Link>
        </button>
        <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-full flex items-center">
          <span className="mr-1">Your Cart</span> <img src="/Cart-icon.png" alt="Cart-icon" className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
