import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Personal Portfolio",
    description: "Modern personal portfolio showcasing my projects, skills, and experience, built with a focus on clean design, smooth interactions, and real-world full-stack functionality.",
    image: "/images/project-1.png",
    tech: ["React", "Express", "API", "MongoDB", "NodeJS", "tailwindCSS"],
    year: "2026",
    type: "Web App",
    status: "Completed",
    slug: "personal-portfolio",
    live: "https://junior-portfolio-kappa.vercel.app/",
    github: "https://github.com/kobby1919/kwabena-portfolio",
    category: "Full Stack",
  },
  {
    title: "School Management System",
    description: "A complete platform to manage students and teachers.",
    image: "/images/SMS.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    year: "2026",
    type: "Web App",
    status: "In-Progress",
    featured: true,
    slug: "school-management",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
    category: "Full Stack",
  },
];

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <motion.div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.07) 0%, transparent 55%), #18181b",
      }}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >

      {/* ── HERO ── */}
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="material-symbols-rounded text-sky-400 text-base">work</span>
              <span className="text-sky-400 text-sm font-medium">My Work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
              Projects I am{" "}
              <span className="bg-gradient-to-r from-sky-400 to-sky-300/70 bg-clip-text text-transparent">
                Proud Of
              </span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              A curated collection of projects that reflect my skills, growth, and passion
              for building meaningful digital experiences.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/5"
          >
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Completed", value: projects.filter(p => p.status === "Completed").length },
              { label: "In Progress", value: projects.filter(p => p.status === "In-Progress").length },
              { label: "Technologies Used", value: [...new Set(projects.flatMap(p => p.tech))].length },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className="text-zinc-500 text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Filter Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {["All", "Full Stack", "Frontend"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full text-sm capitalize border transition-all duration-300 ${
                  filter === item
                    ? "bg-sky-500/15 border-sky-400/40 text-sky-300"
                    : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-sky-400 hover:text-black hover:border-sky-400"
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Cards — equal width grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20 text-zinc-500"
              >
                <span className="material-symbols-rounded text-5xl mb-4 block">folder_off</span>
                No projects in this category yet.
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-2xl bg-zinc-800/30 backdrop-blur-xl border border-white/8 rounded-2xl px-10 py-8"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-xl tracking-tight">
                Like what you see?
              </h3>
              <p className="text-zinc-500 text-sm mt-1">
                {"Let's build something incredible together."}
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/50 transition-all duration-300 text-sm font-medium whitespace-nowrap"
            >
              {"Let's Connect"}
              <span className="material-symbols-rounded text-[15px]">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
