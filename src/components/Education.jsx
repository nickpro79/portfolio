import React from "react";

export default function Education({ education }) {
  return (
    <section id="education" style={{ backgroundColor: "#f8f9fa" }}>
      <h2>Education</h2>
      <div className="flex-center">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="card shadow-sm"
            style={{ maxWidth: "600px", borderLeft: "5px solid #0d6efd" }}
          >
            <div className="card-body">
              <h5>{edu.degree}</h5>
              <h6 className="text-muted">{edu.institution}</h6>
              <p>
                {edu.year} | CGPA: {edu.cgpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
