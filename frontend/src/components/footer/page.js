import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">Guatapé, Colombia</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Rincones de Guatapé. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-white text-sm">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white text-sm">About</a>
            <a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
