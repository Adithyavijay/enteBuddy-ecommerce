import { useRef, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion';

const ContactUs = ({ onClose }) => {
  const modalRef = useRef();
  
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-sm"
      >
        <div className="relative overflow-hidden bg-[#3A2D3F] bg-hero2 bg-contain rounded-xl shadow-2xl border border-secondary/20">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 text-primary hover:text-secondary transition-colors rounded-full hover:bg-white/10"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="px-5 pt-6 pb-4 text-center">
            <h2 className="text-2xl font-bold font-poppins text-primary mb-2">Get in Touch</h2>
            <p className="text-sm text-secondary font-figtree">We'd love to hear from you</p>
          </div>

          {/* Contact options */}
          <div className="px-5 py-4">
            {/* Email option */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2.5 bg-primary/10 rounded-full">
                  <FaEnvelope className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-base font-semibold font-poppins text-primary text-center mb-1">Email Us</h3>
              <a 
                href="mailto:support@enteBuddy.com"
                className="block text-center text-secondary hover:text-primary transition-colors font-figtree text-sm"
              >
                support@enteBuddy.com
              </a>
            </div>

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-secondary/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 text-xs text-primary font-figtree bg-[#3A2D3F]">OR</span>
              </div>
            </div>

            {/* WhatsApp option */}
            <div className="mt-6">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2.5 bg-secondary/10 rounded-full">
                  <FaWhatsapp className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <h3 className="text-base font-semibold font-poppins text-primary text-center mb-2">WhatsApp</h3>
              <a
                href="http://wa.me/918891682217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2.5 bg-secondary hover:bg-secondary/90 text-[#3A2D3F] font-bold rounded-lg transition-colors mx-auto text-sm font-figtree"
              >
                <span className="mr-2">Chat with us</span>
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 text-center border-t border-secondary/20">
            <p className="text-xs text-secondary font-figtree">
              Available 24/7 for your queries
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;