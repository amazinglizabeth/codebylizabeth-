import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const menu = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white px-3" : "bg-gray-50 text-black px-3"
      }`}
    >
      <Menu darkMode={darkMode} toggleTheme={menu} />
      <Hero />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Blog />
      <Contact darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
