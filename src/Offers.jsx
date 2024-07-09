import React from 'react';
import { FaTag, FaPercentage } from 'react-icons/fa';

const Offers = () => {
  return (
    <div className=" p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg mb-2 shadow">
        <div className="flex items-center">
          <FaPercentage className="mr-2 text-gray-700" />
		  <img src="/tag1.png" alt="" />
          <span className="font-bold">Available Offers</span>
        </div>
        <FaTag className="text-gray-700" />
      </div>
      <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow">
        <div className="flex items-center">
          <FaTag className="mr-2 text-gray-700" />
          <span className="font-bold">Apply Coupons</span>
        </div>
        <FaTag className="text-gray-700" />
      </div>
    </div>
  );
};

export default Offers;
