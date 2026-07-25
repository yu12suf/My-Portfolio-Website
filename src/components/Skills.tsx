'use client';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import SectionHeading from './SectionHeading';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Bootstrap'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express', 'Django', 'PHP', 'Java', 'RESTful APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Mongoose ODM'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['OpenAI API', 'LangChain', 'Prompt Engineering', 'Python', 'Scikit-learn', 'NLP', 'TensorFlow'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux', 'AWS', 'Vercel', 'Postman'],
  },
  {
    category: 'Other',
    skills: ['System Design', 'OOP', 'Agile/Scrum', 'Problem Solving', 'Technical Writing', 'Team Leadership'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Technical Skills" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skillGroup, idx) => (
            <SkillCategory key={idx} category={skillGroup.category} skills={skillGroup.skills} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
