import type { Metadata } from "next";

import Reveal from "../components/Reveal";
import WorkList from "../components/WorkList";

import { workGroups, workItems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engineering work at Spacely AI, VISAI AI and VISTEC — canvas tooling, real-time systems, AI product frontends and platform work.",
};

const WorksPage = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Reveal>
        <header className="flex flex-col gap-4">
          <p className="label">
            Work
            <span className="mx-2 text-ink-line">/</span>
            <span className="text-ink-faint">
              {workItems.length} entries — select one to read the detail
            </span>
          </p>
          <h1 className="max-w-[18ch] text-pretty text-[28px] leading-[1.2] tracking-tightest md:text-[40px]">
            Canvas tooling, real-time systems and AI product frontends.
          </h1>
        </header>
      </Reveal>

      <Reveal delay={80}>
        <WorkList
          groups={workGroups}
          initialOpen={["infinite-canvas-engine"]}
        />
      </Reveal>
    </div>
  );
};

export default WorksPage;
