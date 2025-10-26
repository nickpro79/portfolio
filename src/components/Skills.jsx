import React from "react";

export default function Skills({ skills }) {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
