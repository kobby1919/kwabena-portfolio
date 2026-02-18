import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ navOpen, setNavOpen }) {
  const navRef = useRef();
  const activeBox = useRef();
  const linksRef = useRef([]);
  const mobileMenuRef = useRef();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Work", link: "/work" },
    { label: "Reviews", link: "/reviews" },
    { label: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleClick = (e, item, index) => {
    e.preventDefault();
    navigate(item.link); // navigate via route
    if (isMobile) setNavOpen(false);
  };

  // Update active box when route changes
  useEffect(() => {
    const index = navItems.findIndex((i) => i.link === location.pathname);
    if (index !== -1) moveActiveBox(index);
  }, [location.pathname, isMobile]);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (navOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power3.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
      });
    }
  }, [navOpen]);

  return (
    <nav ref={navRef} className="relative z-50">
      {!isMobile && (
        <div className="flex items-center gap-6 px-6 py-3 relative rounded-full shadow-lg backdrop-blur-md bg-white/10">
          {navItems.map((item, i) => (
            <a
              key={i}
              ref={(el) => (linksRef.current[i] = el)}
              className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:text-cyan-400 cursor-pointer ${
                location.pathname === item.link
                  ? "text-cyan-400 font-semibold"
                  : "text-white/80"
              }`}
              onClick={(e) => handleClick(e, item, i)}
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

      {isMobile && navOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-20 left-0 w-full bg-black/20 backdrop-blur-md shadow-xl flex flex-col px-6 py-4 z-50 rounded-b-3xl overflow-hidden"
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              className="w-full text-left text-white/90 text-lg font-medium py-3 transition-all duration-400"
              style={{
                opacity: 0,
                transform: "translateY(-10px)",
                animation: `fadeSlideIn 0.4s forwards ${i * 0.05}s`,
              }}
              onClick={(e) => handleClick(e, item, i)}
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