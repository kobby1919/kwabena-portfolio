import CaseStudyTemplate from "../components/CaseStudyTemplate";

const data = {
  meta: {
    title: "Baba & Co Cleaning Agency",
    titleLine1: "Baba & Co",
    titleLine2: "Cleaning Agency",
    image: "/images/project-2.png",
    summary:
      "A full production website for a premium cleaning agency — React SPA with multi-page routing, a fully validated booking system powered by EmailJS, and a polished design system built from scratch in vanilla CSS.",
    stats: [
      { label: "Frontend",    value: "React + Vite" },
      { label: "Routing",     value: "React Router v6" },
      { label: "Animations",  value: "Framer Motion" },
      { label: "Backend",     value: "EmailJS (serverless)" },
    ],
  },

  overview: {
    problem:
      "The client needed a professional online presence that felt premium — not a template. The business model requires a site-visit before pricing, so the booking flow had to communicate that clearly without losing conversion. It also needed to work seamlessly across all devices without a backend to maintain.",
    goal:
      "Design and build a multi-page React site that matches a luxury cleaning brand — navy and gold design system, Playfair Display + DM Sans typography — with a real booking flow that captures client details via EmailJS and routes them directly to the business owner's inbox.",
    phases: [
      { phase: "Phase 1", title: "Design System & CSS Architecture", desc: "Established CSS custom properties for the navy/gold palette, typography scale, spacing tokens, and border-radius system. All components built with vanilla CSS — no utility framework." },
      { phase: "Phase 2", title: "Home Page & Component Library", desc: "Built Hero, Services grid, Why Us, Testimonials carousel, and CTA banner as standalone components. Framer Motion scroll animations and staggered reveals throughout." },
      { phase: "Phase 3", title: "Multi-page Routing", desc: "Migrated from a single-page anchor scroll to React Router v6. Navbar rebuilt with useLocation and useNavigate to handle both page transitions and anchor-scroll fallbacks." },
      { phase: "Phase 4", title: "Services & Booking System", desc: "Full ServicesPage with six expandable service detail sections, FAQs, and a booking modal. EmailJS integrated for serverless form submission — no backend required." },
      { phase: "Phase 5", title: "About, Contact & Footer", desc: "About page with company story, team section, values grid and timeline. Contact page with validated enquiry form. Footer with brand quote, quick links, service links, and social buttons." },
    ],
  },

  techStack: {
    groups: [
      {
        category: "Frontend", color: "sky",
        items: [
          { name: "React 18",           desc: "Component architecture with hooks for all state, side effects, and lifecycle management" },
          { name: "Vite",               desc: "Dev server and build tool — fast HMR and optimised production bundles" },
          { name: "React Router v6",    desc: "Client-side routing with programmatic navigation, location awareness, and anchor-scroll coordination" },
          { name: "Framer Motion",      desc: "Page entry animations, scroll-triggered reveals, staggered card entrances, and the booking modal overlay" },
          { name: "Vanilla CSS",        desc: "Custom design system built with CSS custom properties — full control over every detail without a utility framework" },
        ],
      },
      {
        category: "Integrations", color: "emerald",
        items: [
          { name: "EmailJS",            desc: "Serverless email delivery — booking requests and contact form submissions land in the client's inbox with zero backend" },
          { name: "Lucide React",       desc: "Consistent icon system used across nav, service cards, form fields, and trust badges" },
          { name: "Google Fonts",       desc: "Playfair Display (serif headings) and DM Sans (body) — loaded via CSS @import for the brand's luxury feel" },
        ],
      },
      {
        category: "Architecture", color: "amber",
        items: [
          { name: "CSS Custom Properties", desc: "Full design token system: 6 navy shades, 6 gold shades, 5 radius values, two font stacks — all in :root" },
          { name: "Component Composition", desc: "Shared components (BookingModal, Navbar, Footer) used across all pages — single source of truth" },
          { name: "Serverless Form Layer", desc: "EmailJS removes the need for any server. Booking data is validated client-side then delivered as a formatted email" },
        ],
      },
    ],
    architecture: [
      { label: "Browser",    sub: "React + Vite",        icon: "devices",   color: "sky" },
      { label: "→",          sub: "React Router",         icon: null },
      { label: "Pages",      sub: "Home · Services · About · Contact", icon: "article", color: "emerald" },
      { label: "→",          sub: "EmailJS SDK",           icon: null },
      { label: "Inbox",      sub: "Client Email",          icon: "mail",     color: "amber" },
    ],
  },

  challenges: [
    {
      title: "Booking Modal Drifting to Bottom-Right Corner",
      problem:
        "After integrating Framer Motion's AnimatePresence on the booking modal, it stopped centering and instead appeared pinned to the bottom-right of the screen — even though the CSS clearly had position: fixed, top: 50%, left: 50% with transform: translate(-50%, -50%).",
      discovery:
        "Framer Motion writes its own inline transform style to drive the animation (y: 40, scale: 0.97 on entry). This inline transform completely overrides the CSS transform: translate(-50%, -50%) that was doing the centering. The modal's centering transform gets clobbered before it can take effect, so the element sits at its natural position: top-left of the 50%/50% anchor — which is the bottom-right area of the screen.",
      solution:
        "Removed the transform-based centering entirely from .booking-modal. Instead, wrapped it in a .booking-modal-wrap — a fixed, full-viewport flex container that centers its child with align-items: center + justify-content: center. Framer Motion now only controls the child element's y and scale, with no conflict. The backdrop click-to-close behavior was preserved by keeping the backdrop as a separate fixed element underneath.",
      tag: "Animation Bug", tagColor: "rose",
    },
    {
      title: "Navbar Breaking on Anchor Links After Page Navigation",
      problem:
        "Clicking 'Testimonials' or 'Contact' from the Services or About pages would navigate back to the home page, but the scroll-to-anchor never triggered. The page loaded at the top and stayed there.",
      discovery:
        "The setTimeout(scrollIntoView, 300) approach assumed the target element would be in the DOM 300ms after navigate() was called. But React Router's navigation and component mounting isn't always that fast, especially on lower-end devices or when components have heavy initial renders. The element simply wasn't mounted yet when scrollIntoView fired.",
      solution:
        "Kept the setTimeout but made the delay more conservative (400ms) and added a null-check: document.querySelector(anchor)?.scrollIntoView(...). On slower devices this is still not perfectly reliable, so the proper long-term fix is a useEffect in the home page that watches for a location.state.scrollTo value passed via navigate(), then scrolls after mount. Documented this as a known improvement.",
      tag: "Routing", tagColor: "sky",
    },
    {
      title: "CSS services-label Selector Conflict",
      problem:
        "The .services-label class was defined twice in the CSS file with different display values — once as display: inline-block (from the original homepage) and once as display: inline-flex (for the ServicesPage redesign with the line dividers). On the Services page, the lines weren't appearing.",
      discovery:
        "The second definition in the file was winning due to cascade order, but the inline-flex version expected two .services-label-line child elements inside the label. The homepage version didn't have those children, so there was no visual bug there. But on the Services page, the label was getting the inline-block style from higher up in the file, collapsing the flex layout.",
      solution:
        "Audited the full CSS file for duplicate class definitions. Removed the redundant inline-block version and kept only the inline-flex one, which worked correctly for both usages. Added a comment block marking the 'Services Page overrides' section to prevent this category of conflict on future edits.",
      tag: "CSS Cascade", tagColor: "amber",
    },
  ],

  features: [
    { icon: "calendar_month",  title: "Smart Booking Modal",       desc: "Full booking form with client-side validation, service pre-selection when clicking 'Book This Service' on a specific card, EmailJS delivery, and a success/error state flow." },
    { icon: "layers",          title: "Six In-Depth Service Pages", desc: "Each service has a full written breakdown, what's included checklist, ideal-for tags, duration, expandable FAQs, and a sticky aside panel — all on a single scrollable Services page." },
    { icon: "route",           title: "Multi-page SPA Routing",     desc: "React Router v6 with page-level routes for Home, Services, About, and Contact. Anchor scroll links (Testimonials, Contact) work correctly from any page." },
    { icon: "auto_awesome",    title: "Scroll-Triggered Animations", desc: "Framer Motion powers staggered card reveals, fade-up section entries, and the process step sequence. All animations respect viewport entry and only fire once." },
    { icon: "mail",            title: "Contact & Booking via Email", desc: "Two separate EmailJS templates — one for booking requests (8 fields), one for general contact. Both include validation, loading state, and formatted email delivery." },
    { icon: "design_services", title: "Custom CSS Design System",   desc: "Navy 950–500 and gold 50–500 scales, two font families, five radius tokens, and reusable component classes — zero dependency on Tailwind or any CSS framework." },
  ],

  learnings: [
    "CSS transforms are not composable with Framer Motion's inline styles. Any element Framer animates with a transform-based motion value must be centered by layout (flexbox, grid) rather than by its own transform — or the centering will be overwritten during the animation lifecycle.",
    "React Router's navigate() is not synchronous with DOM mounting. If you call scrollIntoView immediately after navigation, the target element may not exist yet. A useEffect on the landing page that watches location.state is the correct pattern — setTimeout is a workaround, not a fix.",
    "Vanilla CSS at scale needs the same discipline as a component framework. Duplicate class names, cascade conflicts, and specificity wars are real. A clear file structure — reset, variables, layout, components, pages, responsive — prevents the majority of bugs.",
    "Serverless integrations like EmailJS are excellent for small business sites. No server to maintain, no CORS to configure, no costs. The trade-off is that all logic is client-visible — which is acceptable for a contact form, but not for anything requiring real security.",
    "Writing real copy matters as much as the code. The service descriptions, FAQ answers, and booking flow messaging were drafted carefully to reflect the brand's premium positioning. A polished UI with generic placeholder text still reads as unfinished.",
  ],

  cta: {
    heading: "Want to see it live?",
    sub: "The full site is deployed and the booking system is live.",
    links: [
      { label: "View Live Site",   href: "https://cleaning-agency-pi.vercel.app/", icon: "open_in_new", external: true,  primary: true },
      { label: "View Source Code", href: "https://github.com/kobby1919/cleaning-agency", img: "/images/github_dark.svg", external: true, primary: false },
      { label: "Get In Touch",     href: "/contact", icon: "mail", external: false },
    ],
  },
};

export default function BabaCoCaseStudy() {
  return <CaseStudyTemplate data={data} />;
}
