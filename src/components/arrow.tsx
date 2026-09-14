import clsx from "clsx";

type ArrowProps = {
  direction?: "right" | "up-right" | "left";
  className?: string;
};

const rotation = {
  right: "rotate-0",
  "up-right": "-rotate-45",
  left: "rotate-180",
} as const;

const Arrow = ({ direction = "right", className }: ArrowProps) => (
  <svg
    aria-hidden
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="square"
    className={clsx("h-3 w-3 shrink-0", rotation[direction], className)}
  >
    <path d="M2 8h11M9 4l4 4-4 4" />
  </svg>
);

export default Arrow;
