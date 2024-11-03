import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User } from 'lucide-react'; // Assuming you want to use a different icon

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aboutContent = [
    {
      title: 'About Me',
      description: [
        'I am a BSc in CSE student at Daffodil International University with a strong background in business operations and team coordination. My experience as an Operations & Accounts Coordinator has equipped me with valuable skills in communication, financial management, and leadership.',
        'I am passionate about technology and innovation, constantly seeking to expand my knowledge and skills in the field of computer science while maintaining a strong foundation in business operations.',
      ],
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
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="space-y-8">
          {aboutContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  {item.description.map((desc, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300 mt-4">{desc}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;