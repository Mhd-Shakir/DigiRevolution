import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '/services' },
      { name: 'AI Chat Bots', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
      { name: 'Video Editing', href: '/services' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/contact' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.google.com', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/digirevolution_/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/DigiRevolution_logo.png" 
                alt="DigiRevolution" 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-dark-300 mb-8 leading-relaxed text-base">
              Transforming businesses through innovative digital solutions. 
              We help companies navigate the digital landscape with cutting-edge technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-dark-300">
                <Mail size={18} />
                <a href="mailto:digirevolution1@gmail.com" className="text-sm">digirevolution1@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-dark-300">
                <Phone size={18} />
                <a href="tel:+919745614587" className="text-sm">+91 9745614587</a>
              </div>
              <div className="flex items-center space-x-3 text-dark-300">
                <MapPin size={18} />
                <span className="text-sm">Calicut, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-6 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-dark-300 text-sm">
              © {currentYear} DigiRevolution. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-dark-800 hover:bg-primary-600 text-dark-300 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;