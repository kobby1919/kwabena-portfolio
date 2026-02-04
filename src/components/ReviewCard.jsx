import PropTypes from "prop-types";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Helper: get initials from name
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join("");
};

function ReviewCard({ content, name, company, className = "" }) {
  const initials = getInitials(name);

  return (
    <motion.article
      variants={cardVariants}
      className={`
        review-card
        group relative flex-shrink-0
        w-[260px] md:w-[300px]
        min-h-[220px]
        rounded-3xl
        border border-white/10
        bg-gradient-to-br from-white/8 via-white/4 to-transparent
        p-5
        flex flex-col
        transition-all duration-300
        hover:-translate-y-2
        hover:border-sky-400
        hover:bg-gradient-to-br hover:from-sky-400/10 hover:via-sky-400/5
        ${className}
      `}
    >
      {/* Glow accent */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-sky-400/10 via-sky-400/5 to-transparent" />

      {/* Review text */}
      <p className="text-sm leading-relaxed text-white/80 mb-4 flex-1">
        {content}
      </p>

      {/* Footer: initials + name/company */}
      <div className="mt-auto flex items-center gap-3">
        {/* Initials avatar */}
        <div className="w-10 h-10 rounded-full bg-sky-400/30 flex items-center justify-center text-white font-medium">
          {initials}
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">{name}</h4>
          <p className="text-xs text-white/50">{company}</p>
        </div>
      </div>
    </motion.article>
  );
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ReviewCard;
