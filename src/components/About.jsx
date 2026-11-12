import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Database,
} from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <Code2 size={21} />,
      title: "Clean Code",
      text: "I focus on writing clean, reusable and maintainable React components.",
    },
    {
      icon: <Palette size={21} />,
      title: "Modern UI",
      text: "I build modern interfaces with attention to details, spacing and visual hierarchy.",
    },
    {
      icon: <Rocket size={21} />,
      title: "Performance",
      text: "I care about responsive experiences, smooth interactions and fast websites.",
    },
    {
      icon: <Database size={21} />,
      title: "Data & APIs",
      text: "My Data Science background helps me understand APIs, data and backend communication.",
    },
  ];

  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* HEADING */}

        <motion.div
          className="section-heading"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.7,
          }}
        >
          <span>ABOUT ME</span>

          <h2>
            Turning ideas into
            <br />
            <strong>digital experiences.</strong>
          </h2>
        </motion.div>


        {/* CONTENT */}

        <div className="about-content">

          {/* LEFT SIDE */}

          <motion.div
            className="about-text"

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
              amount: 0.2,
            }}

            transition={{
              duration: 0.7,
            }}
          >

            <p>
              I'm <strong>Omar Ahmed</strong>, a Front-End
              Developer passionate about building modern,
              responsive and interactive web experiences.
            </p>

            <p>
              I work mainly with{" "}
              <strong>React and JavaScript</strong>,
              turning designs and ideas into functional
              interfaces that feel smooth and intuitive.
            </p>

            <p>
              Alongside Front-End development, I'm studying
              <strong> Data Science</strong>, which gives me
              a different perspective when working with
              data, APIs and intelligent applications.
            </p>


            <div className="about-highlight">

              <p>
                "I don't just want to build websites.
                I want to build experiences people remember."
              </p>

            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <div className="about-cards">

            {cards.map((card, index) => (

              <motion.div
                className="about-card"
                key={card.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -6,
                }}
              >

                <div className="about-card-icon">
                  {card.icon}
                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;