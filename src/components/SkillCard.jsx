import PropTypes from "prop-types";

// function SkillCard({imgSrc, label, desc,classes}) {

//     return (
//        <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group' + classes}>
//         <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
//             <img src={imgSrc} alt={label} width={32} height={32} className="" />
//         </figure>
//         <div>
//             <h3> {label} </h3>
//             <p className="text-zinc-400 text-sm">{desc}</p>
//         </div>
//        </div>
//     )
// }
function SkillCard({ imgSrc, label, desc, classes }) {
  return (
    <div
      className={
        "group relative flex items-center gap-4 rounded-2xl p-4 " +
        "bg-zinc-900/40 border border-white/5 backdrop-blur " +
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/10 " +
        "transition-all duration-300 ease-out " +
        classes
      }
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <figure className="relative z-10 bg-zinc-800 rounded-xl w-12 h-12 p-2 grid place-items-center 
                         group-hover:scale-110 transition-transform duration-300">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>

      {/* Text */}
      <div className="relative z-10">
        <h3 className="font-medium text-white tracking-wide">
          {label}
        </h3>
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}


SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard;