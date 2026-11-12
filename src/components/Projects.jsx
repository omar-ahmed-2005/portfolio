import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      number: "01",
      category: "Web Application",
      title: "CINERA",
      description:
        "A modern movie discovery platform where users can explore movies, search for titles, and discover detailed movie information.",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80",
      technologies: ["React", "JavaScript", "API", "CSS"],
      github: "https://github.com/omar-ahmed-2005/CINERA",
      live: "https://cinera-ten.vercel.app/",
    },

    {
      number: "02",
      category: "Weather Application",
      title: "Weather Chat",
      description:
        "An interactive weather application that combines real-time weather information with an AI-powered conversational experience.",
      image:
        "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1400&q=80",
      technologies: ["React", "Node.js", "Express", "API"],
      github: "https://github.com/",
      live: "https://example.com/",
    },

    {
      number: "03",
      category: "Education Platform",
      title: "E-Learning",
      description:
        "A responsive educational platform designed to provide students with an organized and engaging online learning experience.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1400&q=80",
      technologies: ["React", "JavaScript", "CSS", "REST API"],
      github: "https://github.com/omar-ahmed-2005/elearning-platform",
      live: "https://elearning-platform-kohl.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        {/* SECTION HEADER */}

        <motion.div
          className="section-heading projects-heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>MY WORK</span>

          <h2>
            Selected projects
            <strong> I've built.</strong>
          </h2>
        </motion.div>


        {/* PROJECTS */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.title}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >

              {/* IMAGE */}

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />

                <div className="project-image-overlay"></div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              {/* CONTENT */}

              <div className="project-content">

                <div className="project-meta">
                  {project.category}
                </div>


                <div className="project-title-row">

                  <h3>
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={28}
                    className="project-arrow"
                  />

                </div>


                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>


                {/* LINKS */}

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-live"
                  >
                    <FiExternalLink size={17} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* MORE PROJECTS */}

        <motion.div
          className="projects-more"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >

          <p>
            Want to see more of my work?
          </p>

          <a
            href="https://github.com/omar-ahmed-2005"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            <FaGithub size={18} />
            Visit My GitHub
            <ArrowUpRight size={17} />
          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;