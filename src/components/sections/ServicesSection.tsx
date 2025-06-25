import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Globe, Palette, Server, Video, Bot } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Design",
        "API Development",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "AI Chat Bots",
      description:
        "Smart chatbots to automate replies, capture leads, and support users 24/7.",
      features: ["Automated Support","Lead Capture","Multilingual Chat","Custom Personality",],
      color: "from-red-500 to-purple-600",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence.",
      features: [
        "SEO Optimization",
        "Social Media",
        "Content Marketing",
        "PPC Campaigns",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Graphic & Logo Design",
      description:
        "Creative, brand-focused designs including logos, UI/UX, and marketing visuals to make your brand stand out.",
      features: [
        "Custom Logo Design",
        "UI/UX Mockups",
        "Social Media Creatives",
        "Branding Kits",
      ],
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Server,
      title: "Domain & Hosting",
      description:
        "We set up your domain and hosting for a secure, high-performance online presence.",
      features: [
        "Domain Registration",
        "Hosting Setup",
        "SSL Installation",
        "Business Email",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Creative video editing for YouTube, social media, and promotional content.",
      features: [
        "Reels & Shorts",
        "YouTube Edits",
        "Subtitles & Audio Sync",
        "Color Grading",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-dark-800/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            Our <span className="text-primary-400">Services</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business
            thrive in the digital age. From web development to cloud solutions,
            we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-dark-900 rounded-xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-8`}
              >
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-dark-300 mb-8 leading-relaxed text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-dark-400"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-4" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-primary-500/25"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
