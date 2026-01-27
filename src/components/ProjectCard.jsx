import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ProjectCard({ imgSrc, title, tags, projectLink, status, classes }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={
        "relative group rounded-3xl overflow-hidden bg-zinc-900/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-transform duration-400 transform hover:-translate-y-2 hover:scale-105 " +
        classes
      }
    >
      {/* Project image / background */}
      <figure className="overflow-hidden rounded-2xl aspect-video bg-zinc-800 flex items-center justify-center">
        {imgSrc && (
          <motion.img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="img-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Title centered in middle */}
        <figcaption className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-xl z-10 px-4">
          {title}
        </figcaption>
      </figure>

      {/* Tags at bottom-right */}
      {tags && tags.length > 0 && (
        <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 z-10">
          {tags.map((label, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-sky-400/20 text-sky-400 text-sm rounded-full backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {/* Overlay for Coming Soon */}
      {status && !projectLink && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-semibold z-20">
          {status}
        </div>
      )}

      {/* Live link button */}
      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-sky-400 grid place-items-center text-zinc-900 hover:bg-sky-500 transition-colors z-20"
        >
          <span className="material-symbols-rounded">arrow_outward</span>
        </a>
      )}
    </motion.div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  status: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
