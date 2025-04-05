import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    console.log("Button clicked!");
    setMessage("Button clicked!");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-start p-8">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-xl rounded-2xl p-10 w-[400px]">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Click Me
        </button>
        {message && (
          <p className="mt-4 text-gray-800 font-semibold text-lg">{message}</p>
        )}
      </div>
    </div>
  );
}

export default App;
