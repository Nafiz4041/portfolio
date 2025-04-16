import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Languages, Award, Linkedin, Twitter, Facebook, Instagram, Github, Phone } from 'lucide-react';

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
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Additional Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
              <Languages className="w-6 h-6 mr-2 text-blue-500" />
              Languages
            </h3>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <motion.span 
                  className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                  whileHover={{ scale: 1.5 }}
                />
                Bengali (Native)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <motion.span 
                  className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                  whileHover={{ scale: 1.5 }}
                />
                English (B2)
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
              <Award className="w-6 h-6 mr-2 text-blue-500" />
              Leadership
            </h3>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <motion.span 
                  className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                  whileHover={{ scale: 1.5 }}
                />
                General Secretary at college science club
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow mt-8"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
            <Phone className="w-6 h-6 mr-2 text-blue-500" /> {/* Changed icon to Phone */}
            Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                <a href="mailto:mohaiminnafiz13@gmail.com" className="hover:underline">mohaiminnafiz13@gmail.com</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <a href="tel:+8801857316721" className="hover:underline">01857316721</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2 text-blue-500" />
                <a href="https://linkedin.com/in/yourprofile" className="hover:underline">LinkedIn</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Twitter className="w-5 h-5 mr-2 text-blue-500" />
                <a href="https://twitter.com/yourprofile" className="hover:underline">Twitter</a>
              </motion.li>
            </ul>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Facebook className="w-5 h-5 mr-2 text-blue-500" />
                <a href="https://www.facebook.com/mohaiminulislam.nafiz" className="hover:underline">Facebook/</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Instagram className="w-5 h-5 mr-2 text-blue-500" />
                <a href="https://instagram.com/yourprofile" className="hover:underline">Instagram</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <Github className="w-5 h-5 mr-2 text-blue-500" />
                <a href="https://github.com/yourprofile" className="hover:underline">Github</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <a href="https://maps.app.goo.gl/H36yc1RBfvhPXweC8" className="hover:underline">Location</a>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
