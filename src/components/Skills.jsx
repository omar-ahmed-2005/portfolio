import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React",
      level: 90,
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      level: 88,
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "HTML5",
      level: 95,
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      level: 92,
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
    {
      name: "Bootstrap",
      level: 85,
      icon: <SiBootstrap />,
      color: "#7952B3",
    },
    {
      name: "Git",
      level: 82,
      icon: <FaGitAlt />,
      color: "#F05032",
    },
    {
      name: "GitHub",
      level: 85,
      icon: <FaGithub />,
      color: "#ffffff",
    },
    {
      name: "Figma",
      level: 75,
      icon: <SiFigma />,
      color: "#F24E1E",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        {/* Heading */}
        <motion.div
          className="section-heading skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>MY SKILLS</span>

          <h2>
            Tools I use to
            <strong> bring ideas to life.</strong>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="skill-top">

                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <span className="skill-percentage">
                  {skill.level}%
                </span>

              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>

                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.08,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="skills-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span></span>
          <p>
            Always learning. Always building. Always improving.
          </p>
          <span></span>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;