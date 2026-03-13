import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", number: "2", icon: "check_circle" },
  { label: "Years of Experience", number: "2", icon: "workspace_premium" },
  { label: "Happy Clients", number: "5", icon: "sentiment_very_satisfied" },
  { label: "Technologies", number: "10", icon: "code" },
];

const careerTimeline = [
  { year: "2022", title: "Started Coding", company: "Self-Taught", desc: "Wrote my first lines of HTML and CSS. Fell in love with building things for the web.", icon: "rocket_launch" },
  { year: "2023", title: "Frontend Development", company: "Personal Portfolio", desc: "Mastered HTML, CSS and JavaScript. Built and shipped my first personal portfolio.", icon: "code" },
  { year: "2024", title: "Backend Developer", company: "Links Engineering", desc: "Delivered production-ready web applications for real clients. Gained experience in professional software delivery.", icon: "business_center" },
  { year: "2025", title: "Software Developer", company: "Independent", desc: "Mastered React.JS to enhance and improve my frontend development skills.", icon: "shield" },
  { year: "2026", title: "MERN Stack Developer", company: "Independent", desc: "Actively freelancing, building in public, and open to exciting new collaborations and opportunities.", icon: "star" },
];

const education = [
  { degree: "BSc Computer Engineering", school: "University of Energy and Natural Resources", period: "2018 — 2022", desc: "Studied software engineering, algorithms, data structures, and systems design.", icon: "school" },
  { degree: "Self-Taught MERN Stack Developer", school: "Online Platforms", period: "2022 — 2024", desc: "Continuous learning through Udemy, YouTube, and hands-on projects in React, TailwindCSS, and more.", icon: "laptop_mac" },
];

const values = [
  { icon: "visibility", title: "Clarity", desc: "Clean code and clear communication in everything I build and deliver." },
  { icon: "verified", title: "Consistency", desc: "Reliable quality and on-time delivery, every single project." },
  { icon: "favorite", title: "Care", desc: "Genuine care for the people using what I build — not just the code." },
  { icon: "psychology", title: "Curiosity", desc: "Always learning, always exploring — staying ahead of the curve." },
];

const designApproach = [
  { icon: "search", step: "01", title: "Understand", desc: "I start by deeply understanding the problem, the user, and the goal. No assumptions — just clarity." },
  { icon: "edit_note", step: "02", title: "Plan", desc: "I map out the architecture, user flows, and design direction before writing a single line of code." },
  { icon: "code", step: "03", title: "Build", desc: "Clean, maintainable code. I build with scalability in mind — not just what works today." },
  { icon: "refresh", step: "04", title: "Refine", desc: "I iterate based on feedback, test across devices, and polish every detail until it feels right." },
];

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
      { imgSrc: "/images/tanstack.svg", label: "Tanstack", color: "#10A37F" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-5 rounded-full bg-sky-400" />
      <span className="text-sky-400 text-xs uppercase tracking-widest font-medium">{label}</span>
    </div>
  );
}

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
          style={{ filter: hovered ? "grayscale(0) opacity(1)" : "grayscale(1) opacity(0.45)" }}
        />
      </div>
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
      <h3 className="text-sm font-semibold text-white/60 mb-1">{group.title}</h3>
      <div className="w-8 h-px bg-white/10 mb-6" />
      <div className="grid grid-cols-3 gap-x-4 gap-y-6">
        {group.skills.map((skill, i) => (
          <SkillIcon key={skill.label} skill={skill} index={i} cardHovered={cardHovered} />
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.05) 0%, transparent 60%), #18181b" }}
    >

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none hidden sm:block"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                <span className="text-sky-400 text-sm font-medium">Available for Work</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-semibold tracking-tight leading-tight mb-5" style={{ fontSize: "clamp(36px, 6vw, 68px)" }}>
                {"Hey, I'm "}
                <span className="bg-gradient-to-r from-sky-400 to-sky-300/70 bg-clip-text text-transparent">Samuel</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                A passionate fullstack developer who blends creativity with technical expertise
                to build digital experiences that are both beautiful and highly functional.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {[
                  { icon: "location_on", text: "Accra, Ghana" },
                  { icon: "work", text: "MERN Stack Developer" },
                  { icon: "translate", text: "English, Twi" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-zinc-800/50 border border-white/8 rounded-full px-3 py-1.5 text-xs sm:text-sm text-zinc-300">
                    <span className="material-symbols-rounded text-sky-400 text-base">{icon}</span>
                    {text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-sky-500/15 blur-3xl rounded-full scale-75 hidden sm:block" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden ring-1 ring-sky-400/20 shadow-2xl">
                  <img src="/images/about_hero.jpg" alt="Samuel" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-zinc-800/90 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 shadow-xl"
                >
                  <span className="material-symbols-rounded text-sky-400 text-base">bolt</span>
                  <span className="text-white text-xs sm:text-sm font-medium">Open to opportunities</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 px-4 sm:px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(({ label, number, icon }, i) => (
              <motion.div key={i} variants={fadeUp}
                className="group flex flex-col items-center text-center p-5 sm:p-7 rounded-2xl bg-zinc-800/20 border border-white/6 hover:border-sky-400/25 hover:bg-zinc-800/40 transition-all duration-300"
              >
                <span className="material-symbols-rounded text-sky-400/60 group-hover:text-sky-400 text-2xl sm:text-3xl mb-3 transition-colors duration-300">{icon}</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1">{number}+</h3>
                <p className="text-zinc-500 text-xs sm:text-sm">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MY STORY ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel label="My Story" />
              <h2 className="headline-2 mb-10">The Story Behind the Code</h2>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div variants={fadeUp} className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                <p>I started as a curious kid who loved taking things apart to understand how they worked. That same curiosity led me to computers and eventually, to the web.</p>
                <p>What started as tinkering with HTML turned into a full-blown passion for crafting digital experiences. I discovered that code was the closest thing to magic — you could build anything you imagined.</p>
                <p>Today, I channel that passion into every project I take on, whether it is a sleek portfolio, a complex web app, or a design system. I care deeply about the craft.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-zinc-800/25 border border-white/6 rounded-3xl p-6 sm:p-8">
                <h3 className="text-sky-400 font-medium mb-6 text-xs uppercase tracking-widest">A Few Things About Me</h3>
                <ul className="space-y-4">
                  {[
                    { icon: "fitness_center", text: "I like to hit the gym and stay very fit." },
                    { icon: "dark_mode", text: "Dark mode everywhere, no exceptions." },
                    { icon: "candlestick_chart", text: "I am a Synthetics Trader and run a steadily growing Telegram community." },
                    { icon: "devices", text: "I obsess over clean UI details." },
                    { icon: "sports_esports", text: "Gaming helps me decompress." },
                  ].map(({ icon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <span className="material-symbols-rounded text-sky-400 text-lg shrink-0 mt-0.5">{icon}</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(14,165,233,0.07) 0%, transparent 60%), linear-gradient(180deg, #18181b 0%, #18181b 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel label="Skills & Tools" />
              <h2 className="headline-2 mb-3">Technical Expertise</h2>
              <p className="text-zinc-400 mb-10 max-w-[60ch] text-sm sm:text-base">
                I choose the right tools for every project. Here are the technologies I use to build scalable, high-performance applications.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillGroups.map((group) => (
                <SkillGroup key={group.title} group={group} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CAREER JOURNEY ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel label="Career Journey" />
              <h2 className="headline-2 mb-3">How It Unfolded</h2>
              <p className="text-zinc-400 mb-12 max-w-[55ch] text-sm sm:text-base">
                From writing my first line of code to building production apps — every step shaped who I am as a developer.
              </p>
            </motion.div>

            {/* Timeline grid — alternating left/right on desktop */}
            <div className="relative">
              {/* Center line — desktop only */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/40 via-sky-400/20 to-transparent -translate-x-1/2" />

              <div className="space-y-6 lg:space-y-0">
                {careerTimeline.map(({ year, title, company, desc, icon }, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={i} className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:mb-8">

                      {/* Card — slides in from left or right */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className={`group bg-zinc-800/20 border border-white/6 rounded-2xl p-5 sm:p-6
                                   hover:border-sky-400/25 hover:bg-zinc-800/35
                                   transition-colors duration-300
                                   ${isLeft ? "lg:col-start-1" : "lg:col-start-2"}`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center text-sky-400 text-xs font-medium bg-sky-500/10 border border-sky-400/20 rounded-full px-3 py-1">
                            {year}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
                        <p className="text-sky-400/80 text-xs mb-3 font-medium">{company}</p>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                        <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-sky-400/40 to-transparent transition-all duration-500" />
                      </motion.div>

                      {/* Center dot — pops in */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
                        className="hidden lg:flex absolute left-1/2 top-5 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-900 border-2 border-sky-400/40 items-center justify-center z-10"
                      >
                        <span className="material-symbols-rounded text-sky-400 text-sm">{icon}</span>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DESIGN APPROACH ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel label="Design Approach" />
              <h2 className="headline-2 mb-3">How I Work</h2>
              <p className="text-zinc-400 mb-10 max-w-[55ch] text-sm sm:text-base">
                My process is intentional — every step is designed to reduce waste and maximise quality.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {designApproach.map(({ icon, step, title, desc }, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="group relative bg-zinc-800/20 border border-white/6 rounded-2xl p-6 hover:border-sky-400/25 hover:bg-zinc-800/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-4 right-5 text-5xl font-bold text-white/4 group-hover:text-sky-400/8 transition-colors duration-300 select-none">{step}</span>
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-5 group-hover:border-sky-400/40 transition-colors duration-300">
                    <span className="material-symbols-rounded text-sky-400 text-xl">{icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel label="Education" />
              <h2 className="headline-2 mb-10">Academic Background</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {education.map(({ degree, school, period, desc, icon }, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="bg-zinc-800/25 border border-white/6 rounded-2xl p-6 sm:p-7 hover:border-sky-400/25 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-rounded text-sky-400 text-xl">{icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">{degree}</h3>
                      <p className="text-sky-400 text-xs mb-1">{school}</p>
                      <p className="text-zinc-500 text-xs mb-3">{period}</p>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel label="Core Values" />
              <h2 className="headline-2 mb-3">What I Stand For</h2>
              <p className="text-zinc-400 mb-10 max-w-[55ch] text-sm sm:text-base">
                These are the principles that guide how I work, collaborate, and grow.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map(({ icon, title, desc }, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="group bg-zinc-800/25 border border-white/6 rounded-2xl p-6 hover:border-sky-400/25 hover:bg-zinc-800/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-5 group-hover:border-sky-400/40 transition-colors duration-300">
                    <span className="material-symbols-rounded text-sky-400 text-xl">{icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
