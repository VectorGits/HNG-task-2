import React from 'react';

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none h-5 w-5 border border-yellow-500 rounded checked:border-transparent focus:outline-none"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
