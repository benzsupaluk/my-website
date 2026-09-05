import type { Metadata } from "next";
import Link from "next/link";

import Arrow from "../components/Arrow";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

import { education, toolkit } from "@/data/experience";
import { workGroups } from "@/data/work";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: site.intro,
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Reveal>
        <header className="flex flex-col gap-6">
          <p className="label">About</p>
          <h1 className="max-w-[20ch] text-pretty text-[28px] leading-[1.2] tracking-tightest md:text-[40px]">
            Five years of shipping product engineering, mostly at the sharp end
            of the frontend.
          </h1>
          <p className="max-w-prose text-pretty text-ink-muted">{site.intro}</p>
        </header>
      </Reveal>

      <Reveal delay={80}>
        <Section
          title="Career"
          action={
            <Link
              href="/works"
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-dim transition-colors duration-300 hover:text-ink-fg"
            >
              Read the detail
              <Arrow className="transition-transform duration-500 ease-smooth group-hover:translate-x-1" />
            </Link>
          }
        >
          <dl className="flex flex-col border-t border-ink-line">
            {workGroups.map((group) => (
              <Link
                key={group.id}
                href={`/works#${group.id}`}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink-line py-4"
              >
                <dt className="text-sm text-ink-fg transition-all duration-500 ease-smooth group-hover:translate-x-1 group-hover:text-ember md:text-base">
                  {group.role}
                  <span className="mx-2 text-ink-faint">/</span>
                  <span className="text-ink-muted">{group.company}</span>
                </dt>
                <dd className="font-mono text-[11px] tabular-nums text-ink-dim">
                  {group.period}
                </dd>
              </Link>
            ))}
          </dl>
        </Section>
      </Reveal>

      <Reveal delay={140}>
        <Section title="Education">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg tracking-tight text-ink-fg md:text-xl">
                {education.degree}
              </h3>
              <p className="font-mono text-[11px] tabular-nums text-ink-dim">
                {education.period}
              </p>
            </div>
            <p className="font-mono text-[11px] text-ink-faint">
              {education.school}
              <span className="mx-2 text-ink-line">&middot;</span>
              {education.location}
            </p>

            <div className="grid gap-x-8 gap-y-1 border-t border-ink-line pt-4 md:grid-cols-[180px_minmax(0,1fr)]">
              <p className="label pt-1 text-ink-muted">
                Thesis &mdash; {education.thesis.title}
              </p>
              <p className="max-w-prose text-pretty text-sm text-ink-dim">
                {education.thesis.text}
              </p>
            </div>
          </div>
        </Section>
      </Reveal>

      <Reveal delay={200}>
        <Section title="Toolkit">
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {toolkit.map((group) => (
              <div key={group.label} className="flex flex-col gap-1.5">
                <dt className="label">{group.label}</dt>
                <dd className="text-sm text-ink-muted">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </Reveal>

      <Reveal delay={260}>
        <Section title="Contact">
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group flex w-fit items-center gap-2 text-lg tracking-tight text-ink-fg transition-colors duration-300 hover:text-ember md:text-xl"
            >
              <span className="link-underline">{site.email}</span>
              <Arrow
                direction="up-right"
                className="transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="link-underline w-fit font-mono text-xs text-ink-dim transition-colors duration-300 hover:text-ink-muted"
            >
              {site.phone}
            </a>
            <p className="font-mono text-[11px] text-ink-faint">
              {site.location}
            </p>
          </div>
        </Section>
      </Reveal>
    </div>
  );
};

export default AboutPage;
