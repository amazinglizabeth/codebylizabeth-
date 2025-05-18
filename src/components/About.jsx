import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = ({ darkMode }) => {
  const paragraphs = [
    `It started with a simple question: "How do websites work?", "How can these bunch of codes create this beautiful magic?" That curiosity led me to HTML, CSS, and eventually JavaScript.`,
    `I began building small layouts, learning by doing, and before I knew it, I was in love with React and Tailwind CSS. The ability to bring interfaces to life felt magical — and still does.`,
    `Every component I build today reflects growth, creativity, and resilience. As a frontend developer, I'm not just coding — I'm crafting experiences.`,
    `Now I build delightful frontend experiences using React, Tailwind CSS, and a sprinkle of magic ✨. I craft responsive, accessible, and scalable user interfaces using React and Tailwind CSS. I love turning ideas into delightful digital experiences.`,
  ];

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [typingDone, setTypingDone] = useState(
    Array(paragraphs.length).fill(false)
  );

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const baseDelay = 1000;
    const typeSpeed = 50;
    const timeouts = paragraphs.map((text, idx) => {
      const estimatedTime = baseDelay + idx * 500 + text.length * typeSpeed;
      return setTimeout(() => {
        setTypingDone((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
      }, estimatedTime);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`px-4 py-20 transition-colors ${
        darkMode ? "bg-gray-700" : "bg-pink-50"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 text-center font-heading border-b-2 border-pink-300 w-fit mx-auto pb-2">
        ABOUT ME
      </h2>

      <div
        className={`max-w-4xl mx-auto relative px-6 py-10 rounded-xl shadow-xl border ${
          darkMode
            ? "border-gray-600 bg-gray-900/70"
            : "border-pink-200 bg-white/70"
        } backdrop-blur-sm transition`}
      >
        <div className="absolute -top-4 left-6 w-16 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 right-6 w-12 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          My Journey Into Frontend — From Curiosity to Craft
        </h3>
        {paragraphs.map((text, idx) => (
          <p className="mb-4" key={idx}>
            {hasAnimated && !typingDone[idx] ? (
              <Typewriter
                words={[text]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                delaySpeed={1000 + idx * 500}
                deleteSpeed={0}
              />
            ) : (
              text
            )}
          </p>
        ))}
        <p className="italic text-pink-500 mt-6 text-right">
          ~ Amazing Lizabeth
        </p>
      </div>
    </section>
  );
};

export default About;
