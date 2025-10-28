import React from "react";

export default function Projects({ projects }) {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }} id="projects">
      <h2>Projects</h2>
      <div className="flex-center">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="card shadow-sm"
            style={{ maxWidth: "350px" }}
          >
            <div className="card-body">
              <h5>{p.title}</h5>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
