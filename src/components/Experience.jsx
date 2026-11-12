import React from "react";
import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaDownload,
} from "react-icons/fa";

const Experience = () => {

  const timeline = [
    {
      type: "Education",
      icon: <FaGraduationCap />,
      date: "2023 — 2027",
      title: "Data Science Student",
      place: "Faculty of Computers & Information",
      description:
        "Studying Data Science with a strong focus on programming, data structures, algorithms, machine learning and software development.",
    },

    {
      type: "Experience",
      icon: <FaBriefcase />,
      date: "2025 — Present",
      title: "Front-End Developer",
      place: "Personal & Academic Projects",
      description:
        "Building responsive and interactive web applications using React, JavaScript, modern CSS and REST APIs.",
    },

    {
      type: "Training",
      icon: <FaCertificate />,
      date: "2025",
      title: "Digital Egypt Pioneers Initiative",
      place: "DEPI",
      description:
        "Completed practical training focused on software development, teamwork, real-world projects and professional development.",
    },
  ];

  return (
    <section
      id="experience"
      className="experience"
    >

      <div className="experience-container">

        {/* HEADER */}

        <motion.div
          className="section-heading"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <span>
            MY JOURNEY
          </span>

          <h2>
            Education &{" "}
            <strong>
              experience.
            </strong>
          </h2>

        </motion.div>


        {/* TIMELINE */}

        <div className="timeline">

          {timeline.map((item, index) => (

            <motion.div
              className="timeline-item"
              key={`${item.title}-${index}`}

              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              {/* ICON */}

              <div className="timeline-dot">
                {item.icon}
              </div>


              {/* CARD */}

              <div className="timeline-card">

                <span className="timeline-type">
                  {item.type}
                </span>

                <span className="timeline-date">
                  {item.date}
                </span>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.place}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* CV */}

        <motion.div
          className="cv-section"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="cv-text">

            <span>
              MY RESUME
            </span>

            <h3>
              Want to know more{" "}
              <strong>
                about me?
              </strong>
            </h3>

            <p>
              Download my CV to learn more about
              my education, skills, projects and
              professional experience.
            </p>

          </div>


          <a
            href="/cv/Omar-Ahmed-CV.pdf"
            download
            className="cv-button"
          >

            <FaDownload size={14} />

            Download My CV

          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default Experience;