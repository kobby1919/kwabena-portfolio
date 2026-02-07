import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar({ navOpen, setNavOpen }) {
  const lenis = useLenis();
  const navRef = useRef(null);
  const activeBox = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  const [currentSection, setCurrentSection] = useState("home");

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact" },
  ];

  // Detect hover capability (REAL device detection — fixes touch laptops)
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
  }, []);

  // Move active box (desktop only)
  const moveActiveBox = (index) => {
    if (!canHover) return;

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

  // Click handler
  const handleClick = (e, link, index) => {
    e.preventDefault();

    lenis?.scrollTo(link, {
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    setCurrentSection(link.replace("#", ""));
    moveActiveBox(index);

    // close mobile menu
    setNavOpen(false);
  };

  // Scroll tracking
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.link)
    );

    const triggers = sections.map((section, index) => {
      if (!section) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          setCurrentSection(navItems[index].link.replace("#", "")),
        onEnterBack: () =>
          setCurrentSection(navItems[index].link.replace("#", "")),
      });
    });

    return () => triggers.forEach((t) => t && t.kill());
  }, []);

  useEffect(() => {
    const index = navItems.findIndex(
      (item) => item.link.replace("#", "") === currentSection
    );
    if (index !== -1) moveActiveBox(index);
  }, [currentSection, canHover]);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (navOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [navOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] rounded-full backdrop-blur-md bg-white/10 shadow-lg"
    >
      {/* Desktop */}
      {canHover && (
        <div className="flex items-center gap-6 px-6 py-3 relative">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              ref={(el) => (linksRef.current[i] = el)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                currentSection === item.link.replace("#", "")
                  ? "text-cyan-400"
                  : "text-white/80 hover:text-cyan-400"
              }`}
              onClick={(e) => handleClick(e, item.link, i)}
            >
              {item.label}
            </a>
          ))}

          <div
            ref={activeBox}
            className="absolute bg-cyan-400/20 rounded-full pointer-events-none z-[-1]"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {!canHover && navOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-20 left-0 w-full px-6 py-6 flex flex-col gap-4 backdrop-blur-md bg-black/80 z-[120]"
        >
          <button
            onClick={() => setNavOpen(false)}
            className="self-end text-white text-xl"
          >
            ✕
          </button>

          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-lg text-white/90 hover:text-cyan-400 transition-colors duration-300"
              onClick={(e) => handleClick(e, item.link, i)}
            >
              {item.label}
            </a>
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
