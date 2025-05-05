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
        "A responsive website for Dharavi Dev Mandir, built to provide information about temple events, history, and donation options.",
      image:
        "https://scontent.fbom48-1.fna.fbcdn.net/v/t39.30808-6/481666427_937811248549198_7506744888172156669_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t-ICv9n8XioQ7kNvwFfa_8r&_nc_oc=Adlg5-M-SuCokCSeywJE_SoqU8j0yu7E2-3KorlZMWKULEC_RCVEGXtPMHG-kxu78E4&_nc_zt=23&_nc_ht=scontent.fbom48-1.fna&_nc_gid=SMlVK9VFSsz72OlSgTVImA&oh=00_AfHs6sWUh6RFVm8CFeVRqEaeJRDH_IecRb3EBTnw_vdvkA&oe=68196169", // You can replace this with a temple-related image URL
      tags: ["Html", "Css", "Php", "Sql"],
      liveUrl: "https://dharavidevimandir.org", // Replace with actual live URL if available
      githubUrl: "#", // Replace with GitHub repo URL if available
    },

    {
      id: 2,
      title: "TaskPro - Task Management System",
      description:
        "A productivity application for managing tasks, projects, and team collaboration.",
      image: "/task.jpg",
      tags: ["Html5", "Css3", "Php", "Sql", "backend"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with dark/light mode.",
      image:
        "https://img.freepik.com/free-vector/it-job-concept-illustration_114360-27000.jpg?t=st=1746118531~exp=1746122131~hmac=08fc2beb8190832bec036a716b2834aafcf82a55529cf7db28f9172dcf47eb33&w=826",
      tags: ["React", "Tailwind CSS", "frontend"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "CuisinePro - Food Ordering System",
      description:
        "A comprehensive food ordering platform that enables users to browse menus, place orders, and track deliveries in real-time. Built with a modern tech stack for both customer and admin interfaces.",
      image:
        "https://img.freepik.com/premium-vector/isometric-online-shopping-illustration-with-trolley-full-goods-smartphone-3d_1284-63640.jpg",
      tags: ["React", "Tailwind CSS", "Spring Boot", "Sql", "backend"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "SoftPro Solutions Website",
      description:
        "A professional website developed for SoftPro Solutions, a company that provides school management systems and admission application platforms. The site showcases their services, features, and client support offerings.",
      image: "/comp.png",
      tags: ["Html5", "Css3", "Php", "Sql"],
      liveUrl: "https://softprosolutions.com",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "TicTacToe",
      description:
        "A professional website developed for SoftPro Solutions, a company that provides school management systems and admission application platforms. The site showcases their services, features, and client support offerings.",
      image: "/comp.png",
      tags: ["React", "Css3"],
      liveUrl: "https://gametictactoereactapp.netlify.app/",          
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

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
            Here are some of my recent projects. Each one represents a unique
            challenge and demonstrates different aspects of my technical skills
            and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "all"
                ? "bg-primary-700 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "frontend"
                ? "bg-primary-700 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "backend"
                ? "bg-primary-700 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Backend
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-slate-800/80 hover:bg-slate-900 p-2 rounded-full transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-primary-700/80 hover:bg-primary-800 p-2 rounded-full transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} />
                    </a>
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
                  {project.tags.map(
                    (tag, index) =>
                      [
                        "React",
                        "Html5",
                        "Css3",
                        "Html",
                        "MongoDB",
                        "JavaScript",
                        "Php",
                        "Java",
                        "Css",
                        "Spring Boot",
                        "Tailwind CSS",
                        "Sql",
                      ].includes(tag) && (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                        >
                          {tag}
                        </span>
                      )
                  )}
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
