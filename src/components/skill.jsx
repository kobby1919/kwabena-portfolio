import { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { imgSrc: "/images/html5.svg", label: "HTML5", color: "#E34F26" },
      { imgSrc: "/images/css3.svg", label: "CSS3", color: "#1572B6" },
      { imgSrc: "/images/javascript.svg", label: "JavaScript", color: "#F7DF1E" },
      { imgSrc: "/images/react.svg", label: "React", color: "#61DAFB" },
      { imgSrc: "/images/nextjs_icon_dark.svg", label: "Next.js", color: "#ffffff" },
      { imgSrc: "/images/tailwindcss.svg", label: "TailwindCSS", color: "#38BDF8" },
      { imgSrc: "/images/framer_dark.svg", label: "Framer Motion", color: "#BB4BFF" },
      { imgSrc: "/images/redux.svg", label: "Redux", color: "#764ABC" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { imgSrc: "/images/nodejs.svg", label: "NodeJS", color: "#6CC24A" },
      { imgSrc: "/images/expressjs.svg", label: "ExpressJS", color: "#ffffff" },
      { imgSrc: "/images/mongodb.svg", label: "MongoDB", color: "#47A248" },
      { imgSrc: "/images/postgresql.svg", label: "PostgreSQL", color: "#4169E1" },
      { imgSrc: "/images/fastapi.svg", label: "REST API", color: "#009688" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { imgSrc: "/images/git.svg", label: "Git", color: "#F05032" },
      { imgSrc: "/images/figma.svg", label: "Figma", color: "#F24E1E" },
      { imgSrc: "/images/postman.svg", label: "Postman", color: "#FF6C37" },
      { imgSrc: "/images/canva.svg", label: "Canva", color: "#00C4CC" },
      { imgSrc: "/images/gemini.svg", label: "Gemini", color: "#10A37F" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconVariants = {
  rest: { y: 0, scale: 1 },
  hover: (i) => ({
    y: -5,
    scale: 1.1,
    transition: { duration: 0.3, delay: i * 0.04, ease: "easeOut" },
  }),
};

function SkillIcon({ skill, index, cardHovered }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-default"
      custom={index}
      animate={cardHovered ? "hover" : "rest"}
      variants={iconVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? `${skill.color}15` : "rgba(255,255,255,0.04)",
          border: hovered ? `1px solid ${skill.color}40` : "1px solid rgba(255,255,255,0.08)",
          boxShadow: hovered ? `0 0 18px ${skill.color}25` : "none",
        }}
      >
        <img
          src={skill.imgSrc}
          alt={skill.label}
          className="w-8 h-8 object-contain transition-all duration-300"
          style={{
            filter: hovered ? "grayscale(0) opacity(1)" : "grayscale(1) opacity(0.45)",
          }}
        />
      </div>

      {/* Label */}
      <span
        className="text-xs text-center leading-tight transition-colors duration-300"
        style={{ color: hovered ? skill.color : "rgba(255,255,255,0.35)" }}
      >
        {skill.label}
      </span>
    </motion.div>
  );
}

function SkillGroup({ group }) {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="rounded-3xl p-6 border transition-all duration-500"
      style={{
        background: cardHovered
          ? "linear-gradient(135deg, rgba(14,165,233,0.06) 0%, rgba(14,165,233,0.02) 100%)"
          : "rgba(24,24,27,0.5)",
        borderColor: cardHovered ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.06)",
        boxShadow: cardHovered ? "0 0 40px rgba(14,165,233,0.06)" : "none",
      }}
    >
      {/* Group title */}
      <h3 className="text-sm font-semibold text-white/60 mb-1">{group.title}</h3>
      <div className="w-8 h-px bg-white/10 mb-6" />

      {/* Icons grid */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-6">
        {group.skills.map((skill, i) => (
          <SkillIcon
            key={skill.label}
            skill={skill}
            index={i}
            cardHovered={cardHovered}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Skill() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 100% 50%, rgba(14,165,233,0.07) 0%, transparent 60%), linear-gradient(180deg, #18181b 0%, #18181b 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />

      <div className="container relative z-10">

        <h2 className="headline-2 mb-4">Technical Expertise</h2>
        <p className="text-zinc-400 mb-10 max-w-[60ch]">
          A categorized overview of my technical capabilities across frontend,
          backend, and tooling.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skill;
