import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero({ name, title, about }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    const link = document.createElement("a");
    link.href = "/Nikhil_Praveen_Resume.pdf"; // put your actual file name
    link.download = "Nikhil_Praveen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      // Show a small toast/alert
      alert("📄 Resume downloaded! Check your downloads folder.");
    }, 1000);
  };

  return (
    <section id="hero" className="hero-section text-center text-white py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">{name}</h1>
        <h3 className="mb-3">{title}</h3>
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          {about}
        </p>

        {/* Contact / Social Icons */}
        <div className="d-flex justify-content-center gap-4 mt-4 mb-4">
          <a
            href="https://github.com/NICKPRO79"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-3"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-praveen-86b431266"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-3"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nikhilpraveen7777@gmail.com"
            className="text-white fs-3"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Download Resume Button */}
        <button
          onClick={handleDownload}
          className="btn btn-light px-4 py-2 fw-semibold"
          disabled={downloading}
        >
          {downloading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              Downloading...
            </>
          ) : (
            <>
              <FaDownload className="me-2" />
              Download Resume
            </>
          )}
        </button>
      </div>
    </section>
  );
}
