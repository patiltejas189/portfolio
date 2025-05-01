import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Globe, Database } from "lucide-react";

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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible web applications with modern frameworks like React.",
      icon: <Code size={32} className="text-accent-600" />,
    },
    {
      title: "Backend Development",
      description:
        "Creating robust, scalable server-side applications using PHP, JAVA, and other technologies.",
      icon: <Server size={32} className="text-accent-600" />,
    },
    {
      title: "Full Stack Solutions",
      description:
        "Delivering end-to-end web applications with seamless integration between frontend and backend.",
      icon: <Globe size={32} className="text-accent-600" />,
    },
    {
      title: "Database Design",
      description:
        "Designing efficient database schemas and implementing data storage solutions.",
      icon: <Database size={32} className="text-accent-600" />,
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-slate-900 py-16 md:py-24">
      <motion.div
        ref={ref}
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-center">About Me</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            As a motivated software developer with 6+ months of hands-on
            experience, I’m driven by the challenge of turning ideas into
            functional, elegant code. I specialize in React, PHP, Java, SQL,
            with a focus on building responsive web applications and solving
            problems through clean, efficient solutions. Eager to learn,
            collaborate, and grow—one line of code at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I started my career as a front-end developer, gradually expanding
              my skills to become a versatile full-stack developer. Over the
              months, I've worked with various technologies and frameworks,
              always staying up-to-date with the latest industry trends.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I hold a Bachelor's degree in Information Technology and am
              passionate about continuous learning in software development. My
              approach centers on writing clean, maintainable code and building
              intuitive user experiences—whether through thoughtful
              problem-solving or iterative improvements.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              When I'm not coding, you can find me hiking in the mountains,
              reading tech blogs, or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-md z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 dark:bg-accent-800 rounded-md z-0"></div>
            <div className="relative z-10 w-full h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
                alt="Working at computer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-primary-900 dark:text-primary-100 text-center mb-12"
        >
          What I Do
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 flex flex-col items-center text-center hover:translate-y-[-4px]"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
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
