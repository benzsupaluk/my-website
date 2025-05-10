"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-8 right-8">
      <div className="flex items-center gap-6">
        <SidebarItem url={`/`} name={`Info`} isCurrentPath={pathname === "/"} />
        <SidebarItem
          url={`/works`}
          name={`Works`}
          isCurrentPath={pathname.startsWith("/works")}
        />
        <SidebarItem
          url={`/contact`}
          name={`Contact`}
          isCurrentPath={pathname === "/contact"}
        />
      </div>
    </aside>
  );
};

type SidebarItem = {
  url: string;
  name: string;
  isCurrentPath: boolean;
};

const SidebarItem = ({ url, name, isCurrentPath }: SidebarItem) => {
  return (
    <Link
      href={url}
      className={clsx(
        "text-base transition-all duration-300",
        isCurrentPath ? "font-bold" : "font-normal hover:font-semibold"
      )}
    >
      {name}
    </Link>
  );
};

export default Sidebar;
