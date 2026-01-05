import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ project, index, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card group cursor-pointer h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl mb-4 h-48">
        <img
          src={
            imageError
              ? `https://via.placeholder.com/600x400/6366f1/ffffff?text=${encodeURIComponent(
                  project.name
                )}`
              : project.image
          }
          alt={project.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            onClick={() => onViewDetails(project)}
            className="btn-primary w-full"
          >
            View Details
          </button>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
