import clsx from "clsx";

type SectionProps = {
  title: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/**
 * A titled block: mono marker on a hairline, then content.
 */
const Section = ({ title, action, className, children }: SectionProps) => {
  return (
    <section className={clsx("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-3">
        <div className="rule" />
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="label flex items-baseline gap-3 text-ink-muted">
            <span className="text-beer">&bull;</span>
            {title}
          </h2>
          {action}
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
