import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="w-full max-w-md mt-10 ml-10 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <div className="bg-white p-6 rounded-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            {name[0]}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
