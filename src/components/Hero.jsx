import React from "react";

import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";


const Hero = () => {

  return (

    <section
      id="home"
      className="hero"
    >

      {/* Background */}

      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>

      <div className="hero-glow hero-glow-two"></div>


      {/* Content */}

      <div className="hero-content">


        {/* Badge */}

        <motion.div
          className="hero-badge"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <span className="status-dot"></span>

          Available for opportunities

        </motion.div>


        {/* Name */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.15,
          }}

        >

          Hi, I'm{" "}

          <span className="hero-name">
            Omar Ahmed
          </span>

        </motion.h1>


        {/* Job */}

        <motion.h2

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.3,
          }}

        >

          Front-End Developer

        </motion.h2>


        {/* Description */}

        <motion.p

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.45,
          }}

        >

          I build modern, responsive and interactive
          web experiences using React and JavaScript.

        </motion.p>


        {/* Buttons */}

        <motion.div
          className="hero-buttons"

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        >

          <a
            href="#projects"
            className="primary-button"
          >

            View My Work

            <ArrowRight size={18} />

          </a>


          <a
            href="/cv/Omar-Ahmed-CV.pdf"
            download
            className="secondary-button"
          >

            Download CV

            <Download size={18} />

          </a>

        </motion.div>


        {/* Social Media */}

        <motion.div
          className="hero-socials"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >

          <a
            href="https://github.com/omar-ahmed-2005"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>


          <a
            href="https://www.linkedin.com/in/omar-ahmed-536838367/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>


          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=omarabonaka@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

        </motion.div>

      </div>


      {/* Scroll */}

      <motion.a
        href="#about"
        className="scroll-indicator"

        animate={{
          y: [0, 8, 0],
        }}

        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <span>
          Scroll
        </span>

        <ArrowDown size={18} />

      </motion.a>

    </section>
  );
};

export default Hero;