import React from "react";

export default function Experience({ experience }) {
  return (
    <section>
      <h2>Experience</h2>
      <div className="flex-center">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="card shadow-sm"
            style={{ maxWidth: "600px", borderLeft: "5px solid #0d6efd" }}
          >
            <div className="card-body">
              <h5>
                {exp.role} {exp.company && `- ${exp.company}`}
              </h5>
              <h6 className="text-muted">
                {exp.duration} {exp.location && `| ${exp.location}`}
              </h6>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
