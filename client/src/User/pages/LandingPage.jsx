import React from 'react';
import imgPath from '../img/doodle_finaldraft.png';
import logo from '../img/logo.png';

const LandingPage = () => {
  return (
    <div
      className="relative h-[100dvh] bg-contain bg-center flex flex-col justify-center items-center px-4 bg-tertiary font-poppins"
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

      {/* Header Section */}
      <div className="relative text-center space-y-4 z-10 pt-safe">
        {/* Logo */}
        <img
          src={logo}
          alt="Ente Buddy Logo"
          className="h-16 mx-auto animate-fade-in"
        />

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight animate-slide-in">
          Discover Wellness with Ente Buddy
        </h1>

        {/* Subheading */}
        <p className="text-sm md:text-lg text-white max-w-md mx-auto opacity-90">
          Helping you explore and embrace a healthier, more connected you. Empower your journey with Ente Buddy.
        </p>

        {/* Call-to-action Button with Pulse Animation */}
        <button className="mt-4 px-6 py-3 bg-primary text-tertiary font-semibold rounded-full shadow-lg hover:bg-secondary hover:text-white transition transform hover:scale-105 animate-pulse">
          Explore Now
        </button>
      </div>

      {/* Features Section */}
      <div className="relative mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-10 animate-fade-in">
        {/* Feature 1: All India Delivery */}
        <div className="group space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold transition transform group-hover:scale-110 group-hover:ring-4 ring-secondary">
            🚚
          </div>
          <p className="text-white text-sm font-semibold">All India Delivery</p>
        </div>

        {/* Feature 2: Six Months Warranty */}
        <div className="group space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold transition transform group-hover:scale-110 group-hover:ring-4 ring-secondary">
            🛡️
          </div>
          <p className="text-white text-sm font-semibold">Six Months Warranty</p>
        </div>

        {/* Feature 3: Tested For Perfection */}
        <div className="group space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold transition transform group-hover:scale-110 group-hover:ring-4 ring-secondary">
            🔬
          </div>
          <p className="text-white text-sm font-semibold">Tested For Perfection</p>
        </div>

        {/* Feature 4: Discreet Delivery */}
        <div className="group space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold transition transform group-hover:scale-110 group-hover:ring-4 ring-secondary">
            📦
          </div>
          <p className="text-white text-sm font-semibold">Discreet Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
