import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="category">
        <h3>Category</h3>
        <ul>
          <li>T-Shirt</li>
          <li>Beanies</li>
          <li>Hoodies</li>
          <li className="active">Tote Bags</li>
          <li>Bucket Hats</li>
          <li>Sun Glasses</li>
          <li>Water Bottles</li>
        </ul>
      </div>
      <div className="filters">
        <h3>Filter by:</h3>
        <div className="filter-section">
          <h4>Type</h4>
          <ul>
            <li>Plain</li>
            <li>With caption</li>
            <li>With zip</li>
            <li>Without zip</li>
          </ul>
        </div>
        <div className="filter-section">
          <h4>Colour</h4>
          <div className="color-filters">
            <span className="color-box" style={{ backgroundColor: 'red' }}></span>
            <span className="color-box" style={{ backgroundColor: 'blue' }}></span>
            {/* Add more colors as needed */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
