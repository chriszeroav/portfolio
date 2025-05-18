import { FC } from "react";
import { links } from "@/lib";
import Link from "next/link";

interface NavDesktopProps {}

export const NavDesktop: FC<NavDesktopProps> = () => {
  return (
    <ul className="flex">
      {links.map((item, idx) => (
        <Link
          className="px-4 py-1 rounded-md hover:bg-white/10 font-overlock hover:scale-105 duration-500 transition-transform"
          key={idx}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </ul>
  );
};
