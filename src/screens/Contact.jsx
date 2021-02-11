import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import ContactUsForm from "../components/ContactUsForm";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <header className="header">
          <h1 className="logo">
            <a href="/">HM</a>
          </h1>
          <a href="/contact" className="contact-link">
            Contact Me
          </a>
        </header>
      </div>
      <div>
        <ContactUsForm />
      </div>
      <div className="social-links">
        <a
          href="https://github.com/HunterMott"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/huntermott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1PaMworqazqZXScpl3mw-xYM2phHTO6_M/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Contact;
