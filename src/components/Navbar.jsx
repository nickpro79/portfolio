import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (section) => setActive(section);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid justify-content-between px-4">
        <a className="navbar-brand fw-bold text-primary fs-4" href="#hero">
          Nikhil<span style={{ color: "#007bff" }}></span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            {[
              { id: "hero", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`nav-link px-3 ${
                    active === item.id ? "active-link" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
