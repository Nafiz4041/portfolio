import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/mohaiminulislam.nafiz?mibextid=ZbWKwL',
      label: 'Facebook',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/mohaiminulislamnafiz?igsh=MWVhYnlveXMyc2o4NA==',
      label: 'Instagram',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/mohaiminul-nafiz/',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/Nafiz4041',
      label: 'GitHub',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:mohaiminnafiz13@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: 'https://wa.me/01857316721',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-center"
          >
            © {new Date().getFullYear()} MD. MOHAIMINUL ISLAM NAFIZ. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;