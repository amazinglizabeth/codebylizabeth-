import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
export const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`text-center py-16 px-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-cyan-200 text-black"
      }`}
    >
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="mb-6">
        Reach me through any of my social platforms or send me an email.
      </p>
      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://wa.me/7037292030"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/amazing_lizabeth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:eadenike14@gmail.com"
          className="text-gray-700 hover:text-gray-900"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/amazinglizabeth"
          className="text-gray-700 hover:text-gray-900"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
export default Contact;
