import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information Collection",
      content: "We may collect personal information such as name, address, email, and payment details during the ordering process on our massager ecommerce site."
    },
    {
      title: "Information Usage",
      content: "Personal information provided will be used for order processing, delivery, and customer support purposes only. We do not sell or share any personal information with third parties."
    },
    {
      title: "Security",
      content: "We implement industry-standard security measures to protect your personal information. All transactions are encrypted to ensure data integrity and confidentiality."
    },
    {
      title: "Cookies",
      content: "Our website may use cookies to enhance user experience and track website usage. These cookies do not collect any personally identifiable information."
    },
    {
      title: "Third-Party Links",
      content: "Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage users to review the privacy policies of any third-party sites."
    },
    {
      title: "Updates",
      content: "Our Privacy Policy may be updated periodically. Users will be notified of any changes. Continued use of our site constitutes acceptance of the updated Privacy Policy."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2D2A3F] bg-hero2 bg-contain">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-primary font-poppins mt-5 mb-6">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-secondary font-medium text-sm md:text-base">
              PLEASE READ THIS POLICY CAREFULLY BEFORE USING THE ENTE BUDDY PLATFORM
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-tertiary/50 backdrop-blur-sm rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-all"
              >
                <h2 className="text-lg md:text-xl font-bold text-primary font-poppins mb-3">
                  {section.title}
                </h2>
                <p className="text-secondary font-figtree text-sm md:text-base leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-primary/5 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center mt-12"
            >
              <p className="text-secondary font-figtree text-sm md:text-base">
                If you have any questions or concerns regarding our Privacy Policy, please contact us at{" "}
                <span className="text-primary font-medium">support@enteBuddy.com</span>
              </p>
            </motion.div>

            {/* Agreement Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-8"
            >
              <p className="text-secondary/80 font-figtree text-xs md:text-sm">
                By using our massager ecommerce site, you agree to the terms outlined in this Privacy Policy.
                Thank you for trusting us with your personal information.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;