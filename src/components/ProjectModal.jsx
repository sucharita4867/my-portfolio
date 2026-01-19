import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Code,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-red-500/20 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Project Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `${project.image}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {project.name}
              </h2>
              <p className="text-purple-300">{project.category}</p>
            </div>
          </div>

          <div className="p-8">
            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Code className="text-purple-400" size={20} />
                <h3 className="text-xl font-semibold">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">About This Project</h3>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Github size={20} />
                View Source Code
              </a>
            </div>

            {/* Challenges */}
            <div className="mb-6 card bg-red-500/5 border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="text-red-400" size={20} />
                <h3 className="text-xl font-semibold">Challenges Faced</h3>
              </div>
              <ul className="space-y-2">
                {project.challenges?.map((challenge, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="card bg-green-500/5 border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="text-green-400" size={20} />
                <h3 className="text-xl font-semibold">Future Improvements</h3>
              </div>
              <ul className="space-y-2">
                {project.improvements?.map((improvement, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
