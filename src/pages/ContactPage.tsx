import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    // Convert FormData values to string (they can be FormDataEntryValue | null)
    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      setLoading(true);

      // Axios by default sends JS objects as JSON, but make sure to set headers
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.success) {
        toast.success("Message sent successfully!");
        form.current.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error: unknown) {
      // Try to show a more specific error if available
      if (error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object' && 'data' in error.response && error.response.data && typeof error.response.data === 'object' && 'error' in error.response.data) {
        toast.error(String(error.response.data.error));
      } else {
        toast.error("Something went wrong!");
      }
      if (import.meta.env.DEV) {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
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
          onSubmit={handleSubmit}
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
              name="name"
              required
              className="w-full bg-dark-700 border border-dark-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-dark-700 border border-dark-500 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
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
            disabled={loading}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-semibold shadow-lg transition-all"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
