import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'BSc in CSE',
      institution: 'Daffodil International University',
      location: 'Birulia, Savar, Dhaka',
      period: '2021 - Present',
    },
    {
      degree: 'HSC in Science',
      institution: 'Nawab Habibullah Model School and College',
      location: 'Uttara, Dhaka',
      grade: 'GPA: 4.58',
      period: '2018 - 2020',
    },
    {
      degree: 'SSC in Science',
      institution: 'Nawab Habibullah Model School and College',
      location: 'Uttara, Dhaka',
      grade: 'GPA: 4.56',
      period: '2016 - 2018',
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.degree}</h3>
                  <p className="text-blue-500 dark:text-blue-400 font-medium">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.location}</p>
                  {item.grade && (
                    <p className="text-green-500 dark:text-green-400 font-medium">{item.grade}</p>
                  )}
                  <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;