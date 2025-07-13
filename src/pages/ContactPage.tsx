import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Debug: Log form data
    const formData = new FormData(form.current);
    console.log("Form data being sent:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs
      .sendForm(
        "service_940rv2g",       // ✅ Your actual service ID
        "template_s7dn6x9",      // ✅ Your actual template ID
        form.current,
        "F0K24r_0-JT3JkL6e"      // ✅ Your actual public key (user ID)
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-dark-900 text-white px-6 py-24 md:px-20 mt-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-primary-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-primary-400" size={20} />
              <a href="mailto:digirevolution1@gmail.com" className="hover:text-white transition">
                digirevolution1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary-400" size={20} />
              <a href="tel:+919745614587" className="hover:text-white transition">
                +91 97456 14587
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary-400" size={20} />
              <span>Calicut, Kerala, India</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full bg-dark-700 border border-dark-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full bg-dark-700 border border-dark-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="w-full bg-dark-700 border border-dark-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-dark-700 border border-dark-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-semibold shadow-lg transition-all"
          >
            Send Message →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
