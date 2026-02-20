import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { label: "Projects Completed", number: "2", icon: "check_circle" },
  { label: "Years of Experience", number: "2", icon: "workspace_premium" },
  { label: "Happy Clients", number: "5", icon: "sentiment_very_satisfied" },
  { label: "Technologies", number: "10", icon: "code" },
];

const careerTimeline = [
  {
    year: "2022",
    title: "Started Coding",
    company: "Self-Taught",
    desc: "Wrote my first lines of HTML and CSS. Fell in love with building things for the web.",
    icon: "rocket_launch",
  },
  {
    year: "2023",
    title: "Frontend Development",
    company: "Personal Portfolio",
    desc: "Mastered HTML, CSS and JavaScript. Built and shipped my first personal portfolio.",
    icon: "code",
  },
  {
    year: "2024",
    title: "Backend Developer",
    company: "Links Engineering",
    desc: "Delivered production-ready web applications for real clients. Gained experience in professional software delivery.",
    icon: "business_center",
  },
  {
    year: "2025",
    title: "Software Developer",
    company: "Independent",
    desc: "Mastered React.JS to enhance and improve my frontend development skills.",
    icon: "shield",
  },
  {
    year: "2026",
    title: "MERN Stack Developer",
    company: "Independent",
    desc: "Actively freelancing, building in public, and open to exciting new collaborations and opportunities.",
    icon: "star",
  },
];

const education = [
  {
    degree: "BSc Computer Engineering",
    school: "University of Energy and Natural Resources",
    period: "2018 — 2022",
    desc: "Studying software engineering, algorithms, data structures, and systems design.",
    icon: "school",
  },
  {
    degree: "Self-Taught MERN Stack Developer",
    school: "Online Platforms",
    period: "2022 — 2024",
    desc: "Continuous learning through Udemy, YouTube, and hands-on projects in React, TailwindCSS, and more.",
    icon: "laptop_mac",
  },
];

const values = [
  {
    icon: "visibility",
    title: "Clarity",
    desc: "Clean code and clear communication in everything I build and deliver.",
  },
  {
    icon: "verified",
    title: "Consistency",
    desc: "Reliable quality and on-time delivery, every single project.",
  },
  {
    icon: "favorite",
    title: "Care",
    desc: "Genuine care for the people using what I build — not just the code.",
  },
  {
    icon: "psychology",
    title: "Curiosity",
    desc: "Always learning, always exploring — staying ahead of the curve.",
  },
];

const tabs = [
  { id: "story", label: "My Story", icon: "auto_stories" },
  { id: "career", label: "Career Journey", icon: "timeline" },
  { id: "education", label: "Education", icon: "school" },
  { id: "values", label: "Core Values", icon: "favorite" },
];

// Lightweight animation variants — only opacity + y (no x) for mobile perf
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <motion.div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.05) 0%, transparent 60%), #18181b",
      }}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto py-6 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — Text */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-sky-400 text-sm font-medium">Available for Work</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-5">
                {"Hey, I'm "}
                <span className="bg-gradient-to-r from-sky-400 to-sky-300/70 bg-clip-text text-transparent">
                  Samuel
                </span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                A passionate web developer who blends creativity with technical expertise
                to build digital experiences that are both beautiful and highly functional.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { icon: "location_on", text: "Accra, Ghana" },
                  { icon: "work", text: "MERN Stack Developer" },
                  { icon: "translate", text: "English, Twi" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 bg-zinc-800/50 border border-white/8 rounded-full px-3 py-1.5 text-xs sm:text-sm text-zinc-300"
                  >
                    <span className="material-symbols-rounded text-sky-400 text-base">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Photo */}
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow — hidden on mobile */}
                <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full scale-75 hidden sm:block" />

                {/* Photo frame */}
                <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-sky-400/20 shadow-2xl">
                  <img
                    src="/images/about_hero.jpg"
                    alt="Samuel"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-zinc-800/90 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 shadow-xl"
                >
                  <span className="material-symbols-rounded text-sky-400 text-base sm:text-lg">bolt</span>
                  <span className="text-white text-xs sm:text-sm font-medium">Open to opportunities</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <motion.section
        variants={fadeUp}
        className="py-10 sm:py-12 px-4 sm:px-6 border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(({ label, number, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-zinc-800/30 border border-white/8 hover:border-sky-400/30 transition-all duration-300"
              >
                <span className="material-symbols-rounded text-sky-400 text-2xl sm:text-3xl mb-2 sm:mb-3">{icon}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{number}+</h3>
                <p className="text-zinc-500 text-xs sm:text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── TABS SECTION ── */}
      <motion.section variants={fadeUp} className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Tab Buttons — scrollable on mobile */}
          <div className="flex gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border whitespace-nowrap shrink-0 ${
                  activeTab === id
                    ? "bg-sky-500/15 border-sky-400/40 text-sky-300"
                    : "bg-zinc-800/30 border-white/8 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                }`}
              >
                <span className="material-symbols-rounded text-[15px]">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">

            {/* MY STORY */}
            {activeTab === "story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start"
              >
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-5">
                    The Story Behind the Code
                  </h2>
                  <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                    <p>
                      I started as a curious kid who loved taking things apart to understand how they worked.
                      That same curiosity led me to computers and eventually, to the web.
                    </p>
                    <p>
                      What started as tinkering with HTML turned into a full-blown passion for crafting
                      digital experiences. I discovered that code was the closest thing to magic —
                      you could build anything you imagined.
                    </p>
                    <p>
                      Today, I channel that passion into every project I take on, whether it is a sleek
                      portfolio, a complex web app, or a design system. I care deeply about the craft.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-800/30 border border-white/8 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-sky-400 font-medium mb-5 text-xs uppercase tracking-widest">
                    A Few Things About Me
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
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
                </div>
              </motion.div>
            )}

            {/* CAREER JOURNEY */}
            {activeTab === "career" && (
              <motion.div
                key="career"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Career Journey
                </h2>
                <p className="text-zinc-400 mb-8 max-w-xl text-sm sm:text-base">
                  From writing my first line of code to building production apps — here is how it has unfolded.
                </p>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/40 via-sky-400/20 to-transparent" />

                  <div className="space-y-5 sm:space-y-8">
                    {careerTimeline.map(({ year, title, company, desc, icon }, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="flex gap-4 sm:gap-6 pl-1"
                      >
                        <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mt-1">
                          <span className="material-symbols-rounded text-sky-400 text-sm">{icon}</span>
                        </div>

                        <div className="flex-1 pb-2 bg-zinc-800/20 border border-white/5 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 hover:border-sky-400/20 transition-all duration-300">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                            <span className="text-sky-400 text-xs font-medium bg-sky-500/10 border border-sky-400/20 rounded-full px-3 py-0.5">
                              {year}
                            </span>
                            <h3 className="text-white font-medium text-sm sm:text-base">{title}</h3>
                            <span className="text-zinc-500 text-xs">{company}</span>
                          </div>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* EDUCATION */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                  Education
                </h2>
                <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                  {education.map(({ degree, school, period, desc, icon }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-zinc-800/30 border border-white/8 rounded-2xl p-5 sm:p-7 hover:border-sky-400/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                          <span className="material-symbols-rounded text-sky-400 text-lg sm:text-xl">{icon}</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-base sm:text-lg mb-1">{degree}</h3>
                          <p className="text-sky-400 text-xs sm:text-sm mb-1">{school}</p>
                          <p className="text-zinc-500 text-xs mb-2 sm:mb-3">{period}</p>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 bg-zinc-800/20 border border-white/5 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-rounded text-sky-400">verified</span>
                    <h3 className="text-white font-medium text-sm sm:text-base">Continuous Learning</h3>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Beyond formal education, I invest heavily in self-learning through platforms like
                    Udemy, Frontend Mentor, and building real-world projects. Learning never stops.
                  </p>
                </div>
              </motion.div>
            )}

            {/* CORE VALUES */}
            {activeTab === "values" && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  What I Stand For
                </h2>
                <p className="text-zinc-400 mb-8 max-w-xl text-sm sm:text-base">
                  These are the principles that guide how I work, collaborate, and grow.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {values.map(({ icon, title, desc }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="bg-zinc-800/30 border border-white/8 rounded-2xl p-5 sm:p-7 hover:border-sky-400/30 hover:bg-zinc-800/50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-4 sm:mb-5">
                        <span className="material-symbols-rounded text-sky-400 text-lg sm:text-xl">{icon}</span>
                      </div>
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{title}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.section>

    </motion.div>
  );
}
