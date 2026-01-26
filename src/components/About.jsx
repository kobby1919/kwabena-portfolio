import { motion } from "framer-motion";

const aboutStats = [
  { label: "Projects Completed", number: 2, icon: "check_circle" },
  { label: "Years of Experience", number: 2, icon: "school" },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function About() {
  return (
    <section className="section bg-zinc-900" id="about">
      <motion.div
        className="container grid lg:grid-cols-2 gap-10 items-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT */}
        <motion.div variants={fadeUp}>
          <h2 className="headline-2 mb-4 text-sky-400">Who I Am</h2>

          <p className="text-zinc-300 md:text-lg leading-relaxed mb-6">
            Hi, I'm Mr. Junior — a web developer passionate about creating
            sleek, modern websites. I blend creativity with technical expertise
            to deliver digital experiences that are both visually stunning and
            highly functional.
          </p>

          {/* STATS */}
          <motion.div
            variants={stagger}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {aboutStats.map(({ number, label, icon }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-sky-400/20 to-sky-400/10 backdrop-blur-md transition-all"
              >
                <span className="material-symbols-rounded text-sky-400 text-3xl">
                  {icon}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {number}+
                  </h3>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT LOGO */}
        <motion.div
          variants={fadeUp}
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
