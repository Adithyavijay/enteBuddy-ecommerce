import React from 'react';
import imgPath from '../img/doodle_finaldraft.png';
import logo from '../img/logo.png';
import { Link} from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className="bg-hero2 bg-contain bg-center min-h-screen flex flex-col justify-center items-center font-poppins px-4 bg-tertiary" style={{ backgroundImage: `url(${imgPath})` }}>
      {/* Header Section */}
      <div className="text-center space-y-4">
        {/* Logo */}
        <img src={`${logo}`} alt="Ente Buddy Logo" className="h-16 mx-auto" />
        
        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Discover Wellness with Ente Buddy
        </h1>

        {/* Subheading */}
        <p className="text-sm md:text-lg font-medium font-poppins text-white max-w-md mx-auto">
          Helping you explore and embrace a healthier, more connected you. Empower your journey with Ente Buddy.
        </p>

        {/* Call-to-action Button */}
        <Link to='/'>
       <button  className="mt-4 px-6 py-3 font-poppins bg-primary text-white font-medium rounded-md shadow-lg hover:bg-secondary transition">
          Explore Now
        </button>
        </Link>
      </div>
     

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {/* Feature 1 */}
        <div className="space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold">
            🚿
          </div>
          <p className="text-white text-sm">Shower Friendly</p>
        </div>

        {/* Feature 2 */}
        <div className="space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold">
            🛡️
          </div>
          <p className="text-white text-sm">Body Safe Material</p>
        </div>

        {/* Feature 3 */}
        <div className="space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold">
            🔋
          </div>
          <p className="text-white text-sm">Rechargeable</p>
        </div>

        {/* Feature 4 */}
        <div className="space-y-2">
          <div className="bg-primary p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center text-white text-lg font-bold">
            🤸
          </div>
          <p className="text-white text-sm">Flexible Design</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
