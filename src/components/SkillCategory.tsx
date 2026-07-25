'use client';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="glass-effect p-6 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-bold text-accent mb-4">{category}</h3>
      <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30 hover:bg-accent/20 transition-colors cursor-default"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;
