import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="text-lg font-bold mb-1">{product.name}</h3>
      <p className="text-yellow-500 font-bold mb-2">{`₦${product.price}`}</p>
      <button className="bg-yellow-500 text-white font-bold py-1 px-4 rounded-full">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
