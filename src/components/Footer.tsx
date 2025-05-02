import React from "react";
import { Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/patiltejas189",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/tejas-patil",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:patiltejas189@gmail.com",
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold text-primary-900 dark:text-primary-100"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white shadow-lg"
                >
                  <Sparkles size={18} className="text-yellow-200" />
                </motion.div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-primary-600 dark:from-accent-400 dark:to-primary-400">
                  Portfolio
                </span>
              </motion.div>
            </a>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Software Developer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; {currentYear} Tejas Patil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
