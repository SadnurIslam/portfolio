import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { experienceData } from '../../data/experience';
import SectionTitle from '../ui/SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div className="container-custom">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey"
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-500 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-primary-500 rounded-full"
                ></motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <FaBriefcase className="text-primary-500" />
                      {exp.position}
                    </h3>
                    <span className="bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-lg text-primary-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-primary-500 mt-1">▸</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="bg-dark-900 text-primary-500 px-3 py-1 rounded-full text-sm border border-primary-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;