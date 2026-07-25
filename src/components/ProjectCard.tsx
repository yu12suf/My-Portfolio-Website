'use client';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  link: string;
  role: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="glass-effect rounded-lg p-6 hover:border-accent transition-all hover-scale group h-full flex flex-col"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-accent mt-1">{project.subtitle}</p>
        <p className="text-xs text-gray-400 mt-2 font-semibold">Role: {project.role}</p>
      </div>

      <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-400 mb-2">Key Features:</p>
        <ul className="text-xs text-gray-300 space-y-1">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-accent mr-2">▪</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md border border-accent/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold text-sm"
      >
        <FiGithub /> View Project <FiExternalLink className="text-xs" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
