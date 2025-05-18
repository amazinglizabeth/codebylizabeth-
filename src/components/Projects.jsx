import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Gym-fit",
    description:
      "A Gym website, where people can access basic info about the gym and get registered.",
    tech: "React, Tailwind",
    live: "https://gym-fit-pink.vercel.app/",
    code: "https://github.com/amazinglizabeth/Gym-Fit",
  },
  {
    title: "Techub Academy",
    description:
      "A tech academy offering courses, hands-on projects, and certifications.",
    tech: "React, Tailwind",
    live: "https://techub-academy.vercel.app/",
    code: "https://github.com/amazinglizabeth/techub_academy",
  },
  {
    title: "Safeguard",
    description:
      "A security consulting firm that offers services and sells security products.",
    tech: "Vite, React, Tailwind",
    live: "https://safeguard-black.vercel.app/",
    code: "https://github.com/amazinglizabeth/safeguard",
  },
  {
    title: "Headphone Store",
    description:
      "A landing page for a store that sells differnt types of hedaphones",
    tech: "React, Tailwind",
    live: "https://headset-react-design.vercel.app/",
    code: "https://github.com/amazinglizabeth/headset-react-design",
  },
  {
    title: "Coming Soon Project 2",
    description: "Details coming soon...",
    tech: "React, Tailwind",
    live: "#",
    code: "#",
  },
];

const Projects = ({ darkMode }) => (
  <section id="projects" className="py-20 px-6">
    <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} darkMode={darkMode} />
      ))}
    </div>
  </section>
);

export default Projects;
