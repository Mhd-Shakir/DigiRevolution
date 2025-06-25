import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  description: string;
  tools: string[];
  pricing: { package: string; price: string }[];
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "We build responsive, fast, and scalable websites using modern technologies tailored to your business goals.",
    tools: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    pricing: [
      { package: "Basic Website (1-3 pages)", price: "₹4,999" },
      { package: "Business Website (4-7 pages)", price: "₹9,999" },
      { package: "Fullstack Web App", price: "₹14,999+" },
    ],
  },
  {
    title: "AI Chatbots",
    description:
      "We integrate intelligent AI chatbots for websites and apps to automate customer service and boost engagement.",
    tools: ["OpenAI", "Langchain", "Python", "Dialogflow"],
    pricing: [
      { package: "Basic FAQ Bot", price: "₹2,999" },
      { package: "Custom Trained Bot", price: "₹6,999+" },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence through SEO, social media marketing, and ad campaign optimization.",
    tools: ["Meta Ads", "Google Ads", "Canva", "Hootsuite"],
    pricing: [
      { package: "Startup Boost", price: "₹3,999/month" },
      { package: "Full Campaign Management", price: "₹7,999/month" },
    ],
  },
  {
    title: "Graphic & Logo Design",
    description:
      "Creative logo, brand kit, social post designs, and business branding crafted for your brand identity.",
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
    pricing: [
      { package: "Logo Design", price: "₹1,499" },
      { package: "Social Media Kit", price: "₹2,999" },
      { package: "Full Branding Package", price: "₹5,499" },
    ],
  },
  {
    title: "Domain & Hosting",
    description:
      "Affordable domain name registration and reliable hosting packages with full setup assistance.",
    tools: ["GoDaddy", "Hostinger", "cPanel"],
    pricing: [
      { package: "Domain Registration (.com)", price: "₹899/year" },
      { package: "Basic Hosting Plan", price: "₹1,999/year" },
      { package: "Full Setup + Domain + Hosting", price: "₹3,999" },
    ],
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing for reels, ads, intros/outros, and YouTube content.",
    tools: ["Adobe Premiere", "After Effects", "CapCut"],
    pricing: [
      { package: "Reel/Short (under 1 min)", price: "₹799" },
      { package: "Promo Video (1-3 mins)", price: "₹1,499" },
      { package: "Full Edit (5+ mins)", price: "₹2,999+" },
    ],
  },
];

export default function ServicesFAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-20 md:px-20 bg-dark-900 text-white" id="services">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-4">
          Our <span className="text-primary-400">Services</span>
        </h2>
        <div className="space-y-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="bg-dark-800/50 border border-dark-700 rounded-xl overflow-hidden shadow-lg"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center bg-gradient-to-r from-dark-800 to-dark-700 hover:from-primary-900/40 hover:to-dark-800 transition-all duration-300"
                  onClick={() => toggle(index)}
                >
                  <span className="text-xl md:text-2xl font-semibold">{service.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-primary-400 font-bold"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 py-5 space-y-4 text-sm text-dark-200 bg-dark-900"
                    >
                      <p className="text-gray-300">{service.description}</p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">Tools:</strong> {service.tools.join(", ")}
                      </p>
                      <div>
                        <p className="font-medium text-gray-200 mb-1">Pricing:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {service.pricing.map((item, i) => (
                            <li key={i}>
                              <span className="font-semibold text-white">{item.package}</span>:{" "}
                              {item.price}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
