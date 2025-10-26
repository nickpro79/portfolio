import React from "react";

export default function Education({ education }) {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">
              {edu.year} | CGPA: {edu.cgpa}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
