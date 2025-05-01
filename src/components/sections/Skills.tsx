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
      transition: { duration: 0.5 },
    },
  };

  const technicalSkills = [
    { name: "Java", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 92 },
    { name: "PHP", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Docker", level: 70 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 95 },
    { name: "Adaptability", level: 88 },
  ];

  const SkillBar = ({ name }: { name: string }) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {name}
        </span>
      </div>
      <hr className="border-slate-300 dark:border-slate-600" />
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800"
    >
      <motion.div
        ref={ref}
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-center">My Skills</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            I've developed a diverse set of skills throughout my career. Here's
            a snapshot of my technical proficiency and soft skills that I bring
            to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              Technical Skills
            </h3>
            <div>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} />
              ))}
            </div>
          </motion.div>

          <div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Soft Skills
              </h3>
              <div className="mb-12">
                {softSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { code: "EN", name: "English", level: "Fluent" },
                  { code: "MR", name: "Marathi", level: "Mother Tongue" },
                  { code: "HI", name: "Hindi", level: "Fluent" },
                  { code: "GU", name: "Gujarati", level: "Conversational" },
                ].map((lang) => (
                  <div key={lang.code} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-900 dark:text-primary-100 font-bold text-lg">
                      {lang.code}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        {lang.name}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {lang.level}
                      </p>
                    </div>
                  </div>
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
