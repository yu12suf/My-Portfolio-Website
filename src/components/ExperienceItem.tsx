'use client';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
    responsibilities: string[];
  };
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="glass-effect p-6 rounded-lg border-l-4 border-accent"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
        <p className="text-accent font-semibold">{experience.company}</p>
        <p className="text-gray-400 text-sm">{experience.date}</p>
      </div>

      <p className="text-gray-300 mb-4">{experience.description}</p>

      <ul className="space-y-2">
        {experience.responsibilities.map((resp, idx) => (
          <li key={idx} className="flex items-start text-gray-300">
            <span className="text-accent mr-3 font-bold">▪</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceItem;
