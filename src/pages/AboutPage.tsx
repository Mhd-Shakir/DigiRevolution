import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20 min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">About DigiRevolution</h1>
          <p className="text-dark-300 text-xl max-w-3xl mx-auto">
            Learn more about our mission, vision, and the team behind DigiRevolution.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;