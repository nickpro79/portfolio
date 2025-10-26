import React from "react";

export default function Contact({ contact }) {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p>
        Email:{" "}
        <a className="text-blue-600" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>
      <p>Phone: {contact.phone}</p>
      <p>Location: {contact.address}</p>
      <div className="mt-4 space-x-4">
        <a href={contact.linkedin} target="_blank" className="text-blue-600">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" className="text-gray-800">
          GitHub
        </a>
      </div>
    </section>
  );
}
