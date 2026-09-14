import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "doraemon-drinking-game",
    name: "Doraemon Drinking Game",
    year: "2025",
    summary:
      "A Thai drinking card game for a whole table, played from everyone's own phone. The host opens a room, shares an invite link, and the group flips cards one at a time — whatever card you draw, you do what it says.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Upstash Redis",
    ],
    link: "https://doraemon-drinking-game.vercel.app",
    repo: "https://github.com/benzsupaluk/doraemon-drinking-game",
  },
];
