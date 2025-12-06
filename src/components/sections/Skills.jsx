import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import SectionTitle from '../ui/SectionTitle';

const Skills = () => {
  const categories = [
    { title: 'Frontend', data: skillsData.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', data: skillsData.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'Tools', data: skillsData.tools, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies I work with"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-500 transition-all duration-300"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.data.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-primary-500 font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`absolute h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;