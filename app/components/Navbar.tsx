"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Z_INDEX } from "@/constants";

import clsx from "clsx";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      style={{ zIndex: Z_INDEX.NAVBAR }}
      className={clsx(
        "border border-gray-200 py-2 px-4 rounded-xl bg-white",

        className
      )}
    >
      {/* <div className="border w-full py-2 px-4 rounded-xl bg-white"> */}
      <Link href={`/`} className="font-semibold text-lg">
        SUPALUK
      </Link>
      {/* </div> */}
    </nav>
  );
};

type NavbarMenuProps = {
  title: string;
  path: string;
  className?: string;
};

const NavbarMenu = ({ title, path, className }: NavbarMenuProps) => {
  const pathname: string = usePathname();

  return (
    <Link
      href={path}
      className={clsx(
        "px-3 py-2 rounded-md shrink-0 font-semibold text-base",
        className,
        pathname === path
          ? "bg-gray-50 text-gray-800"
          : "bg-white hover:bg-gray-50 text-gray-700"
      )}
    >
      {title}
    </Link>
  );
};

export default Navbar;
