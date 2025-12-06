import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLightbulb, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-dark-900">
      <div className="container-custom">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary-500 hover:text-primary-400 mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">{project.name}</h1>
          <p className="text-2xl text-gray-400 mb-6">{project.tagline}</p>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.detailed.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.detailed.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2"
            >
              <FaGithub /> View Code
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-dark-800 rounded-xl p-8 border border-dark-700"
            >
              <h2 className="text-3xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.detailed.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-800 rounded-xl p-8 border border-dark-700"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-primary-500" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.detailed.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-primary-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-800 rounded-xl p-8 border border-dark-700"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <FaLightbulb className="text-yellow-500" />
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.detailed.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-dark-900 rounded-lg p-6 border border-dark-700"
                  >
                    <h3 className="text-xl font-bold text-primary-500 mb-2">
                      Problem:
                    </h3>
                    <p className="text-gray-300 mb-4">{challenge.problem}</p>
                    <h3 className="text-xl font-bold text-green-500 mb-2">
                      Solution:
                    </h3>
                    <p className="text-gray-300">{challenge.solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Future Improvements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-800 rounded-xl p-8 border border-dark-700"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <FaRocket className="text-purple-500" />
                Future Improvements
              </h2>
              <ul className="space-y-3">
                {project.detailed.improvements.map((improvement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>{improvement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 sticky top-24"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-dark-900 text-primary-500 px-4 py-2 rounded-full text-sm border border-primary-500/30 font-semibold"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.detailed.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.detailed.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors"
                >
                  <FaGithub /> GitHub Repository
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;