import React from 'react';
import { FaHome, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Address = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg mb-4">
      <h3 className="font-bold mb-2">Delivery Address</h3>
      <div className="bg-white p-4 rounded-lg flex justify-between items-center">
        <div className="flex items-start space-x-2">
          <div className="text-black">
            <FaHome />
          </div>
          <div>
            <p className="font-bold">Home</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> (+234) 7010916895</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 1234, Heaven's Street</p>
          </div>
        </div>
        <button className="text-blue-500 font-bold">CHANGE</button>
      </div>
    </div>
  );
};

export default Address;
