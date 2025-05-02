import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillCardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const technicalSkills = [
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "PHP", icon: "🐘" },
    { name: "HTML & CSS", icon: "🖥️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗃️" },
    { name: "Docker", icon: "🐳" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "👥" },
    { name: "Adaptability", icon: "🔄" },
  ];

  const languages = [
    { name: "English", flag: "🇬🇧", proficiency: "Fluent" },
    { name: "Marathi", flag: "🇮🇳", proficiency: "Native" },
    { name: "Hindi", flag: "🇮🇳", proficiency: "Fluent" },
    { name: "Gujarati", flag: "🇮🇳", proficiency: "Conversational" },
  ];

  const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
    <motion.div variants={itemVariants} className="mb-4" whileHover="hover">
      <motion.div
        variants={skillCardVariants}
        className="flex flex-col p-4 bg-white dark:bg-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-600"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );

  const LanguageItem = ({
    name,
    flag,
    proficiency,
  }: {
    name: string;
    flag: string;
    proficiency: string;
  }) => (
    <motion.div variants={itemVariants} whileHover="hover">
      <motion.div
        variants={skillCardVariants}
        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-600"
      >
        <div className="text-3xl">{flag}</div>
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200">
            {name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {proficiency}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <motion.div
        ref={ref}
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-center">
            <span className="relative inline-block">
              <span className="relative z-10">My Skills</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 dark:bg-blue-900 opacity-60 -z-0"></span>
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I've developed a diverse set of skills throughout my career that I
            bring to every project. Here's what I can offer:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 flex items-center gap-3">
              <span className="text-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                💻
              </span>
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 flex items-center gap-3">
                <span className="text-3xl bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
                  🧠
                </span>
                <span>Soft Skills</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 flex items-center gap-3">
                <span className="text-3xl bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                  🌐
                </span>
                <span>Languages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <LanguageItem key={lang.name} {...lang} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
