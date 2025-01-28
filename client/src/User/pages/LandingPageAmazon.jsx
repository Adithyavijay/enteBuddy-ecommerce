import React from 'react';
import imgPath from '../img/doodle_finaldraft.png';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom'

const LandingPageAmazon = () => {
  return (
    <div
      className="relative py-12 md:h-[100dvh] bg-contain bg-center flex flex-col justify-center items-center px-4 bg-tertiary font-poppins"
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

      {/* Header Section */}
      <div className="relative text-center space-y-4 z-10 pt-safe w-full max-w-6xl">
        {/* Logo */}
        <img
          src={logo}
          alt="Ente Buddy Logo"
          className="h-16 mx-auto animate-fade-in"
        />

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight animate-slide-in mb-8">
          Discover Wellness with Ente Buddy
        </h1>

        {/* Buttons Container */}
        <div className="grid grid-cols md:grid-cols-2 gap-4 px-4 md:px-8 max-w-4xl mx-auto">
         
          
          <Link to='https://www.amazon.in/EnteBuddy-SWAY-Massager-Electric-Modes/dp/B0DNW33SQD/' className="w-full ">
            <button className="w-full px-6 py-4 bg-primary text-tertiary font-semibold rounded-xl shadow-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-14">
              Sway on Amazon
            </button>
          </Link>
          
          <Link to='https://www.amazon.in/dp/B0DV5DPM7S/' className="w-full ">
            <button className="w-full px-6 py-4 bg-primary text-tertiary font-semibold rounded-xl shadow-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-14">
              Bounce on Amazon
            </button>
          </Link>
          
          <Link to='https://www.amazon.in/dp/B0DV5S89T9' className="w-full ">
            <button className="w-full px-6 py-4 bg-primary text-tertiary font-semibold rounded-xl shadow-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-14">
              Vibe on Amazon
            </button>
          </Link>
          <Link to='/' className="w-full ">
            <button className="w-full px-6 py-4 bg-primary text-tertiary font-semibold rounded-xl shadow-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-14">
              Visit Website
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-10 animate-fade-in">
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

export default LandingPageAmazon;