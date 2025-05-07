import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-primary shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-dark-text">
                Rutu Bhanderi
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#home" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#projects" label="Projects" />
            
            <NavLink href="#contact" label="Contact" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-text focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-secondary mt-2">
          <MobileNavLink href="#home" label="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#about" label="About" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#projects" label="Projects" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="#contact" label="Contact" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-dark-text"
    >
      {label}
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-dark-text"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Navbar;
