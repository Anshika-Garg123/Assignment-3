import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

        <div className="mb-5">
          <label className="block mb-1 text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
