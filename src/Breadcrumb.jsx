import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex text-gray-600 text-sm mb-4">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <a href={item.link} className="hover:underline">
            {item.label}
          </a>
          {index < items.length - 1 && (
            <span className="mx-2">{'>'}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
