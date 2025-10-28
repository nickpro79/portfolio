import React from "react";

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="flex-center">
        {skills.map((skill, idx) => (
          <span key={idx} className="badge-custom">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
