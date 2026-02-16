import { motion } from "framer-motion";

function getProgressColor(level) {
  if (level < 50) return "bg-red-500";
  if (level < 70) return "bg-amber-400";
  if (level < 85) return "bg-sky-400";
  return "bg-emerald-400";
}

function getTextColor(level) {
  if (level < 50) return "text-red-400";
  if (level < 70) return "text-amber-400";
  if (level < 85) return "text-sky-400";
  return "text-emerald-400";
}

function getSkillLabel(level) {
  if (level < 50) return "Beginner";
  if (level < 70) return "Intermediate";
  if (level < 85) return "Advanced";
  return "Expert";
}

function SkillCard({ skill }) {
  const barColor = getProgressColor(skill.level);
  const textColor = getTextColor(skill.level);
  const skillLabel = getSkillLabel(skill.level);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 
                 hover:border-sky-400 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img src={skill.imgSrc} alt={skill.label} className="w-10 h-10" />
        <h3 className="text-lg font-semibold">{skill.label}</h3>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {skill.desc}
      </p>

      {/* Progress Section */}
      <div>
        <div className="flex justify-between text-xs text-zinc-400 mb-2">
          <span>Proficiency</span>
          <span className={`font-medium ${textColor}`}>
            {skill.level}%
          </span>
        </div>

        <div className="relative w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`relative h-full ${barColor} rounded-full overflow-hidden`}
          >
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-1/2 h-full 
                         bg-gradient-to-r 
                         from-transparent 
                         via-white/30 
                         to-transparent"
            />
          </motion.div>
        </div>

        {/* Skill Level Label */}
        <div className="mt-3 text-xs">
          <span className={`px-3 py-1 rounded-full ${textColor} bg-zinc-800`}>
            {skillLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;