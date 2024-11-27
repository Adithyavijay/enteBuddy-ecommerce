import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen md:bg-[#2D2A3F] bg-[#3A2D3F] bg-hero2 bg-contain">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary font-poppins mt-8 mb-3">
            About EnteBuddy
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#3A2D3F]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-secondary/20"
          >
            {/* Mission Statement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary font-poppins mb-6">Our Mission</h2>
              <p className="text-secondary font-figtree text-lg leading-relaxed">
                "Right for exploration couldn't be suppressed under misconceptions or taboos; regardless of gender. In our life, everyone needs at least that one connection, closer to a person to embrace and share their emotions. But before that, one has to completely understand "what do you really want", there comes ENTE BUDDY as your soulmate to unravel through your feats of love, fleeting and thereby leading to deeply comprehend your own self-pleasure!"
              </p>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-primary font-poppins font-bold mb-3">Understanding</h3>
                <p className="text-secondary/90 font-figtree">Helping you discover what you truly desire</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-primary font-poppins font-bold mb-3">Connection</h3>
                <p className="text-secondary/90 font-figtree">Building meaningful relationships</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-primary font-poppins font-bold mb-3">Exploration</h3>
                <p className="text-secondary/90 font-figtree">Supporting your journey of self-discovery</p>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/10">
              <h2 className="text-2xl font-bold text-primary font-poppins mb-4">Visit Us</h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <p className="text-secondary font-figtree">
                    <span className="font-semibold">EnteBuddy</span><br />
                    First floor, 26/489/B<br />
                    Sulaiman sait road<br />
                    Maradu, Ernakulam<br />
                    Kerala-682040
                  </p>
                </div>
                <div className="flex-1">
                  {/* Placeholder for map or additional contact info */}
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/10 text-center">
                    <p className="text-primary font-poppins font-bold mb-2">Opening Hours</p>
                    <p className="text-secondary font-figtree">Monday - Friday<br />9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;