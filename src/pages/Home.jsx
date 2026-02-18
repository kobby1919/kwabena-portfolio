import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/skill";
import Work from "../components/Work";
import Review from "../components/Review";
import Contact from "../components/Contact";
import useScrollReveal from "../hooks/useScrollReveal";
import ContactCTA from "../components/ContactCTA";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
    <main>
      <Hero />
      <Skill />
      <Work />
      <Review />
    </main>
  );
}