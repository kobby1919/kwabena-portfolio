import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ProjectCard({ imgSrc, title, tags, projectLink, classes }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={
        "relative group rounded-3xl overflow-hidden bg-zinc-900/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-transform duration-400 transform hover:-translate-y-2 hover:scale-105 " +
        classes
      }
    >
      {/* Project image */}
      <figure className="overflow-hidden rounded-2xl aspect-video">
        <motion.img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      </figure>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        {/* Tags slide up */}
        <div className="flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {tags.map((label, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-sky-400/20 text-sky-400 text-sm rounded-full backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Visit button */}
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            className="mt-3 w-10 h-10 rounded-full bg-sky-400 grid place-items-center text-zinc-900 hover:bg-sky-500 transition-colors"
          >
            <span className="material-symbols-rounded">arrow_outward</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
