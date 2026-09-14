import { Photo } from "@/types";

export const about = {
  headline:
    "I build things for the web, climb on weekends, and never turn down dinner with friends.",
  intro:
    "I'm Supaluk, though most people call me Benz. I'm a software engineer living in Bangkok. I started coding at university and stayed with it because I like making things people can actually click on. Away from the screen I'm usually out with friends, or on a wall trying not to fall off it.",
};

export const portrait: Photo = {
  src: "/images/personal/personal-image.webp",
  alt: "Supaluk Jaroensuk, off duty.",
  caption: "",
  width: 970,
  height: 847,
};

export const goodCompany = {
  text: "I've been lucky with the people I've worked with. These are the outings and the dinners that came after the work.",
};

/** Teams, offsites and the dinners that came with them. */
export const teamPhotos: Photo[] = [
  {
    src: "/images/personal/spacely-cto-meeting.webp",
    alt: "Sitting down with the CTO at Spacely AI.",
    caption: "Spacely AI — CTO session",
    width: 4284,
    height: 5712,
  },
  {
    src: "/images/personal/spacely-outing.webp",
    alt: "The Spacely AI team on a company outing.",
    caption: "Spacely AI — team outing",
    width: 6240,
    height: 4160,
  },
  {
    src: "/images/personal/spacely-dev-team-dinner.webp",
    alt: "Dinner with the Spacely AI engineering team.",
    caption: "Spacely AI — dev team dinner",
    width: 1477,
    height: 1108,
  },
  {
    src: "/images/personal/visai-team-dinner.webp",
    alt: "Dinner with the VISAI team.",
    caption: "VISAI — team dinner",
    width: 4032,
    height: 3024,
  },
];

export const offTheClock = {
  text: "Bouldering is the main one. I like sport with a bit of risk in it, and I've run the Spartan Race here in Thailand as well. Past that, I just like being around people. Most good weeks end at a long table with friends and a cold beer.",
  photos: [
    {
      src: "/images/personal/personal-hobby-bouldering.webp",
      alt: "Mid-climb on a bouldering wall.",
      caption: "Bouldering",
      width: 1170,
      height: 1552,
    },
    {
      src: "/images/personal/personal-hobby-extream-sport.webp",
      alt: "Out on an obstacle course race.",
      caption: "Spartan Race, Thailand",
      width: 1800,
      height: 2700,
    },
  ] satisfies Photo[],
};
