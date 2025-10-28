import React from "react";

export default function Hero({ name, title, about }) {
  return (
    <section id="hero" className="hero-section text-center text-white py-5">
      <div className="container py-5">
        <h1 className="fw-bold display-5">{name}</h1>
        <p className="lead mb-3">{title}</p>
        <p className="w-75 mx-auto">{about}</p>

        <a
          href="/Nikhil_Praveen_Resume.pdf"
          download
          className="btn btn-light mt-3"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
