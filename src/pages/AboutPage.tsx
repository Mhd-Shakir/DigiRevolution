import { motion } from "framer-motion";
import { Gem, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-dark-900 text-white px-6 py-24 md:px-20" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Textual Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            About <span className="text-primary-400">DigiRevolution</span>
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            DigiRevolution is your one-stop destination for innovative digital
            solutions. We specialize in transforming ideas into powerful digital
            experiences — from full-stack websites and AI tools to digital
            branding and marketing.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Our team of developers, designers, and strategists is dedicated to
            crafting high-performance, user-centric digital products that
            elevate your brand. Whether you're a startup or scaling enterprise,
            we partner with you for long-term digital success.
          </p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Target className="text-primary-400" size={18} />
                <h4 className="font-semibold text-white">Our Mission</h4>
              </div>
              <p>
                To empower businesses with reliable, modern, and impactful
                digital tools that spark growth.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Eye className="text-primary-400" size={18} />
                <h4 className="font-semibold text-white">Our Vision</h4>
              </div>
              <p>
                To be a trusted digital transformation partner for businesses
                across industries and borders.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-8 flex gap-3 items-start">
            <Gem className="text-primary-400 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-white mb-2">Core Values</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                <li>Client-First Approach</li>
                <li>Transparency & Communication</li>
                <li>Innovation & Scalability</li>
                <li>End-to-End Support</li>
              </ul>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 transition-all text-white font-semibold shadow-lg"
          >
            Explore Our Services →
          </Link>
        </motion.div>

        {/* RIGHT: Visual Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-72 md:h-96 bg-gradient-to-br from-primary-500 to-purple-700 rounded-2xl shadow-xl flex items-center justify-center text-center px-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Driven by Results, <br /> Designed for Humans.
              </h3>
              <p className="text-sm text-white/80">
                Crafting impactful websites, AI tools, and branding that connect
                and convert.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white"
      >
        <div>
          <p className="text-3xl font-bold text-primary-400">50+</p>
          <p className="text-sm text-gray-400 mt-1">Projects Delivered</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary-400">25+</p>
          <p className="text-sm text-gray-400 mt-1">Clients Served</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary-400">5+</p>
          <p className="text-sm text-gray-400 mt-1">Years Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary-400">100%</p>
          <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
        </div>
      </motion.div>
    </section>
  );
}
