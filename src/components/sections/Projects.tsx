import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

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

  const projects = [
    {
      id: 1,
      title: "Dharavi Devi Mandir Website",
      description:
        "A responsive website providing information about Dharavi Devi Mandir, including events, history, and donation options.",
      image: "/dharavidevi.png",
      tags: ["HTML", "CSS", "JavaScript", "SQL"],
      liveUrl: "https://dharavidevimandir.org",
      githubUrl: "#",
      type: "frontend",
    },
    {
      id: 2,
      title: "TaskPro - Task Management System",
      description:
        "A productivity application to manage tasks, projects, and team collaboration with backend logic implemented in Java and Spring Boot.",
      image: "/task.jpg",
      tags: ["Java", "Spring Boot", "SQL", "REST API", "Backend"],
      liveUrl: "#",
      githubUrl: "#",
      type: "backend",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing projects and skills with dark/light mode, built with React.js and Tailwind CSS.",
      image:
        "https://img.freepik.com/free-vector/it-job-concept-illustration_114360-27000.jpg?w=826",
      tags: ["React", "Tailwind CSS", "Frontend"],
      liveUrl: "#",
      githubUrl: "#",
      type: "frontend",
    },
    {
      id: 4,
      title: "CuisinePro - Food Ordering System",
      description:
        "A full-featured food ordering platform built with Java, Spring Boot, React.js, and MySQL. Supports menu browsing, order placement, and tracking.",
      image:
        "https://img.freepik.com/premium-vector/isometric-online-shopping-illustration-with-trolley-full-goods-smartphone-3d_1284-63640.jpg",
      tags: ["Java", "Spring Boot", "React", "MySQL", "Backend"],
      liveUrl: "#",
      githubUrl: "#",
      type: "backend",
    },
    {
      id: 5,
      title: "SoftPro Solutions Website",
      description:
        "Company website for SoftPro Solutions, highlighting services like school management systems and client support features.",
      image: "/comp.png",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      liveUrl: "https://softprosolutions.com",
      githubUrl: "#",
      type: "frontend",
    },
    {
    id: 6,
    title: "VisitantPro - Visitor Management System",
    description:
      "A secure visitor management system developed with Java and Spring Boot, supporting visitor entry/exit workflows and reporting functionalities.",
    image: "/visitantpro.png", // Replace with your project image
    tags: ["Java", "Spring Boot", "SQL Server", "REST API", "Backend"],
    liveUrl: "#",
    githubUrl: "#",
    type: "backend",
  },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-white dark:bg-slate-900"
    >
      <motion.div
        ref={ref}
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-center">My Projects</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Here are some of my recent projects, highlighting my skills in
            Java, Spring Boot, React.js, and full-stack application development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["all", "frontend", "backend"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === f
                  ? "bg-primary-700 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-md"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-slate-800/80 hover:bg-slate-900 p-2 rounded-full transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-primary-700/80 hover:bg-primary-800 p-2 rounded-full transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
