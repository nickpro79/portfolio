import React from "react";

export default function Projects({ projects }) {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {projects.map((p, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-700">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
