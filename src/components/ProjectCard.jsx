import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectCard({
  title,
  description,
  image,
  tech,
  year,
  type,
  status,
  featured,
  slug,
  live,
  github,
}) {
  const navigate = useNavigate();

  const goToCaseStudy = () => {
    navigate(`/projects/${slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onClick={goToCaseStudy}
      className="group relative cursor-pointer w-full rounded-3xl overflow-hidden
                 border border-white/8 bg-white/4 backdrop-blur-2xl
                 hover:border-sky-400/30 hover:bg-white/6
                 transition-all duration-500 shadow-xl shadow-black/30"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ boxShadow: "inset 0 0 60px rgba(56,189,248,0.06)" }}
      />

      {/* ===== IMAGE SECTION ===== */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-90"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase
                             bg-sky-400/20 text-sky-300 rounded-full border border-sky-400/30
                             backdrop-blur-md">
              Featured
            </span>
          </div>
        )}

        {/* Status */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs text-white/50 bg-black/40 rounded-full backdrop-blur-md border border-white/10">
            {status}
          </span>
        </div>

        {/* Hover action icons on image */}
        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-2 opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-300">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 flex items-center justify-center
                       bg-black/60 backdrop-blur-md rounded-full border border-white/10
                       hover:border-white/30 hover:bg-black/80 transition"
          >
            <img src="/images/github.svg" alt="GitHub" className="w-4 h-4" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 flex items-center justify-center
                       bg-sky-500/30 backdrop-blur-md rounded-full border border-sky-400/30
                       hover:bg-sky-500/50 transition"
          >
            <span className="material-symbols-rounded text-sky-300 text-sm">open_in_new</span>
          </a>
        </div>

        {/* Year tag bottom-left on image */}
        <div className="absolute bottom-4 left-4">
          <span className="text-xs text-white/40 flex items-center gap-1">
            <span className="material-symbols-rounded text-xs">calendar_month</span>
            {year}
          </span>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="p-6 flex flex-col gap-4">

        {/* Type tag */}
        <span className="text-xs tracking-widest uppercase text-sky-400/70 font-medium">
          {type}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white leading-snug
                       group-hover:text-sky-100 transition-colors duration-300"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}>
          {title}
        </h3>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-sky-400/30 via-white/10 to-transparent" />

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((stack, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full
                         bg-white/5 border border-white/8 text-white/50
                         group-hover:border-sky-400/20 group-hover:text-white/70
                         transition-all duration-300"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* ===== BUTTONS ===== */}
        <div className="flex gap-3 mt-1">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                       text-xs font-medium rounded-xl
                       bg-sky-400/10 text-sky-300 border border-sky-400/20
                       hover:bg-sky-400/20 hover:border-sky-400/40 transition-all duration-300"
          >
            <span className="material-symbols-rounded text-sm">visibility</span>
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                       text-xs font-medium rounded-xl
                       bg-white/5 text-white/60 border border-white/8
                       hover:bg-white/10 hover:text-white/80 transition-all duration-300"
          >
            <img src="/images/github.svg" alt="GitHub" className="w-4 h-4 opacity-70" />
            Code
          </a>
        </div>

        {/* Case Study link */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${slug}`);
          }}
          className="w-full flex items-center justify-center gap-2
                     text-xs text-white/30 hover:text-sky-400
                     py-2 rounded-xl border border-transparent
                     hover:border-sky-400/20 hover:bg-sky-400/5
                     transition-all duration-300 group/btn"
        >
          View Case Study
          <span className="material-symbols-rounded text-sm
                           translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </button>

      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tech: PropTypes.array,
  year: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.string,
  featured: PropTypes.bool,
  slug: PropTypes.string,
  live: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectCard;

