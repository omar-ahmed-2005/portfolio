import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
    >

      <a
        href="#home"
        className="logo"
      >
        OMAR<span>.</span>
      </a>


      <div className="nav-links">

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
          >
            {link.name}
          </a>
        ))}

      </div>


      <a
        href="#contact"
        className="nav-button"
      >
        Let's Talk
      </a>


      <button
        type="button"
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >

        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}

      </button>


      <AnimatePresence>

        {isOpen && (
          <motion.div
            className="mobile-menu"

            initial={{
              opacity: 0,
              y: -10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -10,
            }}
          >

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}


            <a
              href="#contact"
              className="mobile-contact"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;