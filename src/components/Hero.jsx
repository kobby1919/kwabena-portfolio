import { useEffect, useState } from "react";
import { words } from "../constants";
import { ButtonPrimary, ButtonOutline } from "./Button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeInImage = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


function Hero() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <motion.section
      id="home"
      className="pt-28 lg:pt-36"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {!isMobile && <ParticlesBackground />}


      <div className="container lg:grid items-center lg:grid-cols-2 lg:gap-10 relative z-10">
        {/* LEFT COLUMN */}
        <motion.div
          className="flex flex-col justify-center gap-3 w-full lg:max-w-[480px]"
          variants={container}
        >
          {/* Available for work */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/jay's-avatar.jpg"
                width={40}
                height={40}
                alt="Kwabena Junior portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="flex items-center gap-2 px-3 py-1 text-xs bg-sky-400/10 text-sky-300 rounded-full border border-sky-400/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8] animate-pulse"></span>
                Currently open to work
              </span>
            </div>
          </motion.div>

          {/* HERO TEXT */}
          <motion.div variants={fadeUp} className="hero-text flex flex-col">
            <h1 className="relative flex items-center mb-0.5">
              Engineering
              <span className="slide flex-shrink-0 inline-block overflow-hidden h-[2em] md:h-[2.5em] ml-2 align-middle">
                <span className="wrapper animate-slide flex flex-col">
                  {words.map((word, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 md:gap-2 pb-1 whitespace-nowrap flex-shrink-0"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="w-7 h-7 md:w-10 md:h-10 p-1 rounded-full bg-white"
                      />
                      <span className="whitespace-nowrap">{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1 className="mb-0.5">into Scalable,</h1>
            <h1 className="mb-4">Real-World Solutions</h1>
          </motion.div>

          {/* BUTTONS */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <ButtonPrimary
  label="Download CV"
  icon="download"
  classes="hover:scale-[1.03] active:scale-[0.97] transition-transform"
/>


            
              <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
                classes="hover:scale-[1.03] active:scale-[0.97] transition-transform"
                
              />
            
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - IMAGE */}
        <motion.div
          className="hidden lg:block relative"
          variants={fadeInImage}
        >
          <div className="absolute -inset-4 bg-sky-400/20 blur-2xl opacity-60 rounded-full"></div>

          <figure className="relative w-full max-w-[480px] ml-auto rounded-[50px] overflow-hidden">
            <img
              src="/images/adobe-jay.png"
              alt="Kwabena Junior"
              className="w-full"
            />
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
