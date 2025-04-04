import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Simple Form</h1>

        <label className="block text-sm font-medium text-gray-600 mb-1">
          Your Input:
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
