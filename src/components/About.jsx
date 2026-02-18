import { motion } from "framer-motion";

const aboutStats = [
  { label: "Projects Completed", number: 2, icon: "check_circle" },
  { label: "Years of Experience", number: 2, icon: "school" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const statItem = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statsStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 0% 50%, rgba(14,165,233,0.06) 0%, transparent 60%), linear-gradient(180deg, #18181b 0%, #18181b 100%)",
      }}
    >
      {/* Top edge fade from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none" />

      {/* Bottom edge fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />

      <motion.div
        className="container grid lg:grid-cols-2 gap-10 items-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            variants={slideLeft}
            className="headline-2 mb-4 text-sky-400"
          >
            Who I Am
          </motion.h2>

          <motion.p
            variants={slideRight}
            className="text-zinc-300 md:text-lg leading-relaxed mb-6"
          >
            {"Hi, I'm Samuel Kwabena Assan — a web developer passionate about creating sleek, modern websites. I blend creativity with technical expertise to deliver digital experiences that are both visually stunning and highly functional."}
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={statsStagger}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {aboutStats.map(({ number, label, icon }, i) => (
              <motion.div
                key={i}
                variants={statItem}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-sky-400/20 to-sky-400/10 backdrop-blur-md border border-white/10 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-sky-400/20"
              >
                <div className="absolute inset-0 rounded-2xl bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 material-symbols-rounded text-sky-400 text-3xl">
                  {icon}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {number}+
                  </h3>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT LOGO */}
        <motion.div
          variants={slideRight}
          className="hidden lg:flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative w-64 h-64 rounded-3xl overflow-hidden bg-gradient-to-t from-sky-400/20 to-sky-400/5 flex items-center justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="opacity-90"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
