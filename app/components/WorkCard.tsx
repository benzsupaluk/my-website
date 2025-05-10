"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { WorkType } from "@/types";
import ArrowRightIcon from "@/public/icons/arrow-right.svg";
import clsx from "clsx";

const WorkCard = ({ work }: { work: WorkType }) => {
  const pathname = usePathname();

  const isAllWorksPage = useMemo(() => {
    return pathname === "/works";
  }, [pathname]);

  const isCurrentWorkPage = useMemo(() => {
    const splitWorkPrefix = pathname.split("/works/");
    console.log(splitWorkPrefix?.[1]);
    return splitWorkPrefix?.[1] === work.slug;
  }, [pathname]);

  const iconVariants = {
    default: { translateX: "-200%", opacity: 0 },
    hover: { translateX: 0, opacity: 1 },
  };
  const currentIconVariants = {
    default: { translateX: 0, opacity: 1 },
    hover: { translateX: 0, opacity: 1 },
  };
  console.log("isCurrentWorkPage", isCurrentWorkPage);
  return (
    <Link href={`/works/${work.slug}`}>
      <motion.div
        initial="default"
        whileHover="hover"
        className={clsx(
          "relative group transition-all duration-300 cursor-pointer flex flex-col gap-2 p-4 rounded-lg overflow-hidden",
          isCurrentWorkPage ? "bg-gray-50/10" : "hover:scale-[1.01]"
        )}
      >
        <header className="mr-4">
          <h3
            className={clsx(
              "transition-all",
              isAllWorksPage
                ? "text-3xl text-white"
                : isCurrentWorkPage
                ? "text-lg font-semibold"
                : "text-lg text-gray-100"
            )}
          >
            {work.title}
          </h3>
          {work.subtitle && (
            <p className="text-xs text-gray-200">{work.subtitle}</p>
          )}
        </header>
        <p
          className={clsx(
            "text-sm line-clamp-3",
            isAllWorksPage ? "h-[70px] visible" : "h-0 invisible"
          )}
        >
          {work.shortDescription}
        </p>
        <motion.button
          type="button"
          aria-label={`Go to ${work.title}`}
          className={clsx(
            "absolute right-4 top-5 w-6 h-6 stroke-gray-50 flex-center rounded-full bg-gray-100/50",
            isCurrentWorkPage ? "" : ""
          )}
          variants={isCurrentWorkPage ? {} : iconVariants}
        >
          <ArrowRightIcon className="w-3 h-3" />
        </motion.button>
      </motion.div>
    </Link>
  );
};

export default WorkCard;
