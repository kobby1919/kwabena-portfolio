import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewCard from "./ReviewCard";

gsap.registerPlugin(ScrollTrigger);

/* ================= REVIEWS ================= */
const reviews = [
  {
    content: "Clean architecture, solid backend, and great attention to detail.",
    name: "Yev Geny",
    company: "Ghana Atomic Energy Commission",
    imgSrc: "",
  },
  {
    content: "Dependable, disciplined, and always delivers quality work.",
    name: "Mr. Barrigah",
    company: "Links Engineering",
    imgSrc: "",
  },
  {
    content: "An exceptional developer — focused, humble, and consistent.",
    name: "Joseph Nyarko",
    company: "Links Engineering",
    imgSrc: "",
  },
  {
    content: "Always eager to learn and reliable when it matters.",
    name: "Jay",
    company: "Ministry of Health",
    imgSrc: "",
  },
  {
    content: "One of the most impressive developers I’ve worked with.",
    name: "Lartey Gabriel",
    company: "Cyber Hawk",
    imgSrc: "",
  },
  {
    content: "Strong problem-solving skills with clean, maintainable code.",
    name: "Randy Aduhene",
    company: "Cyber Hawk",
    imgSrc: "",
  },
];

export default function Review() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  /* ================= BREAKPOINT DETECTION ================= */
  useLayoutEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= DESKTOP GSAP HORIZONTAL SCROLL ================= */
  useLayoutEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(".review-card");

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => Math.max(track.scrollWidth - window.innerWidth, 0);

      // 🚫 Skip if no scrolling needed
      if (getScrollAmount() === 0) return;

      gsap.set(track, { x: 0 });

      // Pin + horizontal scroll
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const centerX = window.innerWidth / 2;
            cards.forEach((card) => {
              const box = card.getBoundingClientRect();
              const distance = Math.abs(centerX - (box.left + box.width / 2));
              const scale = gsap.utils.clamp(0.94, 1.05, 1.05 - distance / 1000);

              gsap.to(card, {
                scale,
                duration: 0.2,
                overwrite: true,
              });
            });
          },
        },
      });

      // Force refresh to fix ultra-wide / large screens
      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  /* ================= RENDER ================= */
  return (
    <section ref={sectionRef} id="reviews" className="section overflow-hidden">
      <div className="container mb-10">
        <h2 className="headline-2">What people say</h2>
      </div>

      <div
        ref={trackRef}
        className={`flex gap-6 px-4 ${
          isMobile
            ? "w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
            : "w-max"
        }`}
      >
        {reviews.map((review, i) => (
          <ReviewCard
            key={i}
            {...review}
            className={isMobile ? "snap-center" : ""}
          />
        ))}
      </div>
    </section>
  );
}
