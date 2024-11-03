import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Business Skills',
    skills: ['Business Operations', 'Team Coordination', 'Leadership', 'Risk Management'],
  },
  {
    title: 'Technical Skills',
    skills: ['MS Office Suite', 'Financial Management', 'Process Optimization'],
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Problem Solving', 'Team Management', 'Entrepreneurial Skills'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    hover: {
      x: 10,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={containerVariants}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
          variants={itemVariants}
        >
          Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={skillItemVariants}
                    whileHover="hover"
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;