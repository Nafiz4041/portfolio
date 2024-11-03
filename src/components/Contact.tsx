import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Languages, Award } from 'lucide-react';

const Contact = () => {
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
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Additional Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
              <Languages className="w-6 h-6 mr-2" />
              Languages
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Bengali (Native)</li>
              <li className="text-gray-600 dark:text-gray-300">English (B2)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
              <Award className="w-6 h-6 mr-2" />
              Leadership
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              General Secretary of College Science Club
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
          <div className="space-y-4">
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              mohaiminnafiz13@gmail.com
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              Dhaka, Bangladesh
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;