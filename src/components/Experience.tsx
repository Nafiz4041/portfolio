import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Operations & Accounts Coordinator',
      company: 'Daily Trading Corporation',
      location: 'Dhaka, Bangladesh',
      period: '2020 - 2021',
      responsibilities: [
        'Managed effective communication between workers and management',
        'Coordinated with external businesses for partnerships',
        'Oversaw company accounts and financial tracking',
        'Optimized workflow processes for enhanced efficiency',
      ],
    },
    // Add more experiences as needed
  ];

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

  const responsibilityVariants = {
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
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-blue-500 dark:text-blue-400 font-medium">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.location}</p>
                  <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4">
                    {item.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        variants={responsibilityVariants}
                        whileHover="hover"
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <motion.span 
                          className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                          whileHover={{ scale: 1.5 }}
                        />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;