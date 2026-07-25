'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a recent graduate from Haramaya University with a degree in Software 
              Engineering (CGPA: 3.85). I'm passionate about building innovative solutions 
              that solve real-world problems, particularly in education and community development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              With expertise in full-stack development, AI integration, and system design, 
              I've successfully delivered multiple production-ready applications. I thrive in 
              collaborative environments and love learning new technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My focus is on writing clean, scalable code and creating seamless user experiences 
              that make a difference.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-accent">Key Highlights</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">✓</span>
                <span>Graduated 2018 E.C. from Haramaya University</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">✓</span>
                <span>Exit Exam Score: 86/100</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">✓</span>
                <span>Full-Stack Development expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">✓</span>
                <span>AI/ML Integration experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">✓</span>
                <span>System Design & Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">✓</span>
                <span>Database Management & Optimization</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
