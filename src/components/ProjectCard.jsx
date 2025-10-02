import React from "react";
const ProjectCard = ({ title, description, tech, live, code, darkMode }) => (
  <div
    className={`rounded-xl shadow-md p-6 transition-colors duration-300 ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
    }`}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-2">{description}</p>
    <p className="text-sm mb-4">
      Tech Used: <span className="text-pink-500">{tech}</span>
    </p>
    <div className="flex gap-4">
      {live !== "#" && (
        <a
          href={live}
          className="text-cyan-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      )}
      {/* {code !== "#" && (
        <a
          href={code}
          className="text-cyan-500  hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      )} */}
    </div>
  </div>
);

export default ProjectCard;
