import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const socials = [
  { label: "GitHub", href: "https://github.com/kobby1919", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor"/></svg>
  )},
  { label: "LinkedIn", href: "https://linkedin.com/in/kwabena-junior-12b185294", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor"/></svg>
  )},
  { label: "Twitter", href: "https://x.com/TheSynthJay", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor"/></svg>
  )},
];

const contactInfo = [
  { icon: "mail", label: "Email", value: "samuelassanjnr@gmail.com", href: "mailto:samuelassanjnr@gmail.com" },
  { icon: "location_on", label: "Location", value: "Accra, Ghana", href: null },
  { icon: "schedule", label: "Response Time", value: "Within 24 hours", href: null },
];

export default function Contact() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(subTextRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(cardRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.4");

    gsap.to(cardRef.current, {
      y: -10, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5,
    });

    return () => gsap.killTweensOf([headingRef.current, subTextRef.current, cardRef.current]);
  }, []);

  return (
    <section id="contact" className="relative bg-zinc-900 text-white section">

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-gradient-to-t from-sky-900/20 via-zinc-900/0 to-zinc-900/50 w-full h-full" />
      </div>
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[600px] h-[600px] bg-sky-500/10 blur-3xl rounded-full mt-40" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-2">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h1
            ref={headingRef}
            style={{ opacity: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            {"Let's Build Something "}
            <span className="bg-gradient-to-r from-sky-400/80 to-sky-300/60 bg-clip-text text-transparent">
              Incredible
            </span>
          </h1>
          <p
            ref={subTextRef}
            style={{ opacity: 0 }}
            className="text-zinc-400 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed px-2"
          >
            Whether you are launching a startup, refining a product,
            or exploring new ideas, let us create something meaningful.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div
          ref={cardRef}
          style={{ opacity: 0 }}
          className="bg-zinc-800/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT */}
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium mb-3 text-sky-400">Get in Touch</h2>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    I am currently open to freelance projects,
                    collaborations, and fullstack opportunities.
                  </p>
                </div>

                {/* Contact info rows */}
                <div className="space-y-3">
                  {contactInfo.map(({ icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-white/6">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-rounded text-sky-400 text-base">{icon}</span>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs">{label}</p>
                        {href ? (
                          <a href={href} className="text-zinc-300 text-sm hover:text-sky-400 transition-colors duration-300">{value}</a>
                        ) : (
                          <p className="text-zinc-300 text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social icon buttons */}
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Connect with me</p>
                <div className="flex gap-2">
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-full
                                 border border-white/10 text-zinc-400
                                 hover:border-sky-400/40 hover:text-sky-400
                                 transition-all duration-300"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <form action="https://forminit.com/f/nvjdlyeh3ah" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput label="Name" name="fi-sender-fullName" placeholder="Your name" />
                <FormInput label="Email" name="fi-sender-email" type="email" placeholder="your@email.com" />
              </div>
              <FormTextarea label="Message" name="fi-text-message" placeholder="Tell me about your project..." required />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                           bg-sky-500/10 border border-sky-400/30 text-sky-300
                           hover:bg-sky-500/20 hover:border-sky-400/50
                           transition-all duration-300 text-sm font-medium"
              >
                <span className="material-symbols-rounded text-base">send</span>
                Send Message
              </button>
            </form>

          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-6 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-2xl bg-zinc-800/30 backdrop-blur-xl border border-white/8 rounded-2xl px-6 sm:px-10 py-6 sm:py-8">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg sm:text-xl tracking-tight">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-zinc-500 text-sm mt-1">
                Let us turn your ideas into reality together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="mailto:samuelassanjnr@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/50 transition-all duration-300 text-sm font-medium"
              >
                <span className="material-symbols-rounded text-[15px]">mail</span>
                Email Me
              </a>
              <a
                href="/files/Samuel-Kwabena-Assan-CV.pdf.pdf"
                download
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-zinc-700/40 border border-white/10 text-zinc-300 hover:bg-zinc-700/60 transition-all duration-300 text-sm font-medium"
              >
                <span className="material-symbols-rounded text-[15px]">download</span>
                Download CV
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
