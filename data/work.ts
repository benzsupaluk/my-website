import { WorkGroup, WorkItem } from "@/types";

export const workGroups: WorkGroup[] = [
  {
    id: "spacely-ai",
    company: "Spacely AI",
    role: "Senior Software Engineer",
    period: "Sept 2025 — Present",
    location: "Bangkok, Thailand",
    link: "https://spacely.ai",
    summary:
      "Leading development of the core canvas platform for an AI interior-design product — real-time collaboration, infinite canvas editing and browser-based 2D-to-3D rendering.",
    featured: true,
    items: [
      {
        slug: "infinite-canvas-engine",
        title: "Infinite Canvas Engine",
        summary:
          "Led development of the core editing experience at the centre of the product.",
        points: [
          "Built the editing primitives: drag-and-drop, snapping, multi-selection and copy/paste.",
          "Built viewport controls for an infinite, freely panned and zoomed workspace.",
          "Added masking and focus mode so a user can isolate one region of a scene without losing its surroundings.",
        ],
        stack: ["TypeScript", "React 19", "Next.js 16", "Canvas 2D"],
      },
      {
        slug: "real-time-collaboration",
        title: "Real-Time Collaboration",
        summary:
          "Architected and shipped Figma-style multiplayer collaboration on the canvas using WebSockets.",
        points: [
          "Enabled live object mutations, so edits from one client land on every other client in the session.",
          "Built peer presence and cursors, plus generation lists that stay synchronised across collaborators.",
          "Refactored the entire canvas write path through a single collaboration gateway, ensuring every mutation is multiplayer-safe by construction rather than by convention.",
        ],
        stack: ["WebSockets", "TypeScript", "React"],
      },
      {
        slug: "performance-engineering",
        title: "Performance Engineering",
        summary:
          "Improved the production Real Experience Score from 76 to 93 (P75 desktop) by optimising Core Web Vitals.",
        points: [
          "Reduced LCP from 3.38s to 2.43s and CLS from 0.28 to 0.16.",
          "Worked image optimisation and rendering improvements through the product surfaces.",
          "Optimised the canvas render path and cut bundle size.",
        ],
        stack: ["Core Web Vitals", "Next.js", "Canvas 2D"],
      },
      {
        slug: "auto-floor-plan-3d",
        title: "Auto Floor Plan & 3D Rendering",
        summary:
          "Built the wall-drawing engine and a browser-based 2D-to-3D rendering pipeline.",
        points: [
          "Built the wall-drawing engine with edge snapping, live measurements and editing tools.",
          "Built the 2D-to-3D rendering pipeline with GLB loading, camera controls and depth-map lighting — all client-side.",
        ],
        stack: ["Canvas 2D", "WebGL", "GLB", "TypeScript"],
      },
      {
        slug: "mobile-canvas-studio",
        title: "Mobile Canvas Studio",
        summary:
          "Built the full mobile editing experience, extending the desktop canvas to phone and tablet users.",
        points: [
          "Implemented touch gestures for pan, zoom, selection and manipulation.",
          "Built a mobile-optimised workboard and a responsive sidebar.",
        ],
        stack: ["React", "Touch gestures", "Tailwind CSS 4"],
      },
      {
        slug: "framework-migration",
        title: "Framework Migration",
        summary:
          "Led the migration across three major platform upgrades: Next.js 14 → 16, React 18 → 19 and Tailwind CSS 3 → 4.",
        points: [
          "Modernised the frontend architecture across the codebase.",
          "Migrated the repo from npm to pnpm.",
          "Updated Tailwind CSS, TypeScript, ESLint and React configurations.",
          "Enabled adoption of React 19 and Next.js 16 features throughout the codebase.",
        ],
        stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "pnpm", "ESLint"],
      },
      {
        slug: "team-plan-access-control",
        title: "Team Plan & Access Control",
        summary:
          "Designed and implemented multi-user workspaces with role-based permissions.",
        points: [
          "Built team invitations and workspace management.",
          "Implemented billing guards tied to plan entitlements.",
          "Hardened access control so workspace data stays inside the workspace.",
        ],
        stack: ["Next.js", "TypeScript", "RBAC"],
      },
      {
        slug: "onboarding-activation",
        title: "Onboarding & Activation",
        summary:
          "Developed an A/B-tested onboarding and activation flow to improve new-user engagement.",
        points: [
          "Built guided product tours through the core canvas features.",
          "Built persona-based experiences that adapt to the user's stated goal.",
          "Added progressive onboarding so setup is spread across the first sessions rather than front-loaded.",
        ],
        stack: ["Next.js", "A/B testing", "TypeScript"],
      },
      {
        slug: "seo-content-platform",
        title: "SEO & Content Platform",
        summary:
          "Built the Ghost CMS blog integration and the SEO surface around the product.",
        points: [
          "Integrated Ghost CMS with dynamic routes for posts and collections.",
          "Implemented structured data and canonical tags.",
          "Built SEO landing pages.",
        ],
        stack: ["Ghost CMS", "Next.js", "Structured data"],
      },
      {
        slug: "analytics-attribution",
        title: "Analytics & Attribution",
        summary:
          "Implemented GA4 e-commerce tracking and fixed attribution to improve marketing measurement accuracy.",
        points: [
          "Implemented GA4 e-commerce tracking across the purchase funnel.",
          "Resolved Google Ads attribution issues that were misreporting campaign performance.",
        ],
        stack: ["GA4", "Google Ads"],
      },
    ],
  },
  {
    id: "visai-ai",
    company: "VISAI AI",
    role: "Mid-level Software Engineer",
    period: "Jan 2022 — Aug 2025",
    location: "Bangkok, Thailand",
    link: "https://visai.ai",
    summary:
      "Built AI product frontends and platform tooling — chatbots, model management, transcription and interactive demos.",
    items: [
      {
        slug: "legal-chatbot-platform",
        title: "Legal Chatbot Platform",
        summary:
          "Architected a TypeScript/Next.js frontend on a FastAPI backend for a Thai legal assistant.",
        points: [
          "Designed the PostgreSQL schema behind conversations and references.",
          "Implemented Keycloak authentication across the platform.",
          "Built real-time streaming responses with concurrent request management via httpx.",
          "Built chat interfaces with dynamic legal-reference display alongside each answer.",
        ],
        stack: [
          "TypeScript",
          "Next.js",
          "FastAPI",
          "PostgreSQL",
          "Keycloak",
          "httpx",
        ],
      },
      {
        slug: "ai-model-management-platform",
        title: "AI Model Management Platform",
        summary:
          "Developed an internal platform for deploying and operating the company's AI models.",
        points: [
          "Built AI model deployment and subscription management flows.",
          "Built API key generation and real-time status monitoring.",
          "Set up interactive API documentation using Docusaurus.",
        ],
        stack: ["TypeScript", "Next.js", "Docusaurus"],
      },
      {
        slug: "transcription-web-app",
        title: "Transcription Web App",
        summary:
          "Developed the homepage and main interface, then took its Lighthouse scores from mid-range to near-perfect.",
        points: [
          "Lifted Lighthouse performance from 74 to 98 and SEO from 80 to 100.",
          "Improved Google indexing efficiency.",
          "Wrote Cypress E2E test scenarios covering the core flows.",
        ],
        stack: ["TypeScript", "Next.js", "Cypress"],
      },
      {
        slug: "ai-cloud-platform",
        title: "AI Cloud Platform",
        summary:
          "Created interactive, in-browser demos of the company's AI capabilities.",
        points: [
          "Built a speech-to-text demo with WaveSurfer.js voice recording and waveform playback.",
          "Built an OCR demo with canvas-based bounding-box visualisation over the uploaded page.",
          "Built multi-format file display for DOCX, PDF and PPTX.",
        ],
        stack: ["TypeScript", "Gatsby", "WaveSurfer.js", "Canvas 2D"],
      },
      {
        slug: "company-website",
        title: "Company Website",
        summary:
          "Led frontend development of the corporate website, integrating Strapi CMS for dynamic content.",
        points: [
          "Built the site in Next.js and Tailwind CSS with responsive layouts across desktop, tablet and mobile.",
          "Integrated Strapi CMS so non-technical admins could publish news and blog content independently.",
          "Achieved a 98/100 Lighthouse performance score and 100/100 SEO through meta-tag optimisation, structured data and lazy loading.",
          "Maintained Grade A SonarQube security compliance across frontend and backend.",
        ],
        stack: ["Next.js", "Tailwind CSS", "Strapi", "SonarQube"],
        link: "https://visai.ai",
        images: [
          {
            src: "/images/visai-ai/homepage.webp",
            caption: "Homepage",
            width: 1072,
            height: 1252,
          },
          {
            src: "/images/visai-ai/ai-solution.webp",
            caption: "AI solution page",
            width: 912,
            height: 1375,
          },
          {
            src: "/images/visai-ai/content.webp",
            caption: "Content page",
            width: 1610,
            height: 1490,
          },
        ],
      },
    ],
  },
  {
    id: "vistec-part-time",
    company: "VISTEC",
    role: "Software Engineer, contracted",
    period: "Jun 2021 — Dec 2021",
    location: "Rayong, Thailand",
    summary: "Web tooling for the Robotics Lab.",
    items: [
      {
        slug: "robot-management-tool",
        title: "Robot Management Tool",
        summary:
          "Built a web-based robot management tool with the Robotics Lab.",
        points: [
          "Built a drag-and-drop interface for dynamic robot operation control.",
          "Wrote a Go API for SSH-based command execution, integrated with ROS.",
          "Built the Nuxt.js frontend with real-time robot status monitoring.",
        ],
        stack: ["Nuxt.js", "Go", "ROS", "SSH"],
      },
    ],
  },
  {
    id: "vistec-internship",
    company: "VISTEC",
    role: "Software Engineer, internship",
    period: "Jun 2020 — Dec 2020",
    location: "Rayong, Thailand",
    summary: "Institutional web work and an industrial inspection desktop app.",
    items: [
      {
        slug: "ist-website",
        title: "IST Website",
        summary:
          "Contributed to the official VISTEC School of Information Science and Technology website.",
        points: [
          "Integrated the Elsevier Scopus API for dynamic research-paper display.",
          "Built responsive News, Programs and Faculty Research pages.",
        ],
        stack: ["Nuxt.js", "Scopus API"],
        link: "https://vistec.ist",
      },
      {
        slug: "ptt-pipeline-inspection",
        title: "PTT Pipeline Inspection",
        summary:
          "Developed a Vue.js desktop application for PTT pipeline thickness inspection.",
        points: [
          "Designed the data table and metrics UI.",
          "Gathered requirements on-site at Map Ta Phut Industrial Estate.",
          "Collaborated closely with robotics engineers and PTT stakeholders.",
        ],
        stack: ["Vue.js", "Desktop"],
      },
    ],
  },
];

export const workItems: WorkItem[] = workGroups.flatMap((group) => group.items);

/** Front-page shortlist — all Spacely AI, in the order they matter most. */
export const featuredSlugs = [
  "infinite-canvas-engine",
  "real-time-collaboration",
  "auto-floor-plan-3d",
  "performance-engineering",
  "mobile-canvas-studio",
];

export const featuredItems: WorkItem[] = featuredSlugs
  .map((slug) => workItems.find((item) => item.slug === slug))
  .filter((item): item is WorkItem => Boolean(item));
