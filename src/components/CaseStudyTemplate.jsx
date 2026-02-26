import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/**
 * CaseStudyTemplate — reusable layout for all project case studies.
 *
 * @param {object} data — the full case study config object (see TEMPLATE below)
 */
export default function CaseStudyTemplate({ data }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { meta, overview, techStack, challenges, features, learnings, cta } = data;

  return (
    <div
      className="min-h-screen bg-zinc-950 text-white"
      style={{ fontFamily: "'DM Sans', 'Sora', sans-serif" }}
    >
      {/* ── BACK BUTTON ── */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/work"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white/5 border border-white/10 text-white/60
                     hover:text-white hover:bg-white/10 hover:border-white/20
                     backdrop-blur-md transition-all duration-300 text-sm"
        >
          <span className="material-symbols-rounded text-sm">arrow_back</span>
          Back
        </Link>
      </div>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[90vh] flex items-end overflow-hidden">
        <motion.div
          style={{ y: isMobile ? 0 : heroY }}
          className="absolute inset-0"
        >
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                        bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 pb-12 pt-20 md:pt-0 md:pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                             bg-sky-400/10 border border-sky-400/20 text-sky-400
                             text-xs tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {meta.titleLine1}
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #38bdf8, #7dd3fc)" }}
            >
              {meta.titleLine2}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-white/60 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            {meta.summary}
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {meta.stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-white/30 uppercase tracking-widest mb-1">{s.label}</span>
                <span className="text-sm text-white/80 font-medium">{s.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-16 md:py-24 space-y-20 md:space-y-32">

        {/* ── OVERVIEW ── */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionLabel label="Overview" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Problem Statement
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl border border-white/8 bg-white/3 space-y-4">
              <span className="material-symbols-rounded text-rose-400 text-2xl">error_outline</span>
              <h3 className="font-semibold text-lg">The Problem</h3>
              <p className="text-white/50 leading-relaxed text-sm">{overview.problem}</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/8 bg-white/3 space-y-4">
              <span className="material-symbols-rounded text-sky-400 text-2xl">lightbulb</span>
              <h3 className="font-semibold text-lg">The Goal</h3>
              <p className="text-white/50 leading-relaxed text-sm">{overview.goal}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l border-white/10 space-y-8">
            {overview.phases.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.5}
                className="relative"
              >
                <div className="absolute -left-[2.15rem] w-3 h-3 rounded-full bg-sky-400 border-2 border-zinc-950" />
                <span className="text-xs text-sky-400 tracking-widest uppercase">{item.phase}</span>
                <h4 className="font-semibold mt-1 mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── TECH STACK ── */}
        <section>
          <SectionLabel label="Tech Stack" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Every Tool, and Why
          </h2>

          <div className="space-y-12">
            {techStack.groups.map((group, gi) => (
              <motion.div
                key={gi}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={gi * 0.2}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-2 rounded-full bg-${group.color}-400`} />
                  <h3 className={`text-sm font-semibold uppercase tracking-widest text-${group.color}-400`}>
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      variants={fadeUp} initial="hidden" whileInView="visible"
                      viewport={{ once: true }} custom={ii * 0.1}
                      className="flex items-start gap-4 p-5 rounded-xl border border-white/6 bg-white/2
                                 hover:border-white/12 hover:bg-white/4 transition-all duration-300"
                    >
                      <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 bg-${group.color}-400/60`} />
                      <div>
                        <span className="font-medium text-sm">{item.name}</span>
                        <p className="text-white/40 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture diagram */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl border border-white/8 bg-white/2"
          >
            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-8">Architecture</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
              {techStack.architecture.map((node, i) =>
                node.icon ? (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 rounded-2xl bg-${node.color}-400/10 border border-${node.color}-400/20 flex items-center justify-center`}>
                      <span className={`material-symbols-rounded text-${node.color}-400`}>{node.icon}</span>
                    </div>
                    <span className="text-xs font-medium">{node.label}</span>
                    <span className="text-xs text-white/30">{node.sub}</span>
                  </div>
                ) : (
                  <div key={i} className="flex flex-col items-center gap-1 text-white/20">
                    <span className="text-xl hidden md:block">→</span>
                    <span className="text-xl block md:hidden">↓</span>
                    <span className="text-xs">{node.sub}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </section>

        {/* ── CHALLENGES ── */}
        <section>
          <SectionLabel label="Challenges & Solutions" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            What Broke, and How I Fixed It
          </h2>
          <p className="text-white/40 mb-12 leading-relaxed">
            The real learning happens in the debugging sessions nobody documents. Here's mine.
          </p>

          <div className="space-y-8">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.1}
                className="group p-5 sm:p-8 rounded-2xl border border-white/8 bg-white/2
                           hover:border-white/12 hover:bg-white/4 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-bold text-white/8 leading-none shrink-0"
                      style={{ fontFamily: "'Sora', sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug">{c.title}</h3>
                  </div>
                  <span className={`self-start shrink-0 px-3 py-1 text-xs rounded-full
                                   bg-${c.tagColor}-400/10 text-${c.tagColor}-400
                                   border border-${c.tagColor}-400/20`}>
                    {c.tag}
                  </span>
                </div>
                <div className="space-y-4 sm:pl-16 pl-0">
                  <ChallengeBlock icon="bug_report" label="The Problem" color="rose" text={c.problem} />
                  <ChallengeBlock icon="search" label="The Discovery" color="amber" text={c.discovery} />
                  <ChallengeBlock icon="check_circle" label="The Fix" color="emerald" text={c.solution} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section>
          <SectionLabel label="Features" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            What It Does
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.1}
                className="p-6 rounded-2xl border border-white/8 bg-white/2
                           hover:border-sky-400/20 hover:bg-sky-400/3
                           transition-all duration-400 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20
                                flex items-center justify-center mb-4
                                group-hover:bg-sky-400/20 transition-colors duration-300">
                  <span className="material-symbols-rounded text-sky-400 text-lg">{f.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── LEARNINGS ── */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <SectionLabel label="Reflection" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            What I Learned
          </h2>
          <div className="p-8 md:p-12 rounded-2xl border border-white/8 bg-white/2 space-y-6">
            {learnings.map((text, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-sky-400 mt-1 shrink-0">
                  <span className="material-symbols-rounded text-sm">arrow_forward</span>
                </span>
                <p className="text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center pb-12"
        >
          <div
            className="relative p-8 sm:p-12 rounded-3xl border border-white/8 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.05) 0%, rgba(255,255,255,0.02) 100%)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-3xl font-bold mb-4 relative z-10"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              {cta.heading}
            </h2>
            <p className="text-white/40 mb-8 relative z-10">{cta.sub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              {cta.links.map((link, i) =>
                link.external ? (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${link.primary
                      ? "bg-sky-400/20 text-sky-300 border border-sky-400/30 hover:bg-sky-400/30 hover:border-sky-400/50"
                      : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.icon && <span className="material-symbols-rounded text-sm">{link.icon}</span>}
                    {link.img && <img src={link.img} alt="" className="w-4 h-4 opacity-70" />}
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={i}
                    to={link.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                               bg-white/5 text-white/70 border border-white/10
                               hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {link.icon && <span className="material-symbols-rounded text-sm">{link.icon}</span>}
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

/* ── Small reusable components ── */
function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-sky-400/60" />
      <span className="text-xs text-sky-400 uppercase tracking-widest font-medium">{label}</span>
    </div>
  );
}

function ChallengeBlock({ icon, label, color, text }) {
  return (
    <div className="flex gap-3">
      <span className={`material-symbols-rounded text-${color}-400 text-sm mt-0.5 shrink-0`}>{icon}</span>
      <div>
        <span className={`text-xs font-semibold uppercase tracking-wider text-${color}-400`}>{label}</span>
        <p className="text-white/50 text-sm mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
