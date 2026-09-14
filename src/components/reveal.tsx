import clsx from "clsx";

type RevealProps = {
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * CSS-only entrance so pages stay fully server-rendered.
 */
const Reveal = ({ delay = 0, className, children }: RevealProps) => (
  <div
    style={delay ? { animationDelay: `${delay}ms` } : undefined}
    className={clsx("animate-rise", className)}
  >
    {children}
  </div>
);

export default Reveal;
