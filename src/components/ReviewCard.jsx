import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ReviewCard({ content, name, company }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
        relative w-full max-w-3xl
        p-12
        bg-gradient-to-br from-zinc-900/80 via-zinc-800/50 to-zinc-900/70
        backdrop-blur-md
        shadow-2xl
        flex flex-col justify-between
        overflow-hidden
      "
      style={{
        borderRadius: "0.75rem",
        boxShadow: "0 25px 80px rgba(0,0,0,0.5)"
      }}
    >
      {/* Faint corner lines */}
      <span className="absolute top-3 left-3 w-8 h-1 bg-white/20" />
      <span className="absolute top-3 left-3 w-1 h-8 bg-white/20" />
      <span className="absolute bottom-3 right-3 w-8 h-1 bg-white/20" />
      <span className="absolute bottom-3 right-3 w-1 h-8 bg-white/20" />

      {/* Quote */}
      <span className="material-symbols-rounded text-sky-400 text-6xl mb-8">
        format_quote
      </span>

      {/* Review text */}
      <p className="text-white/90 text-xl leading-relaxed mb-10">{content}</p>

      {/* Footer */}
      <div className="flex items-center gap-5 mt-auto">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center text-white font-semibold text-lg">
          {name
            .split(" ")
            .map((n) => n[0].toUpperCase())
            .slice(0, 2)
            .join("")}
        </div>

        {/* Name & Company */}
        <div className="flex flex-col">
          <span className="text-white font-semibold text-lg">{name}</span>
          <span className="text-white/50 text-sm">{company}</span>
        </div>
      </div>
    </motion.div>
  );
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;