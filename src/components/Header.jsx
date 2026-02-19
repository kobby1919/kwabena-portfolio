import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Work", link: "/work" },
  { label: "Contact", link: "/contact" },
];

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll to toggle frosted glass
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const handleNav = (e, link) => {
    e.preventDefault();
    navigate(link);
    setNavOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-900/80 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.svg"
            width={44}
            height={44}
            alt="Kwabena Junior"
            className="opacity-90"
          />
          <span className="text-white font-semibold text-sm hidden sm:block">
            Mr. Junior
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, link }) => (
            <a
              key={link}
              href={link}
              onClick={(e) => handleNav(e, link)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === link
                  ? "text-sky-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {label}
              {/* Active underline dot */}
              {location.pathname === link && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400" />
              )}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/50 transition-all duration-300 text-sm font-medium"
        >
          {"Let's Talk"}
          <span className="material-symbols-rounded text-[15px]">arrow_forward</span>
        </Link>

        {/* MOBILE BURGER */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/50 border border-white/10 text-white transition-all duration-300 hover:bg-zinc-700/50"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="material-symbols-rounded text-[20px]">
            {navOpen ? "close" : "menu"}
          </span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          navOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-zinc-900/95 backdrop-blur-xl border-t border-white/8 px-4 py-4 flex flex-col gap-1">
          {navItems.map(({ label, link }) => (
            <a
              key={link}
              href={link}
              onClick={(e) => handleNav(e, link)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === link
                  ? "bg-sky-500/10 text-sky-400 border border-sky-400/20"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {label}
            </a>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setNavOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:bg-sky-500/20 transition-all duration-300 text-sm font-medium"
          >
            {"Let's Talk"}
            <span className="material-symbols-rounded text-[15px]">arrow_forward</span>
          </Link>
        </div>
      </div>

    </header>
  );
}

export default Header;
