import React, { useState } from 'react';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <h4 className="font-semibold mb-2">{title}</h4>
        <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <img src="/collapse-button.png" alt="" />
        </span>
      </div>
      {isOpen && <div className="">{children}</div>}
    </div>
  );
};

export default Dropdown;
