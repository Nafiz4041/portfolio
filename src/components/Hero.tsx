import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const imageAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        type: 'spring',
        stiffness: 300,
        rotate: {
          duration: 0.5,
          repeat: 0
        }
      }
    }
  };

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
            whileHover={{ scale: 1.02 }}
          >
            MD. MOHAIMINUL ISLAM NAFIZ
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            BSc in CSE Student & Former Operations Coordinator
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span 
              className="flex items-center"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</span>
            </motion.span>
            
            <motion.span 
              className="flex items-center"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">mohaiminnafiz13@gmail.com</span>
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 group"
          variants={imageAnimation}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          />
          <img
            src="/images/profile.jpg"  // Use local image path
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-blue-500"
            style={{ objectPosition: 'top center' }}
          />
          <motion.div
            className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300 -z-10"
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-2 rounded-full shadow-md cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 90,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <ExternalLink className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;