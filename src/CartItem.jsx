import React from 'react';

const CartItem = ({ name, price, oldPrice, discount, image }) => {
  return (
    <div className="flex justify-between p-4 bg-yellow-100 rounded-lg mb-4 items-center">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-20 h-20 object-cover rounded-lg mr-4"/>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="text-sm mt-1">
            <p className="flex items-center mb-1">
              <span className="text-gray-500 cursor-pointer">Save for Later</span>
            </p>
            <p className="flex items-center">
              <span className="text-gray-500 cursor-pointer">Remove from cart</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span className="mx-2">1</span>
        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">{price}</p>
        <p className="text-sm line-through text-gray-500">{oldPrice}</p>
        <p className="text-sm text-gray-500">{discount}</p>
      </div>
    </div>
  );
};

export default CartItem;
