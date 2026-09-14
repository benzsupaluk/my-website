"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Arrow from "./arrow";
import { WorkGroup, WorkItem } from "@/types";

type WorkListProps = {
  groups: WorkGroup[];
  /** Slugs open on first paint, before any hash is applied. */
  initialOpen?: string[];
};

const WorkList = ({ groups, initialOpen = [] }: WorkListProps) => {
  const allSlugs = groups.flatMap((group) =>
    group.items.map((item) => item.slug),
  );

  const [open, setOpen] = useState<string[]>(initialOpen);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggle = useCallback((slug: string) => {
    setOpen((current) =>
      current.includes(slug)
        ? current.filter((value) => value !== slug)
        : [...current, slug],
    );
  }, []);

  // Deep links from the index page (/works#real-time-collaboration) open and
  // scroll to the matching entry.
  useEffect(() => {
    const slug = window.location.hash.slice(1);
    if (!slug || !allSlugs.includes(slug)) return;

    // The hash never reaches the server, so seeding this from a useState
    // initializer would hydrate against different markup. One extra render on
    // mount is the trade.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen((current) =>
      current.includes(slug) ? current : [...current, slug],
    );
    itemRefs.current[slug]?.scrollIntoView({ block: "center" });
    // Run once on mount; the hash is only read as an entry point.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allOpen = open.length === allSlugs.length;

  return (
    <div className="flex flex-col gap-6 md:gap-14">
      <div className="sticky top-0 z-10 flex justify-end bg-ink-base py-4">
        <button
          type="button"
          onClick={() => setOpen(allOpen ? [] : allSlugs)}
          className="font-mono text-[10px] tracking-widest text-beer-soft uppercase transition-colors duration-300 hover:text-beer"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      {groups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="flex scroll-mt-8 flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <div
              className={clsx(
                "h-px w-full",
                group.featured ? "bg-beer" : "bg-ink-line",
              )}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2
                  className={clsx(
                    "tracking-tight text-ink-fg",
                    group.featured
                      ? "text-xl md:text-2xl"
                      : "text-base md:text-lg",
                  )}
                >
                  {group.link ? (
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline transition-colors duration-300 hover:text-beer"
                    >
                      {group.company}
                    </a>
                  ) : (
                    group.company
                  )}
                  <span className="mx-2 text-ink-faint">/</span>
                  <span className="text-ink-muted">{group.role}</span>
                </h2>
                <p className="font-mono text-sm text-ink-dim tabular-nums">
                  {group.period}
                </p>
              </div>
              <p
                className={clsx(
                  "max-w-measure text-sm text-pretty",
                  group.featured ? "text-ink-muted" : "text-ink-dim",
                )}
              >
                {group.summary}
              </p>
            </div>
          </div>
          <div className="flex flex-col border-t border-ink-line">
            {group.items.map((item) => (
              <Entry
                key={item.slug}
                itemRef={(node) => {
                  itemRefs.current[item.slug] = node;
                }}
                item={item}
                featured={Boolean(group.featured)}
                isOpen={open.includes(item.slug)}
                onToggle={() => toggle(item.slug)}
              />
            ))}
          </div>
          {/* Decorative only, so it stays out of the accessibility tree. */}
          <div aria-hidden className="flex items-center gap-4 pt-2">
            <span className="h-1 flex-1 bg-beer-soft rounded-l-sm" />
            <span className="text-xs leading-none select-none">🖤💫</span>
            <span className="h-1 flex-1 bg-beer-soft rounded-r-sm" />
          </div>
        </section>
      ))}
    </div>
  );
};

type EntryProps = {
  item: WorkItem;
  featured: boolean;
  isOpen: boolean;
  onToggle: () => void;
  itemRef?: (node: HTMLDivElement | null) => void;
};

const Entry = ({ item, featured, isOpen, onToggle, itemRef }: EntryProps) => {
  const panelId = `panel-${item.slug}`;

  return (
    <div
      ref={itemRef}
      id={item.slug}
      className="scroll-mt-24 border-b border-ink-line"
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full items-start justify-between gap-6 py-4 text-left"
        >
          <span className="flex min-w-0 flex-col gap-1">
            <span
              className={clsx(
                "block tracking-tight transition-colors duration-300",
                featured ? "text-base md:text-lg" : "text-sm md:text-base",
                isOpen ? "text-beer" : "text-ink-fg group-hover:text-beer",
              )}
            >
              {item.title}
            </span>
            {featured && (
              <span className="block max-w-measure text-sm text-pretty text-ink-dim">
                {item.summary}
              </span>
            )}
          </span>

          <Toggle isOpen={isOpen} />
        </button>
      </h3>

      {isOpen && (
        <div id={panelId} className="animate-rise pb-8">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-8">
            <p className="label pt-1 text-ink-faint">Detail</p>

            <div className="flex max-w-measure flex-col gap-5">
              {!featured && (
                <p className="text-sm text-pretty text-ink-muted">
                  {item.summary}
                </p>
              )}

              <ul className="flex flex-col gap-2.5">
                {item.points.map((point, index) => (
                  <li
                    key={point}
                    className="flex gap-4 text-sm text-pretty text-ink-dim"
                  >
                    <span className="shrink-0 pt-0.5 font-mono text-[10px] text-ink-faint tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-ink-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-dim uppercase"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex w-fit items-center gap-2 text-sm text-ink-muted transition-colors duration-300 hover:text-beer"
                >
                  <span className="link-underline">
                    {item.link.replace(/^https?:\/\//, "")}
                  </span>
                  <Arrow
                    direction="up-right"
                    className="transition-transform duration-500 ease-smooth group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              )}

              {item.images && (
                <div className="grid gap-4 sm:grid-cols-3">
                  {item.images.map((image) => (
                    <figure key={image.src} className="flex flex-col gap-2">
                      <div className="overflow-hidden rounded-lg border border-ink-line bg-ink-raised">
                        <Image
                          src={image.src}
                          alt={`${item.title} — ${image.caption}`}
                          width={image.width}
                          height={image.height}
                          sizes="(min-width: 640px) 30vw, 90vw"
                          className="h-auto w-full"
                        />
                      </div>
                      <figcaption className="label text-ink-faint">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Toggle = ({ isOpen }: { isOpen: boolean }) => (
  <span
    aria-hidden
    className="relative mt-1.5 h-3 w-3 shrink-0 text-ink-faint transition-colors duration-300 group-hover:text-beer"
  >
    <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-current" />
    <span
      className={clsx(
        "absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-smooth",
        isOpen ? "scale-y-0" : "scale-y-100",
      )}
    />
  </span>
);

export default WorkList;
