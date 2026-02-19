import { ButtonPrimary, ButtonOutline } from "./Button";
import ParticlesBackground from "./ParticlesBackground";
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];


function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <ParticlesBackground />

      <div className="container lg:grid items-center lg:grid-cols-2 lg:gap-10 relative z-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Kwabena Junior portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          {/* <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">Building Scalable Modern Websites for the Future</h2> */}
          <div className="hero-text">
            <h1 className="relative flex items-center">
              Shaping
              <span className="slide">
                <span className="wrapper animate-slide">
                  {words.map((word, i) => (
                    <span
                      key={i}
                      className="flex items-center md:gap-3 gap-1 pb-2 whitespace-nowrap"
                    >
                      <img
                        src={word.imgPath}
                        alt=""
                        className="xl:size-12 md:size-10 size-7 p-1 rounded-full bg-white/10"
                      />
                      <span className="">{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />{" "}
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/adobe-jay.png"
              width={656}
              height={800}
              alt="Kwabena Junior"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar({ navOpen, setNavOpen }) {
  const lenis = useLenis();
  const navRef = useRef();
  const activeBox = useRef();
  const linksRef = useRef([]);
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact" },
  ];

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move active-box for desktop
  const moveActiveBox = (index) => {
    if (isMobile) return;
    const link = linksRef.current[index];
    if (!link || !activeBox.current || !navRef.current) return;

    const rect = link.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    gsap.to(activeBox.current, {
      top: rect.top - navRect.top,
      left: rect.left - navRect.left,
      width: rect.width,
      height: rect.height,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  // Handle click
  const handleClick = (e, link, index) => {
    e.preventDefault();
    if (isMobile) setNavOpen(false);

    // small delay to allow mobile menu to close smoothly
    setTimeout(() => {
      lenis?.scrollTo(link, {
        duration: 1.3,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
      setCurrentSection(link.replace("#", ""));
      if (!isMobile) moveActiveBox(index);
    }, isMobile ? 100 : 0);
  };

  // Scroll tracking
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.link));
    const triggers = sections.map((section, index) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          setCurrentSection(navItems[index].link.replace("#", "")),
        onEnterBack: () =>
          setCurrentSection(navItems[index].link.replace("#", "")),
      })
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  // Move active box when section changes (desktop only)
  useEffect(() => {
    const index = navItems.findIndex(
      (item) => item.link.replace("#", "") === currentSection
    );
    if (index !== -1) moveActiveBox(index);
  }, [currentSection, isMobile]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300 shadow-lg backdrop-blur-md bg-white/10"
    >
      {/* Desktop */}
      {!isMobile && (
        <div className="flex items-center gap-6 px-6 py-3 relative">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              ref={(el) => (linksRef.current[i] = el)}
              className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:text-cyan-400 cursor-pointer ${
                currentSection === item.link.replace("#", "")
                  ? "text-cyan-400 font-semibold"
                  : "text-white/80"
              }`}
              onClick={(e) => handleClick(e, item.link, i)}
            >
              {item.label}
            </a>
          ))}
          <div
            ref={activeBox}
            className="absolute bg-cyan-400/20 rounded-full pointer-events-none z-0 transition-all duration-300"
          />
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && navOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-50">
          {navItems.map((item, i) => (
            <button
              key={i}
              className={`px-6 py-3 text-lg rounded-md w-3/4 text-center transition-colors duration-300 ${
                currentSection === item.link.replace("#", "")
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "text-white/90 hover:bg-cyan-500/20 hover:text-cyan-400"
              }`}
              onClick={(e) => handleClick(e, item.link, i)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};

export default Navbar;


{
  /* <div className="flex flex-col gap-7">
  <div className="hero-text">
    <h1>Shaping
      <span className="slide">
        <span className="wrapper">
          {words.map((word) => (
            <span className="flex items-center md:gap-3 gap-1 pb-2">
              <img src="" alt="" className="xl:size-12 md:size-10 size-7 md:p2-2 p-1 rounded-full bg-white-50" />
              <span className="">{word.text}</span>
            </span>
          ))}
        </span>
      </span>
    </h1>
    <h1>into Real Projects</h1>
    <h1>that Deliver Results</h1>
  </div>
</div> */
}
