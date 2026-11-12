import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailto = `mailto:your@email.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="contact"
    >

      <div className="contact-container">

        {/* HEADER */}

        <motion.div
          className="section-heading contact-heading"

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
            GET IN TOUCH
          </span>

          <h2>
            Let's build something{" "}
            <strong>
              great together.
            </strong>
          </h2>

        </motion.div>


        {/* CONTENT */}

        <div className="contact-content">


          {/* LEFT */}

          <motion.div
            className="contact-info"

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
            }}
          >

            <p className="contact-intro">
              Have a project in mind, a job opportunity,
              or just want to say hello?
              Feel free to reach out.
            </p>


            {/* EMAIL */}

            <a
              href="mailto:your@email.com"
              className="contact-info-item"
            >

              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>Email</span>

                <strong>
                  omarabonaka@gmail.com
                </strong>
              </div>

            </a>


            {/* PHONE */}

            <a
              href="tel:+201004797646"
              className="contact-info-item"
            >

              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <span>Phone</span>

                <strong>
                  +201004797646
                </strong>
              </div>

            </a>


            {/* LOCATION */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>

                <strong>
                  Egypt
                </strong>
              </div>

            </div>


            {/* SOCIALS */}

            <div className="contact-socials">

              <a
                href="https://github.com/omar-ahmed-2005"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/omar-ahmed-536838367/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/eng_omar_ahmed_25_03/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>


          {/* FORM */}

          <motion.form
            className="contact-form"

            onSubmit={handleSubmit}

            initial={{
              opacity: 0,
              x: 40,
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
            }}
          >

            {/* NAME */}

            <div className="form-group">

              <label>
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Omar Ahmed"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* SUBJECT */}

            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Project opportunity"
                value={formData.subject}
                onChange={handleChange}
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="send-button"
            >

              {sent
                ? "Message Ready!"
                : "Send Message"
              }

              <FiSend />

            </button>

          </motion.form>

        </div>


        {/* FOOTER */}

        <footer className="footer">

          <div className="footer-line"></div>

          <div className="footer-content">

            <p>
              © {new Date().getFullYear()} Omar Ahmed.
              All rights reserved.
            </p>

            <p>
              Designed & Built with React
            </p>

          </div>

        </footer>

      </div>

    </section>
  );
};

export default Contact;