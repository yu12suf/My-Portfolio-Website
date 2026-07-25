'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const projectsData = [
  {
    id: 1,
    title: 'Educational Adventure Pathway (EAP)',
    subtitle: 'AI-Powered Scholarship Platform',
    description:
      'Comprehensive platform supporting Ethiopian students pursuing international education with AI scholarship matching, English assessment, and counselor marketplace.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'OpenAI API', 'TanStack Query'],
    features: [
      'AI Scholarship Recommendation Engine',
      'English Proficiency Assessment',
      'Personalized Learning Pathways',
      'Escrow Payment System',
      'Mock Exam Management',
    ],
    link: 'https://github.com/yu12suf/ScholarshipRecommendationPlatform',
    role: 'Full-Stack Developer',
  },
  {
    id: 2,
    title: 'Harar City Land Management System',
    subtitle: 'File Management with 4-Pane Interface',
    description:
      'Advanced file management system with real-time tracking, audit trails, and role-based access control for efficient land/file administration.',
    technologies: ['React', 'Django REST', 'Python', 'JWT Auth', 'PostgreSQL', 'Bootstrap'],
    features: [
      '4-Pane Interface (Details, Holders, History, Notifications)',
      'Real-time Check-out/Return Tracking',
      'Complete Audit Trail with CSV Export',
      'Role-Based Access Control',
      'WCAG AA+ Accessibility',
    ],
    link: 'https://github.com/yu12suf/Harar-City-Land-Management-System',
    role: 'Full-Stack Developer',
  },
  {
    id: 3,
    title: 'Ethiopian-UniConnect',
    subtitle: 'University Resource Exchange Platform',
    description:
      'PHP-based platform connecting Ethiopian university students to exchange, borrow, and sell academic books and materials securely.',
    technologies: ['PHP 8.2', 'MySQL', 'OOP', 'Bootstrap 5', 'JavaScript', 'PDO'],
    features: [
      'University Email Verification',
      'Secure Book Listing Management',
      'Exchange Request System',
      'Messaging System',
      'Admin Dashboard with Analytics',
    ],
    link: 'https://github.com/yu12suf/Ethiopian-UniConnect',
    role: 'Full-Stack Developer & System Admin',
  },
  {
    id: 4,
    title: 'University Management System',
    subtitle: 'Comprehensive Admin System',
    description:
      'End-to-end university management solution handling student registration, course management, staff administration, and reporting.',
    technologies: ['Java', 'MySQL', 'Swing GUI', 'Object-Oriented Design'],
    features: [
      'Student Registration & Management',
      'Course Management System',
      'Staff Administration',
      'Grade Management',
      'System Reporting',
    ],
    link: 'https://github.com/yu12suf/UniversityManagementSystem',
    role: 'Backend Developer',
  },
  {
    id: 5,
    title: 'Restaurant Management System',
    subtitle: 'Multi-Tenant Admin Platform',
    description:
      'Comprehensive restaurant operations platform with registration, menu management, order tracking, and multi-user support.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    features: [
      'Restaurant Registration & Profiles',
      'Menu & Item Management',
      'Order Tracking System',
      'User Role Management',
      'Reporting & Analytics',
    ],
    link: 'https://github.com/yu12suf/Restautant-Management-System',
    role: 'Full-Stack Developer',
  },
  {
    id: 6,
    title: 'Fake News Detection System',
    subtitle: 'Machine Learning Classification',
    description:
      'ML-powered system identifying and classifying fake news using NLP techniques and classification algorithms.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Pandas', 'Scikit-learn'],
    features: [
      'NLP Text Processing',
      'Classification Algorithm',
      'Accuracy Metrics & Analysis',
      'Real-time Detection',
    ],
    link: 'https://github.com/yu12suf/Fake-News-Detection-System',
    role: 'ML Engineer',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Featured Projects" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
