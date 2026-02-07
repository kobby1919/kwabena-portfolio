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
  const mobileMenuRef = useRef();
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
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

  // Desktop: move active box
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

  const handleClick = (e, link, index) => {
    e.preventDefault();
    lenis?.scrollTo(link, {
      duration: 1.3,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
    setCurrentSection(link.replace("#", ""));
    moveActiveBox(index);

    // Close mobile menu on click
    if (isMobile) setNavOpen(false);
  };

  // Track scroll sections
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.link));
    const triggers = sections.map((section, index) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setCurrentSection(navItems[index].link.replace("#", "")),
        onEnterBack: () =>
          setCurrentSection(navItems[index].link.replace("#", "")),
      }),
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const index = navItems.findIndex(
      (item) => item.link.replace("#", "") === currentSection,
    );
    if (index !== -1) moveActiveBox(index);
  }, [currentSection, isMobile]);

  // Mobile dropdown animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (navOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power3.out" },
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power3.in",
        });
      }
    }
  }, [navOpen]);

  return (
    <nav ref={navRef} className="relative z-50">
      {/* Desktop Navbar */}
      {!isMobile && (
        <div className="flex items-center gap-6 px-6 py-3 relative rounded-full shadow-lg backdrop-blur-md bg-white/10">
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

      {/* Mobile Menu Dropdown */}
      {isMobile && navOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-20 left-0 w-full bg-black/20 backdrop-blur-md shadow-xl flex flex-col px-6 py-4 z-50 rounded-b-3xl overflow-hidden"
          style={{ transform: "translateY(-10px)", opacity: 0 }}
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="w-full text-left text-white/90 text-lg font-medium py-3 transition-all duration-400"
              style={{
                opacity: 0,
                transform: "translateY(-10px)",
                animation: `fadeSlideIn 0.4s forwards ${i * 0.05}s`,
              }}
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
