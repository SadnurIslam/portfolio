import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import { educationData } from '../../data/education';
import SectionTitle from '../ui/SectionTitle';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark-800">
      <div className="container-custom">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey"
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-500 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-900 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <FaGraduationCap className="text-primary-500" />
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-400 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendar /> {edu.duration}
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary-500/10 px-4 py-2 rounded-lg">
                    <p className="text-primary-500 font-bold">{edu.grade}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">{edu.description}</p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <FaTrophy className="text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary-500 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;