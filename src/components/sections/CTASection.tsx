import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
              Ready to Start Your
              <span className="text-primary-400"> Digital Journey?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-dark-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Let's transform your business with innovative digital solutions. 
              Get in touch with our experts today and discover how we can help 
              you achieve your goals.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-primary-500/25"
              >
                <span>Get Free Consultation</span>
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="border border-primary-500 hover:bg-primary-500/10 text-primary-400 hover:text-primary-300 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-4 p-8 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="p-4 rounded-lg bg-primary-500/20">
                <Mail size={28} className="text-primary-400" />
              </div>
              <a href='mailto:digirevolution1@gmail.com' className="text-left">
                <div className="text-white font-medium text-lg mb-1">Email Us</div>
                <a href='mailto:digirevolution1@gmail.com' className="text-dark-300">hello@digirevolution.com</a>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-4 p-8 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="p-4 rounded-lg bg-primary-500/20">
                <Phone size={28} className="text-primary-400" />
              </div>
              <a href="tel:+919745614587" className="text-left">
                <div className="text-white font-medium text-lg mb-1">Call Us</div>
                <a href="tel:+919745614587" className="text-dark-300">+91 9745614587</a>
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-dark-700"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-dark-400 text-base">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;