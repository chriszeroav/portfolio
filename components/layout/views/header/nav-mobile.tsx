"use client";

import { FC, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib";

interface NavMobileProps {}

export const NavMobile: FC<NavMobileProps> = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger>
        <MenuIcon className="size-8" />
      </DrawerTrigger>
      <DrawerContent className="bg-black/30 text-custom-seconday backdrop-blur-md">
        <DrawerHeader className="items-end">
          <DrawerClose>
            <XIcon className="size-8" />
          </DrawerClose>
        </DrawerHeader>
        <ul className="p-4 flex flex-col gap-5 text-center">
          {links.map((item, idx) => (
            <Link
              className="font-overlock"
              key={idx}
              href={item.href}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </ul>
        <DrawerFooter className="flex-row justify-center gap-5 bg-white/5">
          <Link href="">
            <LinkedinIcon className="size-6" />
          </Link>

          <Link href="">
            <GithubIcon className="size-6" />
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
