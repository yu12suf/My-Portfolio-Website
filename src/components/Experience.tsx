'use client';
import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';
import SectionHeading from './SectionHeading';

const experienceData = [
  {
    title: 'Full-Stack Developer',
    company: 'Educational Adventure Pathway',
    date: '2024 - Present',
    description:
      'Led development of AI-powered scholarship recommendation platform, integrating OpenAI APIs for intelligent matching algorithms.',
    responsibilities: [
      'Built full-stack features using Next.js and Node.js',
      'Integrated AI scholarship recommendation engine',
      'Implemented real-time data syncing with TanStack Query',
      'Designed and managed MongoDB database schemas',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Haramaya University',
    date: '2023 - 2024',
    description:
      'Developed Harar City Land Management System with advanced file tracking and real-time collaboration features.',
    responsibilities: [
      'Created 4-pane interface for efficient file management',
      'Implemented real-time checkout/return tracking',
      'Built role-based access control system',
      'Achieved WCAG AA+ accessibility standards',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Ethiopian-UniConnect',
    date: '2023',
    description:
      'Developed secure platform for university students to exchange academic materials across Ethiopia.',
    responsibilities: [
      'Implemented university email verification system',
      'Built secure book exchange marketplace',
      'Created messaging system for peer communication',
      'Developed admin dashboard with analytics',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {experienceData.map((exp, idx) => (
            <ExperienceItem key={idx} experience={exp} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
