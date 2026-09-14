import Link from "next/link";

import Arrow from "@/components/arrow";
import ProjectLink from "@/components/project-link";
import Reveal from "@/components/reveal";
import Section from "@/components/section";
import WorkLink from "@/components/work-link";

import { metrics, toolkit } from "@/data/experience";
import { projects } from "@/data/projects";
import { featuredItems } from "@/data/work";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <Reveal>
        <h1 className="max-w-[20ch] text-[28px] leading-[1.2] tracking-tightest text-pretty md:text-[40px]">
          {site.tagline}
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <Section
          title="Profile"
          action={
            <Link
              href="/about"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest text-ink-dim uppercase transition-colors duration-300 hover:text-ink-fg"
            >
              More about me
              <Arrow className="transition-transform duration-500 ease-smooth group-hover:translate-x-1" />
            </Link>
          }
        >
          <p className="max-w-measure text-pretty text-ink-muted">
            {site.intro}
          </p>
        </Section>
      </Reveal>

      <Reveal delay={140}>
        <Section
          title="Selected work — Spacely AI"
          action={
            <Link
              href="/works"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest text-ink-dim uppercase transition-colors duration-300 hover:text-ink-fg"
            >
              All work
              <Arrow className="transition-transform duration-500 ease-smooth group-hover:translate-x-1" />
            </Link>
          }
        >
          <div className="flex flex-col">
            {featuredItems.map((item) => (
              <WorkLink key={item.slug} item={item} />
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal delay={170}>
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

      <Reveal delay={200}>
        <Section title="Now">
          <p className="max-w-measure text-pretty text-ink-muted">{site.now}</p>
        </Section>
      </Reveal>

      <Reveal delay={260}>
        <Section title="Measured">
          <dl className="flex flex-col">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink-line py-3"
              >
                <dt className="text-sm text-ink-fg">
                  {metric.label}
                  <span className="ml-2 font-mono text-[10px] tracking-widest text-ink-faint uppercase">
                    {metric.context}
                  </span>
                </dt>
                <dd className="font-mono text-sm text-ink-dim tabular-nums">
                  {metric.from}
                  <span className="mx-2 text-ink-faint">&rarr;</span>
                  <span className="text-beer">{metric.to}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </Reveal>

      <Reveal delay={320}>
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
    </div>
  );
}
