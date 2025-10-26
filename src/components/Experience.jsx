import React from "react";

export default function Experience({ experience }) {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            {exp.company && <p className="text-gray-600">{exp.company}</p>}
            <p className="text-gray-500 text-sm">
              {exp.duration} {exp.location && `| ${exp.location}`}
            </p>
            <p className="mt-2 text-gray-700">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
