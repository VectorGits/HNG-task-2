import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <button className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 rounded-full">Previous</button>
      {[1, 2, 3, 4, 20].map((number, index) => (
        <button
          key={index}
          className={`px-3 py-1 ${index === 0 ? 'bg-yellow-500 text-white' : 'bg-yellow-100 hover:bg-yellow-200'} rounded-full`}
        >
          {number}
        </button>
      ))}
      <button className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 rounded-full">Next</button>
    </div>
  );
};

export default Pagination;
