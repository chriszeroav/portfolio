import { FC } from "react";
import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="px-4">
      <div className="max-w-3xl mx-auto h-16 flex items-center justify-between">
        <h1 className="text-3xl font-overlock">Chris.</h1>
        <nav>
          {/* Desktop */}
          <div className="hidden md:flex">
            <NavDesktop />
          </div>

          {/* Responsive */}
          <div className="flex md:hidden">
            <NavMobile />
          </div>
        </nav>
      </div>
    </header>
  );
};
