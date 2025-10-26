import React from "react";

export default function Hero({ name, title, about }) {
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p className="lead">{title}</p>
      <p>{about}</p>
    </section>
  );
}
