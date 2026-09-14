import type { Metadata } from "next";

import Arrow from "@/components/arrow";
import ProjectLink from "@/components/project-link";
import Reveal from "@/components/reveal";
import Section from "@/components/section";
import WorkList from "@/components/work-list";

import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { workGroups } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engineering work at Spacely AI, VISAI AI and VISTEC — canvas tooling, real-time systems, AI product frontends and platform work.",
};

const WorksPage = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <Reveal>
        <header className="flex flex-col gap-4">
          <p className="label">Work</p>
          <h1 className="max-w-[18ch] text-[28px] leading-[1.2] tracking-tightest text-pretty md:text-[40px]">
            Things I’ve Worked On
          </h1>
        </header>
      </Reveal>

      <Reveal delay={80}>
        <WorkList
          groups={workGroups}
          initialOpen={["infinite-canvas-engine"]}
        />
      </Reveal>

      <Reveal delay={140}>
        <Section
          title="Side projects"
          action={
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest text-ink-dim uppercase transition-colors duration-300 hover:text-ink-fg"
            >
              GitHub
              <Arrow
                direction="up-right"
                className="transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          }
        >
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectLink key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      </Reveal>
    </div>
  );
};

export default WorksPage;
