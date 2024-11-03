import React from 'react';
import { Facebook, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#education" className="hover:underline">Education</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:mohaiminnafiz13@gmail.com" className="hover:underline">mohaiminnafiz13@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+8801857316721" className="hover:underline">01857316721</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <a href="https://maps.app.goo.gl/H36yc1RBfvhPXweC8" className="hover:underline">Location</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/yourprofile" className="hover:underline">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/yourprofile" className="hover:underline">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="hover:underline">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/yourprofile" className="hover:underline">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;