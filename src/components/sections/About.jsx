import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import SectionTitle from '../ui/SectionTitle';
import profileImg from '../../assets/profile.jpg';
import { FaCode, FaLaptopCode, FaCertificate, FaGraduationCap, FaAward  } from 'react-icons/fa';

const About = () => {
  const { about } = PERSONAL_INFO;

  const achievements = [
    { icon: FaCode, label: 'Projects Built', value: '10+', color: 'text-blue-500' },
    { icon: FaLaptopCode, label: 'Technologies', value: '15+', color: 'text-green-500' },
    { icon: FaAward , label: 'Achievements in CP', value: '6+', color: 'text-indigo-500' },
    { icon: FaGraduationCap, label: 'Learning', value: 'Daily', color: 'text-yellow-500' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20"
              >
                <img
                  src={profileImg}
                  alt="About Me"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Animated Border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 border-4 border-dashed border-primary-500/30 rounded-2xl pointer-events-none"
                style={{ margin: '-8px' }}
              />
            </div>

            {/* Achievement Badges Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-dark-900 p-4 rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-300 text-center"
                >
                  <achievement.icon className={`text-3xl ${achievement.color} mx-auto mb-2`} />
                  <h4 className="text-2xl font-bold gradient-text">{achievement.value}</h4>
                  <p className="text-gray-400 text-sm mt-1">{achievement.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-500 mb-3">
                👋 Introduction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.intro}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-500 mb-3">
                🚀 My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.journey}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-500 mb-3">
                💼 What I Do
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.work}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-500 mb-3">
                🏆 Competitive Programming
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.competitiveProgramming}
              </p>
            </div>
{/* 
            <div>
              <h3 className="text-2xl font-bold text-primary-500 mb-3">
                🎨 Beyond Coding
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.hobbies}
              </p>
            </div> */}

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { label: 'Name', value: PERSONAL_INFO.name },
                { label: 'Email', value: PERSONAL_INFO.email },
                { label: 'Location', value: PERSONAL_INFO.location },
                { label: 'Role', value: PERSONAL_INFO.designation },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-dark-900 p-4 rounded-lg border border-dark-700 hover:border-primary-500 transition-colors duration-300"
                >
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-semibold mt-1 break-words">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;