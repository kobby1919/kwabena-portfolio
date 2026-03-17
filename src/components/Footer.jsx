import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const siteLinks = [
  { label: "Case Studies", href: "/projects/personal-portfolio" },
  { label: "Download CV", href: "/files/Samuel-Kwabena-Assan-CV.pdf.pdf" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kobby1919",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kwabena-junior-12b185294/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Twitter X",
    href: "https://x.com/TheSynthJay",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" />
      </svg>
    ),
  },
   {
    label: "Telegram",
    href: "https://t.me/JayPipz",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8L15.11 15.96C15 16.5 14.67 16.63 14.21 16.37L11.96 14.72L10.88 15.76C10.76 15.88 10.65 15.98 10.41 15.98L10.57 13.69L14.84 9.85C15.02 9.69 14.8 9.6 14.56 9.76L9.27 13.08L7.05 12.39C6.52 12.22 6.51 11.86 7.16 11.6L16.01 8.17C16.45 8.01 16.84 8.27 16.64 8.8Z" fill="currentColor"/>
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="relative bg-zinc-900 border-t border-white/6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-sky-900/5 to-zinc-900 pointer-events-none" />

      <div className="container relative z-10 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">

          {/* LEFT — Profile + bio + socials */}
          <div className="flex flex-col gap-5">

            {/* Avatar + name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                <img
                  src="/images/new_avatar.jpg"
                  alt="Samuel Kwabena Assan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Samuel Kwabena Assan</p>
                <p className="text-zinc-500 text-xs mt-0.5">Fullstack Developer</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Hey! I'm Samuel, a backend-focused fullstack developer crafting clean,
              scalable digital experiences using Node.js, React, and modern web technologies.
              Based in Ghana 🇬🇭, available worldwide.
            </p>

            {/* Email */}
            <p className="text-sm text-zinc-500">
              Email:{" "}
              <a
                href="mailto:samuelassanjnr@gmail.com"
                className="text-zinc-300 hover:text-sky-400 transition-colors duration-300"
              >
                samuelassanjnr@gmail.com
              </a>
            </p>

            {/* Socials */}
            <div className="flex gap-2 mt-1">
              {socials.map(({ label, href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full
                             border border-white/10 text-zinc-400
                             hover:border-sky-400/40 hover:text-sky-400
                             transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE — Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Site Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Site Links</h3>
            <ul className="space-y-3">
              {siteLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bible verse */}
        <div className="mt-12 py-8 border-t border-white/6 flex flex-col items-center text-center gap-2">
          <span className="material-symbols-rounded text-sky-400/40 text-2xl">menu_book</span>
          <p className="text-zinc-500 text-sm italic max-w-lg leading-relaxed">
            "Trust in the Lord with all your heart and lean not on your own understanding;
            in all your ways submit to him, and he will make your paths straight."
          </p>
          <p className="text-zinc-600 text-xs">— Proverbs 3:5-6</p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>&copy; 2026 Samuel Kwabena Assan. All rights reserved.</p>
          <p>Designed & built by Samuel Kwabena Assan</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
