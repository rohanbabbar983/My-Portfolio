"use client"
import React from 'react';
import { motion } from "framer-motion";

const skills = [
  'JavaScript', 'React', 'NextJs', 'Node.js', 'Express', 'MongoDB',
  'HTML', 'CSS', 'SASS', 'Tailwind', 'Bootstrap', 'Redux',
  'TypeScript', 'Docker', 'Git', 'JavaScript', 'React', 'NextJs',
  'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'SASS', 'Tailwind',
  'Bootstrap', 'Redux', 'TypeScript', 'Docker', 'Git'
];

export const LogoTicker = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-20">Technical Skills</h2>
        <div className='border-y border-white/20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <motion.div
            initial={{ translateX: "0%" }}
            animate={{ translateX: "-200%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex md:flex-none gap-3 md:gap-8"
          >
            {skills.map((skill, index) => (
              <div key={index} className="px-4  py-2 text-lg rounded-lg shadow-md">
                {skill}
              </div>
              
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
