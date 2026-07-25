'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FiMail className="text-accent text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:yusuf.kedir@example.com" className="text-white hover:text-accent">
                    yusuf.kedir@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="text-accent text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+251912345678" className="text-white hover:text-accent">
                    +251 (912) 345-678
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="text-accent text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Harar, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2 rounded-lg transition-colors"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
