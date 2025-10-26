import React from "react";

export default function Contact({ contact }) {
  return (
    <section>
      <h2>Contact</h2>
      <div className="d-flex flex-column align-items-center text-center">
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>Phone: {contact.phone}</p>
        <p>Address: {contact.address}</p>
        <div>
          <a
            href={contact.linkedin}
            target="_blank"
            className="btn btn-outline-primary btn-custom"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            className="btn btn-outline-dark btn-custom"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
