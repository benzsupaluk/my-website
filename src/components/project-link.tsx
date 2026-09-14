import Arrow from "./arrow";
import { Project } from "@/types";

const stripScheme = (url: string) => url.replace(/^https?:\/\//, "");

const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link flex w-fit items-center gap-2 font-mono text-sm text-ink-dim transition-colors duration-300 hover:text-beer"
  >
    <span className="link-underline">{label}</span>
    <Arrow
      direction="up-right"
      className="transition-transform duration-500 ease-smooth group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
    />
  </a>
);

/**
 * Side-project row: title, what it is, what it runs on, then the live site and
 * the source.
 */
const ProjectLink = ({ project }: { project: Project }) => {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-base tracking-tight text-ink-fg md:text-lg">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors duration-300 hover:text-beer"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="font-mono text-sm text-ink-dim tabular-nums">
          {project.year}
        </p>
      </div>

      <p className="max-w-measure text-sm text-pretty text-ink-muted">
        {project.summary}
      </p>

      <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="border border-ink-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-dim uppercase"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {project.link && (
          <ExternalLink href={project.link} label={stripScheme(project.link)} />
        )}
        {project.repo && <ExternalLink href={project.repo} label="Source" />}
      </div>
    </article>
  );
};

export default ProjectLink;
