import React, { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-blue-200 p-8"> {/* New wrapper div with background color */}
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg"> {/* Content moved to top-left */}
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Text Updater</h1>
        <input
          type="text"
          className="border-2 border-purple-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="mt-4 text-lg text-gray-800">You typed: {text}</p>
      </div>
    </div>
  );
};

export default TextUpdater;
