import { motion } from 'framer-motion';
import { Users, Award, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '10+', label: 'Expert Team Members' },
    { icon: Award, number: '30+', label: 'Successful Projects' },
    { icon: Target, number: '100%', label: 'Client Satisfaction' },
    { icon: Lightbulb, number: '1.5+', label: 'Years of Innovation' },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships.',
    },
    {
      title: 'Quality Driven',
      description: 'We maintain the highest standards in every project we deliver.',
    },
    {
      title: 'Agile Approach',
      description: 'Fast, flexible, and responsive to changing business needs.',
    },
  ];

  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
              About <span className="text-primary-400">DigiRevolution</span>
            </h2>
            
            <p className="text-xl text-dark-300 mb-10 leading-relaxed">
              We are a forward-thinking digital transformation company dedicated to 
              helping businesses navigate the complexities of the modern digital landscape. 
              Our team of experts combines technical excellence with strategic insight 
              to deliver solutions that drive real business value.
            </p>

            <p className="text-lg text-dark-300 mb-12 leading-relaxed">
              Founded on the principle that technology should empower businesses, 
              not complicate them, we work closely with our clients to understand 
              their unique challenges and create tailored solutions that exceed expectations.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-dark-800 border border-dark-700"
                >
                  <h4 className="font-semibold text-white mb-3 text-lg">{value.title}</h4>
                  <p className="text-sm text-dark-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-600/10 rounded-full blur-xl" />

            <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-10 border border-dark-700">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Our Impact in Numbers
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-8 rounded-xl bg-dark-900 border border-dark-600 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <div className="inline-flex p-4 rounded-lg bg-primary-500/20 mb-6">
                      <stat.icon size={28} className="text-primary-400" />
                    </div>
                    <div className="text-4xl font-bold text-primary-400 mb-3">
                      {stat.number}
                    </div>
                    <div className="text-sm text-dark-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Team Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/30"
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Ready to Transform Your Business?
                  </h4>
                  <p className="text-dark-300 mb-6 text-base">
                    Let's discuss how we can help you achieve your digital goals.
                  </p>
                  <Link to="/contact">
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Get in Touch
                  </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;