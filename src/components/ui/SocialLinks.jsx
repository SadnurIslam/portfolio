import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../utils/constants';

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaGithub, url: PERSONAL_INFO.social.github, color: 'hover:text-gray-400' },
    { icon: FaLinkedin, url: PERSONAL_INFO.social.linkedin, color: 'hover:text-blue-500' },
    { icon: FaTwitter, url: PERSONAL_INFO.social.twitter, color: 'hover:text-blue-400' },
    { icon: FaFacebook, url: PERSONAL_INFO.social.facebook, color: 'hover:text-blue-600' },
  ];

  return (
    <div className="flex gap-4 justify-center lg:justify-start">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`text-3xl text-gray-400 transition-colors duration-300 ${social.color}`}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;