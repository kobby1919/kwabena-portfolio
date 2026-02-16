import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = {
  frontend: [
    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: "Building dynamic user interfaces with reusable components.",
      level: 90,
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Core language for interactive web applications.",
      level: 80,
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "Utility-first CSS for scalable UI systems.",
      level: 88,
    },
  ],

  backend: [
    {
      imgSrc: "/images/nodejs.svg",
      label: "NodeJS",
      desc: "Server-side JavaScript runtime.",
      level: 85,
    },
    {
      imgSrc: "/images/expressjs.svg",
      label: "ExpressJS",
      desc: "Backend framework for REST APIs.",
      level: 82,
    },
    {
      imgSrc: "/images/mongodb.svg",
      label: "MongoDB",
      desc: "NoSQL database for scalable applications.",
      level: 80,
    },
  ],

  design: [
    {
      imgSrc: "/images/figma.svg",
      label: "Figma",
      desc: "UI/UX design and prototyping.",
      level: 75,
    },
  ],

  devops: [
    {
      imgSrc: "/images/git.svg",
      label: "Git",
      desc: "Version control & collaboration.",
      level: 85,
    },
  ],
};

const categories = ["frontend", "backend", "devops", "design"];

function Skill() {
  // Still filters on click
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="section">
      <div className="container">

        {/* Heading */}
        <h2 className="headline-2 mb-4">Technical Expertise</h2>
        <p className="text-zinc-400 mb-10 max-w-[60ch]">
          A categorized overview of my technical capabilities across frontend,
          backend, DevOps, and design.
        </p>

        {/* Category Buttons (HOVER ONLY STYLING) */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="
                px-5 py-2 
                rounded-full 
                text-sm 
                capitalize
                bg-zinc-900 
                text-zinc-400 
                border 
                border-zinc-700
                transition-all 
                duration-300
                hover:bg-sky-400 
                hover:text-black 
                hover:border-sky-400
              "
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div
          layout
          className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
        >
          <AnimatePresence mode="wait">
            {skills[activeCategory].map((skill) => (
              <SkillCard key={skill.label} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Skill;