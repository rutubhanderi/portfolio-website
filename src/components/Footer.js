import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black dark:from-dark-secondary dark:to-dark-primary text-white py-8 transition-colors duration-300 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 dark:from-dark-accent dark:via-dark-highlight dark:to-primary-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <p className="text-gray-400 dark:text-dark-muted text-sm">
            © {new Date().getFullYear()} Rutu Bhanderi. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
