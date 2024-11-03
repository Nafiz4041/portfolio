import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="prose dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I am a BSc in CSE student at Daffodil International University with a strong background in business operations
            and team coordination. My experience as an Operations & Accounts Coordinator has equipped me with valuable
            skills in communication, financial management, and leadership.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            I am passionate about technology and innovation, constantly seeking to expand my knowledge and skills in the
            field of computer science while maintaining a strong foundation in business operations.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;