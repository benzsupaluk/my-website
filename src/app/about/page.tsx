import type { Metadata } from "next";

import PhotoGroup from "@/components/photo-group";
import Reveal from "@/components/reveal";
import Section from "@/components/section";

import { education } from "@/data/experience";
import {
  about,
  goodCompany,
  offTheClock,
  portrait,
  teamPhotos,
} from "@/data/personal";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <Reveal>
        <header className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex flex-col gap-6">
            <p className="label">About</p>
            <h1 className="max-w-[20ch] text-[28px] leading-[1.2] tracking-tightest text-pretty md:text-[40px]">
              {about.headline}
            </h1>
            <p className="max-w-measure text-pretty text-ink-muted">
              {about.intro}
            </p>
          </div>

          <PhotoGroup
            photos={[portrait]}
            priority
            sizes="(min-width: 768px) 220px, 45vw"
            frameClassName="aspect-[4/5]"
            className="w-36 shrink-0 sm:w-44 md:w-[220px]"
          />
        </header>
      </Reveal>

      <Reveal delay={80}>
        <Section title="Off the clock">
          <div className="flex flex-col gap-8">
            <p className="max-w-measure text-pretty text-ink-muted">
              {offTheClock.text}
            </p>
            <PhotoGroup
              photos={offTheClock.photos}
              sizes="(min-width: 768px) 160px, 45vw"
              frameClassName="aspect-[3/4] max-h-[300px]"
              className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3"
            />
          </div>
        </Section>
      </Reveal>

      <Reveal delay={140}>
        <Section title="Good company">
          <div className="flex flex-col gap-6">
            <p className="max-w-measure text-pretty text-ink-muted">
              {goodCompany.text}
            </p>
            <PhotoGroup
              photos={teamPhotos}
              sizes="(min-width: 768px) 22vw, 45vw"
              frameClassName="aspect-[4/3]"
              className="grid gap-4 grid-cols-2"
            />
          </div>
        </Section>
      </Reveal>

      <Reveal delay={200}>
        <Section title="Education">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg tracking-tight text-ink-fg md:text-xl">
                {education.degree}
              </h3>
              <p className="font-mono text-sm text-ink-dim tabular-nums">
                {education.period}
              </p>
            </div>
            <p className="font-mono text-sm text-ink-faint">
              {education.school}
              <span className="mx-2 text-ink-line">&middot;</span>
              {education.location}
            </p>


          </div>
        </Section>
      </Reveal>
    </div>
  );
};

export default AboutPage;
