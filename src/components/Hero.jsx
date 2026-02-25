import { motion } from "framer-motion";
import { ButtonPrimary } from "./Button";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const techStack = ["React", "Node.js", "TailwindCSS", "MongoDB", "Figma"];

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Background glows — hidden on mobile to prevent GPU lag */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: "rgba(14,165,233,0.06)",
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Subtle sky tint on mobile instead of blur */}
      <div className="absolute inset-0 pointer-events-none sm:hidden"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(14,165,233,0.04) 0%, transparent 70%)" }}
      />

      {/* Subtle grid overlay — hidden on mobile */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-400/20 rounded-full">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shrink-0" />
            <span className="text-sky-300 text-xs sm:text-sm font-medium">
              Currently open to work
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-semibold tracking-tight leading-tight mb-5 sm:mb-6"
          style={{ fontSize: "clamp(30px, 7vw, 72px)" }}
        >
          Building{" "}
          <span className="bg-gradient-to-r from-sky-400 to-sky-300/70 bg-clip-text text-transparent">
            Scalable
          </span>
          {", "}
          <br className="hidden sm:block" />
          Real-World{" "}
          <span className="bg-gradient-to-r from-sky-300/70 to-sky-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-zinc-400 text-sm sm:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          {"I'm Samuel Kwabena Assan — a Backend-focused fullstack developer passionate about crafting clean, modern, and highly functional digital experiences."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16"
        >
          <ButtonPrimary
            href="/files/Samuel-Kwabena-Assan-CV.pdf.pdf"
            target="_blank"
            label="Download CV"
            icon="download"
            classes="w-full sm:w-auto justify-center"
          />
          <Link
            to="/work"
            className="btn btn-outline w-full sm:w-auto justify-center"
          >
            Explore my work
            <span className="material-symbols-rounded floating-icon">arrow_forward</span>
          </Link>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-2"
        >
          <span className="text-zinc-600 text-xs uppercase tracking-widest mr-1">
            Stack
          </span>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs text-zinc-400 bg-zinc-800/50 border border-white/8 hover:border-sky-400/30 hover:text-sky-400 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />

    </motion.section>
  );
}

export default Hero;
