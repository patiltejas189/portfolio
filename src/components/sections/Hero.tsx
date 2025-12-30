import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
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

  const floatingShapes = [
    { id: 1, top: "20%", left: "5%", size: "w-16 h-16", color: "bg-accent-400/20 dark:bg-accent-600/20", animation: { y: [0, -20, 0], duration: 8 } },
    { id: 2, top: "70%", left: "10%", size: "w-10 h-10", color: "bg-primary-400/20 dark:bg-primary-600/20", animation: { y: [0, 15, 0], duration: 6 } },
    { id: 3, top: "30%", right: "8%", size: "w-12 h-12", color: "bg-slate-400/20 dark:bg-slate-600/20", animation: { y: [0, -15, 0], duration: 7 } },
    { id: 4, bottom: "15%", right: "5%", size: "w-14 h-14", color: "bg-accent-400/20 dark:bg-accent-600/20", animation: { y: [0, 20, 0], duration: 9 } },
  ];

  // Dynamic years of experience
  const experienceYears = new Date().getFullYear() - 2024;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 bg-primary-200/30 dark:bg-primary-800/20 rounded-full filter blur-3xl"
          style={{ y }}
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-300/20 dark:bg-accent-700/10 rounded-full filter blur-3xl"
          style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating shapes */}
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute rounded-full ${shape.size} ${shape.color} filter blur-lg`}
            style={{ top: shape.top, left: shape.left, right: shape.right }}
            animate={{ y: shape.animation.y }}
            transition={{ duration: shape.animation.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Particle background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-1 h-1 bg-accent-500/30 dark:bg-accent-400/30"
            style={{ top: `${i * 5 + 5}%`, left: `${i * 4 + 10}%` }}
            animate={{ y: [0, (i % 2 === 0 ? -5 : 5), 0], x: [0, (i % 2 === 0 ? -5 : 5), 0] }}
            transition={{ duration: 5 + (i % 3) * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p className="text-accent-600 dark:text-accent-400 font-semibold mb-4 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <motion.span className="inline-block" animate={{ rotate: [0, 10, -10, 0] }} transition={{ delay: 0.5, duration: 0.5 }}>👋</motion.span>{" "}
              Hi, my name is
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-500 to-primary-600 dark:from-accent-400 dark:to-primary-500">Tejas Patil</span>
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-4xl font-semibold text-slate-700 dark:text-slate-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span className="inline-block" animate={{ rotate: [0, 5, -5, 0] }} transition={{ delay: 0.8, duration: 0.5 }}>💻</motion.span>{" "}
              I Am a Software Developer
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I specialize in crafting <span className="font-semibold text-accent-600 dark:text-accent-400">responsive</span>,{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">high-performance</span> web applications with clean code and modern technologies. Passionate about solving complex problems and creating intuitive user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <motion.a href="#projects" className="btn btn-primary shadow-lg hover:shadow-accent-500/30 bg-gradient-to-r from-accent-500 to-primary-600 hover:from-accent-600 hover:to-primary-700" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>View My Work</motion.a>
              <motion.a href="#contact" className="btn btn-outline border-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>Get In Touch</motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="mt-8 flex gap-6 justify-center md:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <motion.a href="https://github.com/patiltejas189" target="_blank" rel="noopener noreferrer" className="social-icon" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} aria-label="Github"><Github size={24} /></motion.a>
              <motion.a href="https://www.linkedin.com/in/tejas-patil-49031816b" target="_blank" rel="noopener noreferrer" className="social-icon" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} aria-label="LinkedIn"><Linkedin size={24} /></motion.a>
              <motion.a href="mailto:patiltejas189@gmail.com" className="social-icon" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} aria-label="Email"><Mail size={24} /></motion.a>
              <motion.a href="/TejasPatil.pdf" download className="social-icon" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} aria-label="Resume"><FileText size={24} /></motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Tilt options={defaultTiltOptions}>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                  <motion.img src="/TejasPatil.png" alt="Tejas Patil" className="w-full h-full object-cover" whileHover={{ scale: 1.03 }} />
                </div>
                {/* Years Experience */}
                <motion.div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border-2 border-accent-400" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-500 to-primary-600 flex items-center justify-center text-white font-bold">{experienceYears}+</div>
                  <div className="absolute -bottom-2 -right-2 text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">Years Exp</div>
                </motion.div>
                {/* Role Label */}
                <motion.div className="absolute -top-5 -left-5 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border-2 border-primary-400" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">Full Stack Dev</div>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <AnimatePresence>
          <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" style={{ opacity }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
            <motion.a href="#about" className="flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-primary-400" whileHover={{ scale: 1.2 }} aria-label="Scroll down">
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown size={24} />
              </motion.div>
              <motion.span className="text-sm mt-2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}>Scroll Down</motion.span>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
