import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Server,
  Globe,
  Database,
  Cpu,
  Layers,
  Terminal,
  Smartphone,
} from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible web applications with React, TypeScript, and modern CSS frameworks.",
      icon: <Code size={36} className="text-accent-500" />,
    },
    {
      title: "Backend Systems",
      description:
        "Creating robust, scalable server-side applications using Node.js, PHP, Java, and Python.",
      icon: <Server size={36} className="text-accent-500" />,
    },
    {
      title: "Full Stack Solutions",
      description:
        "End-to-end web applications with seamless integration between frontend and backend services.",
      icon: <Layers size={36} className="text-accent-500" />,
    },
    {
      title: "Database Architecture",
      description:
        "Designing efficient database schemas and implementing optimized data storage solutions.",
      icon: <Database size={36} className="text-accent-500" />,
    },
    {
      title: "API Development",
      description:
        "Building RESTful and GraphQL APIs with proper documentation and version control.",
      icon: <Terminal size={36} className="text-accent-500" />,
    },
    {
      title: "Mobile Responsive",
      description:
        "Ensuring applications work flawlessly across all device sizes and platforms.",
      icon: <Smartphone size={36} className="text-accent-500" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Improving load times and responsiveness through code optimization and caching.",
      icon: <Cpu size={36} className="text-accent-500" />,
    },
    {
      title: "Web Accessibility",
      description:
        "Implementing WCAG standards to make applications usable by everyone.",
      icon: <Globe size={36} className="text-accent-500" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white dark:bg-slate-900 py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent-500 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary-500 blur-xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* About Me Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="inline-block text-accent-500 font-medium mb-3 tracking-wider">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Crafting Digital Experiences
          </h2>
          <div className="w-20 h-1.5 bg-accent-500 mx-auto mb-8 rounded-full"></div>
          <motion.p
            variants={fadeInVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            As a passionate software developer with 6+ months of hands-on
            experience, I specialize in building responsive web applications
            with <span className="text-accent-500 font-medium">React</span>,
            robust backends with{" "}
            <span className="text-accent-500 font-medium">PHP & Java</span>, and
            efficient databases with
            <span className="text-accent-500 font-medium"> SQL</span>. I
            approach each project with a focus on clean code, performance, and
            user experience.
          </motion.p>
        </motion.div>

        {/* Journey + Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              My <span className="text-accent-500">Development</span> Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
              My journey in tech began with a fascination for how things work
              behind the screen. Starting with front-end development, I quickly
              expanded to full-stack as I wanted to understand the complete
              picture of web applications.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
              Holding a{" "}
              <span className="font-medium text-primary-600 dark:text-primary-400">
                Bachelor's degree in Information Technology
              </span>
              , I combine formal education with continuous self-learning to stay
              at the forefront of web development. I'm particularly interested
              in the intersection of design and engineering—where beautiful
              interfaces meet robust functionality.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                React Ecosystem
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                PHP Frameworks
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                Java Spring
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                SQL Databases
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 relative h-80 lg:h-full"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-200 dark:bg-accent-800 rounded-xl z-0"></div>
            <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2940&auto=format&fit=crop"
                alt="Developer working"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white text-xl font-bold mb-1">
                    Tejas Patil
                  </h4>
                  <p className="text-accent-300 font-medium">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-slate-800 dark:text-white mb-4"
          >
            My <span className="text-accent-500">Expertise</span>
          </motion.h3>
          <motion.p
            variants={fadeInVariants}
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-12"
          >
            I offer comprehensive development services tailored to bring your
            digital ideas to life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-accent-500/30"
            >
              <div className="w-16 h-16 mb-6 rounded-lg bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
