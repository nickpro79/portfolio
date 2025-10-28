import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero({ name, title, about }) {
  return (
    <section id="hero" className="hero-section text-center text-white py-5">
      <div className="container py-5">
        <h1 className="fw-bold display-5">{name}</h1>
        <p className="lead mb-3">{title}</p>
        <p className="w-75 mx-auto mb-4">{about}</p>

        <a
          href="/Nikhil_Praveen_Resume.pdf"
          download
          className="btn btn-light mt-3 mb-4"
        >
          📄 Download Resume
        </a>

        {/* Contact Section inside Hero */}
        <div className="contact-hero mt-4">
          <h5 className="fw-semibold mb-3">Get in Touch</h5>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a
              href="mailto:nikhilpraveen7777@gmail.com"
              className="contact-icon"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://github.com/NICKPRO79"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-praveen-86b431266"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          <a
            href="mailto:nikhilpraveen@example.com"
            className="btn btn-outline-light"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
