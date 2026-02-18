import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".reveal-up");

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "-200 bottom",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh(); // recalculates all positions after DOM settles
    });

    return () => ctx.revert();
  }, [location.pathname]);
}