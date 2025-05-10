"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { WorkType } from "@/types";

import clsx from "clsx";

import WorkCard from "./WorkCard";

const WorkSidebar = ({ works }: { works: WorkType[] }) => {
  const pathname = usePathname();

  const isAllWorksPage = useMemo(() => {
    return pathname === "/works";
  }, [pathname]);

  return (
    <aside
      className={clsx(
        "flex flex-col items-start gap-4 transition-all",
        isAllWorksPage ? "w-[480px]" : "w-[200px]"
      )}
    >
      {works.map((work, index) => {
        return <WorkCard key={index} work={work} />;
      })}
    </aside>
  );
};

export default WorkSidebar;
