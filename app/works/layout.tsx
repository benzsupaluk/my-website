import WorkSidebar from "../components/WorkSidebar";

import { WorkType } from "@/types";

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const works: WorkType[] = [
    {
      title: "VISAI AI Website",
      subtitle: "",
      shortDescription:
        "Developed the frontend for the VISAI AI company website, showcasing the company’s products, team members, and organizational vision.",
      link: "https://visai.ai",
      slug: "visai-ai",
    },
    {
      title: "Sommai",
      subtitle: "WCX Legal Chatbot",
      shortDescription:
        "A chatbot web app for chatting with an AI on Thai legal topics, utilizing various AI models.",
      link: "https://sommai.wangchan.ai",
      slug: "sommai",
    },
    {
      title: "Somsi",
      subtitle: "",
      shortDescription:
        "A chatbot web app for chatting with an AI specialized in Thai tax law, powered by Google's Gemini model.",
      link: "https://somsi.visai.ai",
      slug: "somsi",
    },
    {
      title: "DocuMate",
      subtitle: "",
      shortDescription:
        "DocuMate is a VISAI’s AI solution application. Designed to help data retrieval using AI for searching, extracting, and summarizing relevant files.",
      link: "https://documate.visai.ai",
      slug: "documate",
    },
    {
      title: "ACP Website",
      subtitle: "",
      shortDescription:
        "Conducted product demos for VISAI AI solutions, showcasing speech-to-text, OCR, text classification, and sentiment analysis.",
      link: "https://acp.visai.ai",
      slug: "acp",
    },
    {
      title: "Console Platform Website",
      subtitle: "",
      shortDescription:
        "Developed the Console Platform to facilitate the deployment and management of the company’s AI models.",
      link: "https://console.visai.ai",
      slug: "console-acp",
    },

    {
      title: "Tints",
      subtitle: "Makeup suggestion and simulation using image processing.",
      shortDescription:
        "Tints is a progressive web app that analyzes cosmetic colors from a person's image, extracting dominant colors from lips, cheeks, and skin.",
      link: "",
      slug: "tints",
    },
    {
      title: "IST Website",
      subtitle: "",
      shortDescription:
        "Contributed to the development of the official website for the School of Information Science and Technology (IST) at VISTEC.",
      link: "https://vistec.ist",
      slug: "ist-vistec",
    },
    {
      title: "GC Predict",
      subtitle: "",
      shortDescription:
        "Developed a PC application for PTT to record pipeline thickness and related data.",
      link: "",
      slug: "gc-predict",
    },
    {
      title: "ROS-GUIDE",
      subtitle: "ROS Based Graphical User Interface Display Editor",
      shortDescription:
        "Collaborated with the Robotics Lab to develop a tool for managing and operating robots online.",
      link: "",
      slug: "ros-guide",
    },
  ];
  return (
    <div className="px-8 flex items-start">
      <WorkSidebar works={works} />
      <section className="grow overflow-hidden">{children}</section>
    </div>
  );
}
