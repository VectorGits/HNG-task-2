import React, { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';
import Dropdown from './Dropdown';

const Sidebar = () => {
  const [categories, setCategories] = useState({
    tshirt: false,
    beanies: false,
    hoodies: false,
    toteBags: true,
    bucketHats: false,
    sunGlasses: false,
    waterBottles: false,
  });

  const handleCheckboxChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  return (
    <aside className="w-64 p-4 bg-white border-r">
      <div className="category mb-4">
        <h3 className="font-bold text-lg mb-2">Category</h3>
        <ul className="space-y-2">
          <li>
            <CustomCheckbox
              label="T-Shirt"
              checked={categories.tshirt}
              onChange={() => handleCheckboxChange('tshirt')}
            />
          </li>
          <li>
            <CustomCheckbox
              label="Beanies"
              checked={categories.beanies}
              onChange={() => handleCheckboxChange('beanies')}
            />
          </li>
          <li>
            <CustomCheckbox
              label="Hoodies"
              checked={categories.hoodies}
              onChange={() => handleCheckboxChange('hoodies')}
            />
          </li>
          <li>
            <CustomCheckbox
              label="Tote Bags"
              checked={categories.toteBags}
              onChange={() => handleCheckboxChange('toteBags')}
            />
          </li>
          <li>
            <CustomCheckbox
              label="Bucket Hats"
              checked={categories.bucketHats}
              onChange={() => handleCheckboxChange('bucketHats')}
            />
          </li>
          <li>
            <CustomCheckbox
              label="Sun Glasses"
              checked={categories.sunGlasses}
              onChange={() => handleCheckboxChange('sunGlasses')}
            />
          </li>
          <li>
            <CustomCheckbox
              label="Water Bottles"
              checked={categories.waterBottles}
              onChange={() => handleCheckboxChange('waterBottles')}
            />
          </li>
        </ul>
      </div>
      <div className="filters">
        <h3 className="font-bold text-lg mb-2">Filter by:</h3>
        <div className="filter-section mb-4">
          <Dropdown title="type">
            <ul className="space-y-2">
              <li>
                <CustomCheckbox
                  label="Plain"
                  checked={categories.plain}
                  onChange={() => handleCheckboxChange('plain')}
                />
              </li>
              <li>
                <CustomCheckbox
                  label="With caption"
                  checked={categories.withCaption}
                  onChange={() => handleCheckboxChange('withCaption')}
                />
              </li>
              <li>
                <CustomCheckbox
                  label="With zip"
                  checked={categories.withZip}
                  onChange={() => handleCheckboxChange('withZip')}
                />
              </li>
              <li>
                <CustomCheckbox
                  label="Without zip"
                  checked={categories.withoutZip}
                  onChange={() => handleCheckboxChange('withoutZip')}
                />
              </li>
            </ul>
          </Dropdown>
        </div>
        <Dropdown title="Colour">
          <div className='grid grid-cols-4 gap-2'>
          <span className="w-6 h-6 border border-black rounded-sm"></span>
          <span className="w-6 h-6 border border-blue-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-green-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-red-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-pink-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-cyan-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-yellow-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-purple-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-orange-500 rounded-sm"></span>
          <span className="w-6 h-6 border border-green-700 rounded-sm"></span>
          </div>
        </Dropdown>
      </div>
    </aside>
  );
};

export default Sidebar;
