import { Metric } from "@/types";

export const education = {
  degree: "B.Eng. Software & Knowledge Engineering",
  school: "Kasetsart University",
  location: "Bangkok, Thailand",
  period: "Jul 2017 — May 2021",
  thesis: {
    title: "Makeup Suggestion & Simulation",
    text: "Built a progressive web app in Vue.js and Flask using OpenCV for face detection and K-means clustering for dominant-colour extraction and skin-tone categorisation, with real-time image processing.",
  },
};

export const metrics: Metric[] = [
  {
    label: "Real Experience Score",
    from: "76",
    to: "93",
    context: "Spacely AI, P75 desktop",
  },
  {
    label: "Largest Contentful Paint",
    from: "3.38s",
    to: "2.43s",
    context: "Spacely AI, production",
  },
  {
    label: "Cumulative Layout Shift",
    from: "0.28",
    to: "0.16",
    context: "Spacely AI, production",
  },
  {
    label: "Lighthouse performance",
    from: "74",
    to: "98",
    context: "VISAI transcription app",
  },
  {
    label: "Lighthouse SEO",
    from: "80",
    to: "100",
    context: "VISAI transcription app",
  },
];

export const toolkit: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Gatsby",
      "Tailwind CSS",
      "Motion",
    ],
  },
  {
    label: "Canvas & graphics",
    items: [
      "Canvas 2D",
      "WebGL",
      "GLB / three.js",
      "Depth-map lighting",
      "WaveSurfer.js",
      "OpenCV",
    ],
  },
  {
    label: "Real-time",
    items: ["WebSockets", "Presence & cursors", "Streaming responses", "httpx"],
  },
  {
    label: "Backend & data",
    items: ["FastAPI", "Flask", "PostgreSQL", "Keycloak"],
  },
  {
    label: "Platform",
    items: [
      "Ghost CMS",
      "Strapi",
      "GA4",
      "Cypress",
      "SonarQube",
      "Docusaurus",
      "pnpm",
    ],
  },
];
