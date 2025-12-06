import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin,  FaEnvelope, FaFacebook } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate MERN Stack Developer dedicated to creating amazing web experiences 
              and solving complex problems with elegant solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 text-2xl transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 text-2xl transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={PERSONAL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 text-2xl transition-colors duration-300"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-gray-400 hover:text-primary-500 text-2xl transition-colors duration-300"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-dark-700 text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by {PERSONAL_INFO.name} © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;