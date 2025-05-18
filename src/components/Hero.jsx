import React from "react";
import Pc from "../assets/images/pc.jpg";

const Hero = () => (
  <section className="w-full mt-1 md:mt-10 px-4 md:px-10 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 text-left py-8 md:py-16">
      <p className="text-lg md:text-2xl font-serif">Hey there, I'm</p>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
        Amazing Lizabeth
      </h1>
      <p className="text-base md:text-xl mb-2 font-serif">
        A Frontend Developer passionate about building beautiful web
        experiences.
      </p>
      <p className="text-base md:text-xl mb-4 font-serif">
        Creating an easy and delightful user experience design to achieve core
        user goals.
      </p>
      <p className="text-base md:text-xl mb-6 font-serif italic">
        This is Code By Lizabeth...
      </p>
      <a
        href="#about"
        className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition"
      >
        Let&apos;s take a tour
      </a>
    </div>

    <div className="md:w-1/2 mt-5 md:mt-0 md:pl-3 flex justify-center mb-5">
      <img
        src={Pc}
        alt="Laptop"
        className="w-full max-w-sm md:max-w-xl border-4 border-sky-50 rounded-lg shadow-xl"
      />
    </div>
  </section>
);

export default Hero;
