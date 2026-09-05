import Link from "next/link";

import Arrow from "./Arrow";
import { WorkItem } from "@/types";

/**
 * Index-page row. Points at the work page and opens that entry via its hash.
 */
const WorkLink = ({ item }: { item: WorkItem }) => {
  return (
    <Link
      href={`/works#${item.slug}`}
      className="group -mx-3 flex items-baseline justify-between gap-6 border-b border-ink-line px-3 py-4 transition-colors duration-300 hover:border-ink-faint"
    >
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="block text-base tracking-tight text-ink-fg transition-all duration-500 ease-smooth group-hover:translate-x-1 group-hover:text-ember md:text-lg">
          {item.title}
        </span>
        <span className="block truncate font-mono text-[11px] text-ink-dim transition-colors duration-300 group-hover:text-ink-muted">
          {item.stack.slice(0, 3).join(" · ")}
        </span>
      </span>

      <Arrow className="-translate-x-2 shrink-0 text-ink-faint opacity-0 transition-all duration-500 ease-smooth group-hover:translate-x-0 group-hover:text-ember group-hover:opacity-100" />
    </Link>
  );
};

export default WorkLink;
