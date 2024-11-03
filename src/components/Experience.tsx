import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Professional Experience</h2>
        <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="absolute -left-[41px] bg-white dark:bg-gray-900 p-2 rounded-full border-2 border-blue-500">
              <Briefcase className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Operations & Accounts Coordinator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Daily Trading Corporation • 2020 - 2021</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Managed effective communication between workers and management</li>
              <li>Coordinated with external businesses for partnerships</li>
              <li>Oversaw company accounts and financial tracking</li>
              <li>Optimized workflow processes for enhanced efficiency</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;