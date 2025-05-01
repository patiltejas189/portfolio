import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Tilt } from "react-tilt";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 bg-primary-200/30 dark:bg-primary-800/20 rounded-full filter blur-3xl"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-300/20 dark:bg-accent-700/10 rounded-full filter blur-3xl"
          style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-accent-600 dark:text-accent-400 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tejas Patil
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-4xl font-semibold text-slate-700 dark:text-slate-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I Am a Software Developer
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I specialize in building robust, user-focused applications with
              clean code and modern technologies. I enjoy solving complex
              problems and continuously learning to stay ahead in the fast-paced
              world of software development.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="https://github.com/patiltejas189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                aria-label="Github"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tejas-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt options={defaultTiltOptions}>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                  <img
                    src="https://softprosolutions.com//admin_assets/img/blog1.jpg"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          style={{ opacity }}
        >
          <motion.a
            href="#about"
            className="animate-bounce text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-primary-400"
            whileHover={{ scale: 1.2 }}
            aria-label="Scroll down"
          >
            <ArrowDown />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
