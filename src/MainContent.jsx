import React from 'react';
import Breadcrumb from './Breadcrumb';
import ProductList from './ProductList';

const MainContent = () => {
  const breadcrumbItems = [
    { label: 'Main Page', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Tote Bags', link: '/category/tote-bags' },
  ];

  const products = [
    {
      id: 1,
      name: 'Flowery Heart',
      price: 5000,
      image: '/path/to/flowery-heart.jpg'
    },
    {
      id: 2,
      name: 'Aesthetic Butterfly',
      price: 6500,
      image: '/path/to/aesthetic-butterfly.jpg'
    },
    {
      id: 3,
      name: 'Van Gogh loves U',
      price: 5500,
      image: '/path/to/van-gogh-loves-u.jpg'
    }
  ];

  return (
    <main className="p-4 flex-1">
      <Breadcrumb items={breadcrumbItems} />
      <h2 className="text-2xl font-bold mb-4">Tote Bags</h2>
      <div className="flex flex-wrap items-center mb-4">
        <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-full mr-2">
          Colour
        </button>
        <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-full mr-2">
          Price
        </button>
        <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-full mr-2">
          Type
        </button>
        <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-600 font-bold py-1 px-3 rounded-full">
          Clear all filters
        </button>
      </div>
      <ProductList products={products} />
    </main>
  );
};

export default MainContent;
