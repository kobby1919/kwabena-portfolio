import PropTypes from "prop-types";

const ratings = new Array(5).fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

function ReviewCard({ content, name, imgSrc, company }) {
  return (
    <div className="review-card flex-shrink-0 min-w-[200px] max-w-[240px] md:min-w-[240px] md:max-w-[280px] min-h-[320px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex flex-col shadow-lg transition-all duration-300 relative group hover:-translate-y-1 hover:shadow-2xl">

      {/* Decorative quote */}
      <div className="absolute top-2 left-3 text-white/10 text-7xl select-none pointer-events-none">“</div>

      {/* Badge / Role */}
      <span className="self-start text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full mb-2">Client</span>

      {/* Stars with gradient */}
      <div className="flex items-center gap-1 mb-2">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-[18px] hover:scale-110 transition-transform duration-200"
            style={{
              ...style,
              background: "linear-gradient(90deg, #FFD700, #FFAA00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Quote content */}
      <p className="text-sm md:text-base text-white/80 leading-snug mb-3 flex-1 break-words">
        {content}
      </p>

      {/* Footer: Avatar + Name + Company + Timestamp */}
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={imgSrc || "https://via.placeholder.com/44"} // fallback image
          alt={name}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover border border-white/10"
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-medium text-white">{name}</h4>
          <p className="text-xs text-white/50 tracking-wide">{company}</p>
          <p className="text-[10px] text-white/40 mt-1">2 months ago</p>
        </div>
      </div>

      {/* Decorative blur circle */}
      <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/5 rounded-full blur-lg pointer-events-none"></div>
    </div>
  );
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
