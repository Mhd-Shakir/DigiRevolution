import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'DigiRevolution transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale efficiently while reducing costs by 40%. The team is professional, responsive, and truly understands business needs.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Working with DigiRevolution was a game-changer for our mobile app development. They delivered a high-quality product ahead of schedule and provided excellent post-launch support. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The digital marketing strategy developed by DigiRevolution increased our online presence by 300%. Their data-driven approach and creative solutions exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      position: 'Founder, StartupXYZ',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'From concept to deployment, DigiRevolution guided us through every step of our web development project. Their attention to detail and commitment to quality is unmatched.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-24 bg-dark-800/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            What Our <span className="text-primary-400">Clients Say</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with DigiRevolution.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-dark-900 rounded-2xl p-12 lg:p-16 border border-dark-700 overflow-hidden">
            {/* Background Quote */}
            <Quote 
              size={120} 
              className="absolute top-6 right-6 text-primary-500/10 transform rotate-12" 
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current mx-1" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl lg:text-2xl text-dark-200 text-center mb-12 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary-500"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-white text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-primary-400 text-base mb-1">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-dark-400 text-sm">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-4 rounded-full bg-dark-800 border border-dark-600 hover:border-primary-500 text-white hover:text-primary-400 transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </motion.button>
            </div>

            <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-4 rounded-full bg-dark-800 border border-dark-600 hover:border-primary-500 text-white hover:text-primary-400 transition-all duration-200"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-500 scale-125' 
                    : 'bg-dark-600 hover:bg-dark-500'
                }`}
              />
            ))}
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <p className="text-dark-400 mb-10 text-lg">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {/* Placeholder for client logos */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-28 h-16 bg-dark-700 rounded-lg flex items-center justify-center"
                >
                  <span className="text-dark-500 text-sm">Logo {i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;