import CaseStudyTemplate from "../components/CaseStudyTemplate";

const data = {
  meta: {
    title: "Personal Portfolio",
    titleLine1: "Personal",
    titleLine2: "Portfolio",
    image: "/images/project-1.png",
    summary:
      "A full-stack portfolio built from scratch — React frontend, Express API, MongoDB database, deployed across Vercel and Render with a complete CI/CD pipeline.",
    stats: [
      { label: "Frontend", value: "React + Vite" },
      { label: "Backend", value: "Express API" },
      { label: "Database", value: "MongoDB Atlas" },
      { label: "Deployment", value: "Vercel + Render" },
    ],
  },

  overview: {
    problem:
      "As a junior developer, I needed a professional online presence that demonstrated real technical ability — not just a list of skills on a page. Static portfolio templates felt generic and showed nothing about how I actually build things.",
    goal:
      "Build a portfolio that IS the project. A full-stack application complete with a live API, real database, user-submitted reviews, and a proper deployment pipeline — so the portfolio itself proves the skills it claims.",
    phases: [
      { phase: "Phase 1", title: "Design & Frontend", desc: "Hero, About, Projects, Reviews, Contact pages built with React and Tailwind. Mobile-first, animation-heavy." },
      { phase: "Phase 2", title: "Backend Integration", desc: "Express server scaffolded, Mongoose schemas defined, REST API endpoints created for reviews CRUD." },
      { phase: "Phase 3", title: "Database & Auth", desc: "MongoDB Atlas connected, environment variables secured, IP whitelisting configured." },
      { phase: "Phase 4", title: "Deployment", desc: "Frontend shipped to Vercel, backend to Render, environment variables configured on both platforms." },
    ],
  },

  techStack: {
    groups: [
      {
        category: "Frontend", color: "sky",
        items: [
          { name: "React 18", desc: "Component-based UI with hooks for state and side effects" },
          { name: "Vite", desc: "Lightning-fast dev server and build tool replacing CRA" },
          { name: "Tailwind CSS", desc: "Utility-first styling for rapid, consistent UI development" },
          { name: "Framer Motion", desc: "Declarative animations and gesture handling" },
          { name: "React Router v6", desc: "Client-side routing for SPA navigation" },
        ],
      },
      {
        category: "Backend", color: "emerald",
        items: [
          { name: "Node.js", desc: "JavaScript runtime for the server environment" },
          { name: "Express.js", desc: "Minimal web framework for building the REST API" },
          { name: "Mongoose", desc: "ODM layer for MongoDB — schemas, validation, queries" },
          { name: "CORS", desc: "Middleware enabling cross-origin requests from the frontend" },
          { name: "dotenv", desc: "Environment variable management to keep secrets safe" },
        ],
      },
      {
        category: "Database & DevOps", color: "amber",
        items: [
          { name: "MongoDB Atlas", desc: "Cloud-hosted NoSQL database on M0 free tier" },
          { name: "Vercel", desc: "Frontend deployment with automatic CI/CD from GitHub" },
          { name: "Render", desc: "Backend hosting with persistent Express server" },
          { name: "Git & GitHub", desc: "Version control and source of truth for both deployments" },
        ],
      },
    ],
    architecture: [
      { label: "Browser", sub: "React + Vite", icon: "devices", color: "sky" },
      { label: "→", sub: "HTTP / fetch", icon: null },
      { label: "API Server", sub: "Express on Render", icon: "dns", color: "emerald" },
      { label: "→", sub: "Mongoose ODM", icon: null },
      { label: "Database", sub: "MongoDB Atlas", icon: "storage", color: "amber" },
    ],
  },

  challenges: [
    {
      title: "SSL Certificate Failure on MongoDB",
      problem: "After hours of debugging, the Atlas connection kept throwing MongooseServerSelectionError. DNS resolved, port 27017 was open, IP was whitelisted — yet the connection failed consistently.",
      discovery: "Running a raw MongoDB driver test revealed the real error: 'certificate is not yet valid'. The system clock was out of sync, causing TLS handshake to fail because Atlas's certificate appeared to be from the future.",
      solution: "Synced the system clock via Windows Time service (w32tm /resync). Immediately connected. Added this to my mental debugging checklist — TLS errors don't always mean TLS config is wrong.",
      tag: "Debugging", tagColor: "rose",
    },
    {
      title: "Production Frontend Calling localhost",
      problem: "After deploying to Vercel, reviews failed to load. The browser console revealed the React app was still making requests to localhost:5000 — which doesn't exist on Vercel's servers.",
      discovery: "The VITE_API_URL was set at Vercel's team level, not the project level. Vercel has two separate scopes for environment variables and project-level takes precedence.",
      solution: "Added VITE_API_URL pointing to the Render URL directly inside the specific project's Settings → Environment Variables. Redeployed and connected instantly.",
      tag: "Deployment", tagColor: "sky",
    },
    {
      title: "Render Cold Starts Causing UX Issues",
      problem: "Render's free tier spins down after 15 minutes of inactivity. The first request takes 30–60 seconds, causing the reviews section to show an error state before data loads.",
      discovery: "Free hosting has real trade-offs. The generic error message was alarming to users who didn't understand what was happening under the hood.",
      solution: "Updated the error UI to show a friendly 'Reviews are waking up, refresh in a moment' message instead of a red error.",
      tag: "UX", tagColor: "violet",
    },
    {
      title: "SPA Routing 404 on Page Refresh",
      problem: "Refreshing any route other than / on Vercel returned a 404. React Router handles routing client-side, but Vercel's server didn't know to serve index.html for all paths.",
      discovery: "Vercel treats every path as a file request by default. Since /projects/personal-portfolio doesn't exist as a file, it returned 404.",
      solution: "Added a vercel.json file with a catch-all rewrite rule routing all paths to /index.html. React Router then takes over and renders the correct component.",
      tag: "Infrastructure", tagColor: "emerald",
    },
  ],

  features: [
    { icon: "person", title: "Dynamic About Page", desc: "Tabbed layout with My Story, Career Journey, Education, and Core Values. Animated stat bars, floating badge, and scroll-triggered reveals." },
    { icon: "work", title: "Filterable Projects", desc: "Category filter system with smooth transitions. Each card shows tech stack, live demo and GitHub links, and navigates to a full case study." },
    { icon: "star", title: "Live Reviews System", desc: "Users submit reviews via a modal form. Data persists in MongoDB Atlas and is fetched via the Express API on every page load." },
    { icon: "code", title: "Case Study Pages", desc: "Each project has a dedicated case study route with problem statement, tech breakdown, challenges faced, and features walkthrough." },
    { icon: "devices", title: "Fully Responsive", desc: "Mobile-first design with optimized animations for smaller screens. Reduced motion durations and touch-friendly tap targets." },
    { icon: "rocket_launch", title: "CI/CD Pipeline", desc: "Every git push to main triggers automatic redeployment on Vercel. The backend on Render deploys independently from its own GitHub connection." },
  ],

  learnings: [
    "Environment variables are not just about security — they're the bridge between local development and production. Understanding the difference between .env files, Vercel's dashboard, and Render's injected variables took real experience to internalize.",
    "Debugging is a systematic process, not guesswork. When the MongoDB connection failed, I worked through DNS → port → TLS → credentials in order. That discipline found the clock sync issue in minutes instead of hours.",
    "Free tiers have real trade-offs. Render cold starts, MongoDB Atlas IP restrictions, and Vercel's team vs project environment variable scopes are all constraints a real developer must understand and design around.",
    "The portfolio itself became proof. Every challenge documented here is a real problem I solved. That's worth more than any list of technologies on a resume.",
  ],

  cta: {
    heading: "Want to work together?",
    sub: "I'm currently open to junior frontend and full-stack opportunities.",
    links: [
      { label: "View Live Site", href: "https://junior-portfolio-kappa.vercel.app/", icon: "open_in_new", external: true, primary: true },
      { label: "View Source Code", href: "https://github.com/kobby1919/kwabena-portfolio", img: "/images/github.svg", external: true, primary: false },
      { label: "Get In Touch", href: "/contact", icon: "mail", external: false },
    ],
  },
};

export default function PortfolioCaseStudy() {
  return <CaseStudyTemplate data={data} />;
}
