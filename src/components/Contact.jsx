import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

export default function Contact() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const cardRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(headingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(subTextRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(cardRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.4")
      .fromTo(ctaRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3");

    gsap.to(cardRef.current, {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.5,
    });

    return () => {
      gsap.killTweensOf([
        headingRef.current,
        subTextRef.current,
        cardRef.current,
        ctaRef.current,
      ]);
    };
  }, []);

  return (
    <section id="contact" className="relative bg-zinc-900 text-white section">

      {/* Animated Sky Gradient Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-gradient-to-t from-sky-900/20 via-zinc-900/0 to-zinc-900/50 w-full h-full animate-[pulse_20s_linear_infinite]" />
      </div>

      {/* Soft Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[600px] h-[600px] bg-sky-500/10 blur-3xl rounded-full mt-40" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10">

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
              <div>
                <h2 className="text-xl sm:text-2xl font-medium mb-4 text-sky-400">
                  Get in Touch
                </h2>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  I am currently open to freelance projects,
                  collaborations, and frontend opportunities.
                </p>
                <div className="bg-zinc-800/60 border border-sky-400/20 rounded-xl p-4">
                  <p className="text-sm text-zinc-300">
                    I typically respond within{" "}
                    <span className="text-sky-400 font-medium">24 hours</span>.
                    For urgent inquiries, feel free to connect via
                    LinkedIn or email directly.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-zinc-500 mb-3">Connect with me</p>
                <div className="flex flex-wrap gap-4 text-zinc-400">
                  <a
                    href="https://github.com/kobby1919"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400 transition text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/kwabena-junior-12b185294"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400 transition text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/TheSynthJay"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400 transition text-sm"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <form
              action="https://forminit.com/f/nvjdlyeh3ah"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput
                  label="Name"
                  name="fi-sender-fullName"
                  placeholder="Your name"
                />
                <FormInput
                  label="Email"
                  name="fi-sender-email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <FormTextarea
                label="Message"
                name="fi-text-message"
                placeholder="Tell me about your project..."
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:bg-sky-500/20 transition duration-300 text-sm font-medium"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

        {/* BOTTOM CTA */}
        <div
          ref={ctaRef}
          style={{ opacity: 0 }}
          className="mt-6 flex justify-center"
        >
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
                href="/cv.pdf"
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
