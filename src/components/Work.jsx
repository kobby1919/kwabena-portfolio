import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
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
  {
    title: "Music Streaming App",
    description: "Modern music streaming platform with API integration.",
    image: "/images/project-1.jpg",
    tech: ["React", "Express", "API"],
    year: "2026",
    type: "Web App",
    status: "Coming soon",
    slug: "music-app",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
    category: "Frontend",
  },
];

export default function Work() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="section">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="headline-2">Projects I’m Proud Of</h2>
            <p className="text-zinc-400 mt-2 max-w-xl">
              Selected projects showcasing my best work.
            </p>
          </div>

          <a
            href="/projects"
            className="mt-4 md:mt-0 text-sky-400 hover:underline"
          >
            View All Projects →
          </a>
        </div>

        {/* Filter Buttons */}
       {/* Filter Buttons (Skills-style) */}
<div className="flex flex-wrap gap-3 mb-10">
  {["All", "Full Stack", "Frontend"].map((item) => (
    <button
      key={item}
      onClick={() => setFilter(item)}
      className={`
        px-5 py-2 
        rounded-full 
        text-sm 
        capitalize
        bg-zinc-900 
        text-zinc-400 
        border border-zinc-700
        transition-all duration-300
        hover:bg-sky-400 hover:text-black hover:border-sky-400
      `}
    >
      {item}
    </button>
  ))}
</div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-start">
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

      </div>
    </section>
  );
}