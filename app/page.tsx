import Link from "next/link";

import Arrow from "./components/Arrow";
import Reveal from "./components/Reveal";
import Section from "./components/Section";
import WorkLink from "./components/WorkLink";

import { metrics, toolkit } from "@/data/experience";
import { featuredItems } from "@/data/work";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Reveal>
        <h1 className="max-w-[20ch] text-pretty text-[28px] leading-[1.2] tracking-tightest md:text-[40px]">
          {site.tagline}
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <Section title="Profile">
          <p className="max-w-prose text-pretty text-ink-muted">{site.intro}</p>
        </Section>
      </Reveal>

      <Reveal delay={140}>
        <Section
          title="Selected work — Spacely AI"
          action={
            <Link
              href="/works"
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-dim transition-colors duration-300 hover:text-ink-fg"
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

      <Reveal delay={200}>
        <Section title="Now">
          <p className="max-w-prose text-pretty text-ink-muted">{site.now}</p>
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
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    {metric.context}
                  </span>
                </dt>
                <dd className="font-mono text-sm tabular-nums text-ink-dim">
                  {metric.from}
                  <span className="mx-2 text-ink-faint">&rarr;</span>
                  <span className="text-ember">{metric.to}</span>
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
