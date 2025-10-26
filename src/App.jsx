import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import data from "./data.json"; // JSON we structured above

function App() {
  return (
    <div>
      <Hero name={data.name} title={data.title} about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Contact contact={data.contact} />
    </div>
  );
}

export default App;
