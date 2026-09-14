import Link from "next/link";

import Arrow from "@/components/arrow";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="label text-beer">404</p>
      <h1 className="text-[28px] leading-[1.2] tracking-tightest md:text-[40px]">
        This page doesn&rsquo;t exist.
      </h1>
      <Link
        href="/"
        className="group flex w-fit items-center gap-2 font-mono text-[10px] tracking-widest text-ink-dim uppercase transition-colors duration-300 hover:text-ink-fg"
      >
        <Arrow
          direction="left"
          className="transition-transform duration-500 ease-smooth group-hover:-translate-x-1"
        />
        Back to index
      </Link>
    </div>
  );
};

export default NotFound;
