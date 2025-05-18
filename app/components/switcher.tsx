import React  from 'react';

const Switcher = ({isOn, toggleSwitch} : { isOn: boolean, toggleSwitch: () => void}) => {
  return (
    <div className="flex max-sm:ml-2 items-center space-x-2 mt-4 justify-between max-sm:flex-col max-sm:items-start gap-3">
      <span className="text-sm">View All About Me</span>
      <button
        onClick={toggleSwitch}
        className={`relative inline-flex items-center cursor-pointer w-16 h-6 rounded-full transition-all duration-300 
          ${isOn ? 'bg-blue-500' : 'bg-gray-500'}`}
      >
        <span
          className={`absolute w-6 h-6 bg-white rounded-full transition-all duration-300 
            ${isOn ? 'translate-x-10' : 'translate-x-0'}`}
        ></span>
      </button>
    </div>
  );
};

export default Switcher;
