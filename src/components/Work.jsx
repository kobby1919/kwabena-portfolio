import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Personal Portfolio",
    description: "Modern personal portfolio showcasing my projects, skills, and experience, built with a focus on clean design, smooth interactions, and real-world full-stack functionality.",
    image: "/images/project-1.png",
    tech: ["React", "Express", "API", "MongoDB", "NodeJS", "tailwindCSS"],
    year: "2026",
    type: "Web App",
    status: "Completed",
    featured: true,
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

export default function Work() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="work"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(14,165,233,0.07) 0%, transparent 60%), linear-gradient(180deg, #18181b 0%, #18181b 100%)",
      }}
    >
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900/80 to-transparent pointer-events-none" />

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="headline-2">{"Projects I'm Proud Of"}</h2>
            <p className="text-zinc-400 mt-2 max-w-xl">
              Selected projects showcasing my best work.
            </p>
          </div>
          <Link to="/work" className="mt-4 md:mt-0 text-sky-400 hover:underline">
            View All Projects
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", "Full Stack", "Frontend"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className="px-5 py-2 rounded-full text-sm capitalize bg-zinc-900 text-zinc-400 border border-zinc-700 transition-all duration-300 hover:bg-sky-400 hover:text-black hover:border-sky-400"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards — grid keeps all cards equal width */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-2xl bg-zinc-800/30 backdrop-blur-xl border border-white/8 rounded-2xl px-10 py-8">
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
