"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import LocalTime from "./local-time";
import { nav, site } from "@/data/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const Rail = () => {
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "z-10 flex flex-col gap-6 border-b border-ink-line bg-ink-base py-6",
        "md:sticky md:top-0 md:h-dvh md:justify-between md:gap-0 md:border-b-0 md:py-24",
      )}
    >
      <div className="flex items-baseline justify-between gap-6 md:block">
        <Link href="/" className="group block">
          <span className="block text-[15px] leading-tight font-medium tracking-tightest transition-colors duration-300 group-hover:text-beer md:text-lg">
            {site.name}
          </span>
          <span className="label mt-1 hidden md:block">{site.role}</span>
        </Link>

        <nav aria-label="Primary" className="md:mt-10">
          <ul className="flex items-center gap-5 md:flex-col md:items-start md:gap-2">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={clsx(
                      "hidden h-px transition-all duration-500 ease-smooth md:block",
                      active ? "w-4 bg-beer" : "w-0 bg-ink-faint",
                    )}
                  />
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "font-mono text-xs tracking-wide transition-colors duration-300",
                      active
                        ? "text-ink-fg"
                        : "text-ink-dim hover:text-ink-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="hidden flex-col gap-3 md:flex">
        <div className="rule" />
        <a
          href={`mailto:${site.email}`}
          className="link-underline w-fit font-mono text-sm text-ink-muted transition-colors duration-300 hover:text-ink-fg"
        >
          {site.email}
        </a>
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline w-fit font-mono text-sm text-ink-dim transition-colors duration-300 hover:text-ink-fg"
        >
          github.com/{site.github}
        </a>
        <LocalTime />
      </div>
    </header>
  );
};

export default Rail;
