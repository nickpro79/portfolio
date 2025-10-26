import React from "react";

export default function Hero({ name, title, about }) {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="text-xl mt-2">{title}</p>
      <p className="mt-4 max-w-2xl mx-auto text-gray-700">{about}</p>
    </section>
  );
}
