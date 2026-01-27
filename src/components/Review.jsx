import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewCard from "./ReviewCard";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    content:
      "Impressive work! He built a fully-fledged backend for our school management system, and it’s clear the frontend will be just as solid. He is talented, disciplined, and delivers quality in everything he does.",
    name: "Yev Geny",
    imgSrc: "",
    company: "Ghana Atomic Energy Commision",
  },
  {
    content:
      "I’ve known Samuel even before he chose to pursue a career in software development. He is dependable, never complains, and always ensures every task assigned to him is completed on time and to a high standard. He also played a key role in building the backend of our school management system using PHP.",
    name: "Mr. Barrigah",
    imgSrc: "",
    company: "Links Engineering, Co Founder",
  },
  {
    content:
      "Samuel’s time at Links Engineering was never wasted. He is one of those exceptional developers who truly excels at what he knows and does. Humble, dedicated, and always willing to learn, he consistently gives his best in every task.",
    name: "Mr. Joseph Nyarko",
    imgSrc: "",
    company: "Links Engineering, CEO",
  },
  {
    content:
      "Junior was my colleague at Links Engineering. He was always eager to learn, which is one of the qualities I admired most about him. He also supported me on several occasions, especially with tasks assigned to me during our time at Links Engineering.",
    name: "Jay",
    imgSrc: "",
    company: "Ministry of Health",
  },
  {
    content:
      "Samuel and I were accepted into Links Engineering at the same time. All I can say is that he is one of the most exceptional developers I have ever met.",
    name: "Lartey Gabriel",
    imgSrc: "",
    company: "Cyber Hawk(Intern)",
  },
  {
    content:
      "Outstanding project delivery with clean, high-quality code, responsive design, and strong problem-solving skills.",
    name: "Randy Aduhene",
    imgSrc: "",
    company: "Cyber Hawk",
  },
];

export default function Review() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const gsapTweenRef = useRef(null);
  const scrollTriggerRef = useRef(null); // scoped ScrollTrigger
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const prevMode = useRef(isMobile);

  // Detect breakpoint changes
  useLayoutEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile !== prevMode.current) {
        prevMode.current = mobile;
        setIsMobile(mobile);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP horizontal scroll (scoped safely)
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(".review-card");

    // Kill previous tween + trigger (only this section)
    if (gsapTweenRef.current) gsapTweenRef.current.kill();
    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    cards.forEach((card) => gsap.set(card, { scale: 1, opacity: 1 }));

    if (isMobile) return; // Skip GSAP on mobile

    const getScrollAmount = () => Math.max(track.scrollWidth - window.innerWidth, 0);

    // Initialize GSAP tween for review section only
    const tween = gsap.to(track, {
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
          const center = window.innerWidth / 2;
          cards.forEach((card) => {
            const box = card.getBoundingClientRect();
            const cardCenter = box.left + box.width / 2;
            const distance = Math.abs(center - cardCenter);
            const scale = gsap.utils.clamp(0.92, 1.05, 1.05 - distance / 600);
            const opacity = gsap.utils.clamp(0.5, 1, 1 - distance / 800);
            gsap.to(card, { scale, opacity, duration: 0.2, overwrite: true });
          });
        },
      },
    });

    gsapTweenRef.current = tween;
    scrollTriggerRef.current = tween.scrollTrigger;

    return () => {
      if (gsapTweenRef.current) gsapTweenRef.current.kill();
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="reviews" className="section overflow-hidden">
      <div className="container mb-8">
        <h2 className="headline-2 reveal-up">What our customers say</h2>
      </div>

      <div
        ref={trackRef}
        className={`scrub-slide flex gap-4 px-4 ${
          isMobile
            ? "w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
            : "w-max"
        }`}
      >
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} className={isMobile ? "snap-center" : ""} />
        ))}
      </div>
    </section>
  );
}
