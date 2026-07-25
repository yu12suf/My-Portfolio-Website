'use client';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-500 mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default SectionHeading;
