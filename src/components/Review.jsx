import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewCard from "./ReviewCard";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/images/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/images/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/images/people-3.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/images/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: '/images/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/images/people-6.jpg',
    company: 'Skyline Digital'
  }
];

export default function Review() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(".review-card");

    const getScrollAmount = () => track.scrollWidth - window.innerWidth;

    const initSlide = () => {
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
            // Center-focus animation
            const center = window.innerWidth / 2;
            cards.forEach(card => {
              const box = card.getBoundingClientRect();
              const cardCenter = box.left + box.width / 2;
              const distance = Math.abs(center - cardCenter);

              const scale = gsap.utils.clamp(0.92, 1.05, 1.05 - distance / 600);
              const opacity = gsap.utils.clamp(0.5, 1, 1 - distance / 800);

              gsap.to(card, { scale, opacity, duration: 0.2, overwrite: true });
            });
          }
        },
      });

      ScrollTrigger.refresh();
      return tween;
    };

    // Wait for images to load before initializing GSAP
    const images = track.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach(img => {
      if (img.complete) loadedCount++;
      else img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) initSlide();
      };
    });

    if (loadedCount === images.length) initSlide();

    // Refresh on window resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="reviews" className="section overflow-hidden">
      <div className="container mb-8">
        <h2 className="headline-2 reveal-up">What our customers say</h2>
      </div>

      <div ref={trackRef} className="scrub-slide flex gap-4 px-4 w-max">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </section>
  );
}
