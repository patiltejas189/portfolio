import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-primary-900 dark:text-primary-100"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-md bg-accent-600 flex items-center justify-center text-white">
                TP
              </div>
              <span>Tejas Patil</span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="/Tejas_Resume.pdf"
              download
              className="btn btn-primary flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="btn btn-primary w-full flex items-center justify-center gap-2 mt-4"
            onClick={(e) => e.preventDefault()}
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
