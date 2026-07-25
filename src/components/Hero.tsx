'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-primary via-secondary to-primary"
    >
      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Yusuf Kedir
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4"
          variants={itemVariants}
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Building scalable, intelligent applications with modern technologies.
          Specializing in AI integration, system design, and full-stack development.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mb-12 flex-wrap"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-semibold transition-all hover-scale"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary rounded-lg font-semibold transition-all hover-scale"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center text-2xl"
          variants={itemVariants}
        >
          <a
            href="https://github.com/yu12suf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hover-scale"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/yusuf-kedir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hover-scale"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:yusuf.kedir@example.com"
            className="hover:text-accent transition-colors hover-scale"
          >
            <FiMail />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-gray-400 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  );
};

export default Hero;
