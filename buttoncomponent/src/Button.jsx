import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
    >
      Click Me
    </button>
  );
};

export default Button;
