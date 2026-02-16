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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={goToCaseStudy}
      className="group relative cursor-pointer bg-white/5 backdrop-blur-lg border border-white/10 
                 rounded-2xl overflow-hidden transition-all duration-300 
                 hover:border-sky-400/40 hover:bg-sky-400/5 w-full "
    >
      {/* ===== TOP INDICATORS ===== */}
      <div className="absolute top-4 left-4 z-10">
        {featured && (
          <span className="px-3 py-1 text-xs bg-sky-400/20 text-sky-400 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="text-xs text-white/60">{status}</span>
      </div>

      {/* ===== IMAGE ===== */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Hover Icons */}
        <div className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover:opacity-100 transition duration-300">

          {/* GitHub Icon */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-black/70 transition"
          >
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
          </a>

          {/* Live Website Arrow */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-black/70 transition"
          >
            <span className="material-symbols-rounded text-white text-sm">
              open_in_new
            </span>
          </a>

        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="p-6 text-left">

        {/* Type + Year */}
        <div className="flex justify-between text-xs text-white/60 mb-2">
          <span>{type}</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">calendar_month</span>
            {year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-white/60 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((stack, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Buttons (Centered) */}
        <div className="flex justify-center gap-4 mb-4">

          {/* Live Demo */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full 
                       bg-sky-400/20 text-sky-400 hover:bg-sky-400/30 transition"
          >
            <span className="material-symbols-rounded text-sm">visibility</span>
            Live Demo
          </a>

          {/* Code */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full 
                       bg-white/10 text-white hover:bg-white/20 transition"
          >
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="w-4 h-4"
            />
            Code
          </a>

        </div>

        {/* Case Study (Centered) */}
        <div className="flex justify-center mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/projects/${slug}`);
            }}
            className="flex items-center gap-2 text-sm text-sky-400 hover:gap-3 transition-all duration-300"
          >
            View Case Study
            <span className="material-symbols-rounded text-sm">
              arrow_forward
            </span>
          </button>
        </div>

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