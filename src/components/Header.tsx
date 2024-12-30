import { useState, type FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className="px-5">
      <div className="max-w-6xl mx-auto w-full h-16 flex items-center justify-between">
        <h1 className="text-white font-semibold text-3xl">Christopher.</h1>

        <nav className="flex items-center gap-5">
          <ul className="flex items-center gap-2">
            <li>
              <a
                className="px-4 py-1 text-white hover:bg-white/5 transition-colors rounded-md"
                href="#home"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="px-4 py-1 text-white hover:bg-white/5 transition-colors rounded-md"
                href="#experience"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                className="px-4 py-1 text-white hover:bg-white/5 transition-colors rounded-md"
                href="#projects"
              >
                Proyectos
              </a>
            </li>
          </ul>
          <a
            href="mailto:chris.dev.software@gmail.com"
            className="bg-cyan-400 px-6 py-2 rounded-md text-sm"
          >
            chris.dev.software@gmail.com
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
