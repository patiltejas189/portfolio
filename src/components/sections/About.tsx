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
      title: "Backend Development",
      description:
        "Building robust, scalable server-side applications using Java, Spring Boot, and REST APIs.",
      icon: <Server size={36} className="text-accent-500" />,
    },
    {
      title: "Database Design",
      description:
        "Designing efficient database schemas and implementing optimized queries with SQL Server and MySQL.",
      icon: <Database size={36} className="text-accent-500" />,
    },
    {
      title: "API Development",
      description:
        "Developing RESTful APIs with proper validations, exception handling, and integration with frontend applications.",
      icon: <Terminal size={36} className="text-accent-500" />,
    },
    {
      title: "Microservices Architecture",
      description:
        "Building modular and scalable applications with microservices and Docker containers.",
      icon: <Layers size={36} className="text-accent-500" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Improving application efficiency and reducing backend issues through optimized code and database queries.",
      icon: <Cpu size={36} className="text-accent-500" />,
    },
    {
      title: "Web Integration",
      description:
        "Integrating backend services with modern frontend applications built using React.js.",
      icon: <Code size={36} className="text-accent-500" />,
    },
    {
      title: "Responsive & Scalable Solutions",
      description:
        "Ensuring applications perform reliably across devices, supporting business growth and user demands.",
      icon: <Smartphone size={36} className="text-accent-500" />,
    },
    {
      title: "Web Standards & Accessibility",
      description:
        "Following coding best practices, security standards, and accessibility guidelines for professional software development.",
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
            Crafting Scalable Backend Solutions
          </h2>
          <div className="w-20 h-1.5 bg-accent-500 mx-auto mb-8 rounded-full"></div>
          <motion.p
            variants={fadeInVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            I am a passionate <span className="text-accent-500 font-medium">Java Developer</span> with 1.5+ years of experience building backend systems using <span className="text-accent-500 font-medium">Java</span> and <span className="text-accent-500 font-medium">Spring Boot</span>. I specialize in creating RESTful APIs, optimized database solutions, and scalable applications that power modern web systems. I also integrate these services with frontend frameworks like <span className="text-accent-500 font-medium">React.js</span> for seamless user experiences.
          </motion.p>
        </motion.div>

        {/* Journey + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              My <span className="text-accent-500">Development</span> Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
              I started my career focusing on backend development, building robust applications with Java and Spring Boot. Over time, I also gained experience integrating these backends with modern frontends to deliver full-featured applications.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
              With a <span className="font-medium text-primary-600 dark:text-primary-400">Bachelor's degree in Information Technology</span> and hands-on experience in professional projects, I aim to create clean, maintainable, and scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                Java
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                Spring Boot
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                RESTful APIs
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                SQL Server / MySQL
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                React.js (integration)
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">
                Docker
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
                    Java Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise / Services */}
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
            I focus on backend architecture, API development, and full-stack integration to deliver reliable, scalable software solutions.
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
