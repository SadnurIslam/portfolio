import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-custom">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Some of my best work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-900 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4">{project.tagline}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-dark-800 text-primary-500 px-2 py-1 rounded text-xs border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs flex items-center">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors"
                  >
                    View Details <FaArrowRight />
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.detailed.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-800 text-primary-500 p-2 rounded-lg border border-primary-500/30 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.detailed.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-800 text-primary-500 p-2 rounded-lg border border-primary-500/30 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;