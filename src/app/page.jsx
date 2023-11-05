import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 to-purple-800 flex items-center justify-center overflow-hidden space-x-32  ">
      <div className="max-w-lg text-white text-left">
        <h1 className="text-4xl font-bold mb-4">Welcome to Keyd Watch!</h1>
        <p className="text-lg mb-8">
          Abra a sidebar e escolha um Link.
        </p>
        <button className="bg-cyan-500 text-white font-semibold rounded-full px-6 py-3 hover:bg-cyan-800 transition duration-200 ease-in-out">
          Explore Now
        </button>
      </div>
      <img
        src="knight.webp"
        alt="Homepage Image"
        className="w-auto h-96"
      />

     
    </div>
  );
};

export default Home;
