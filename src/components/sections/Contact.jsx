import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../utils/constants';
import SectionTitle from '../ui/SectionTitle';
import SocialLinks from '../ui/SocialLinks';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`,
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone}`,
      color: 'text-green-500'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: PERSONAL_INFO.whatsapp,
      link: `https://wa.me/${PERSONAL_INFO.whatsapp}`,
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: PERSONAL_INFO.location,
      link: null,
      color: 'text-blue-500'
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's work together on your next project"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Don't like forms? Send me an email or connect with me on social media. 
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-800 p-4 rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-300"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className={`text-3xl ${item.color}`}>
                        <item.icon />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className={`text-3xl ${item.color}`}>
                        <item.icon />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-800 p-8 rounded-2xl border border-dark-700"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-dark-900 text-white px-4 py-3 rounded-lg border border-dark-700 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-dark-900 text-white px-4 py-3 rounded-lg border border-dark-700 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-dark-900 text-white px-4 py-3 rounded-lg border border-dark-700 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full bg-dark-900 text-white px-4 py-3 rounded-lg border border-dark-700 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;