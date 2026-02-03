import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skillItem = [
  { imgSrc: "/images/figma.svg", label: "Figma", desc: "Design tool" },
  { imgSrc: "/images/css3.svg", label: "CSS", desc: "User Interface" },
  { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Interaction" },
  { imgSrc: "/images/nodejs.svg", label: "NodeJS", desc: "Web Server" },
  { imgSrc: "/images/expressjs.svg", label: "ExpressJS", desc: "Node Framework" },
  { imgSrc: "/images/mongodb.svg", label: "MongoDB", desc: "Database" },
  { imgSrc: "/images/react.svg", label: "React", desc: "Framework" },
  { imgSrc: "/images/tailwindcss.svg", label: "TailwindCSS", desc: "User Interface" },
];

// Slide from left
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Slide from right
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Stagger cards
const gridStagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const cardItem = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Skill() {
  return (
    <section className="section">
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="headline-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Core Tech Stack
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-zinc-400 mt-3 mb-8 max-w-[50ch]"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          An overview of the tech stack I rely on to create high-quality digital products.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillItem.map((item, key) => (
            <motion.div key={key} variants={cardItem}>
              <SkillCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
