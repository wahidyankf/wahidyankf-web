import Link from "next/link";
import { File, Folder } from "lucide-react";

type NavigationProps = {
  activePage: string;
};

export const Navigation = ({ activePage }: NavigationProps) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-green-400 p-2 flex justify-around items-center">
      <Link
        href="/"
        className={`flex flex-col items-center ${
          activePage === "home" ? "text-yellow-400" : "text-green-400"
        }`}
      >
        <File className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/cv"
        className={`flex flex-col items-center ${
          activePage === "cv" ? "text-yellow-400" : "text-green-400"
        }`}
      >
        <File className="w-6 h-6" />
        <span className="text-xs">CV</span>
      </Link>
      <Link
        href="/personal-projects"
        className={`flex flex-col items-center ${
          activePage === "projects" ? "text-yellow-400" : "text-green-400"
        }`}
      >
        <File className="w-6 h-6" />
        <span className="text-xs">Projects</span>
      </Link>
    </nav>
  );
};

export const DesktopNavigation = ({ activePage }: NavigationProps) => {
  return (
    <nav className="hidden lg:block w-64 pr-8 text-green-400 font-mono">
      <div className="mb-4">
        <Folder className="inline-block mr-2" />
        <span className="font-bold">organiclever</span>
      </div>
      <ul className="pl-4">
        <li className="mb-2">
          <File className="inline-block mr-2" />
          <Link
            href="/"
            className={activePage === "home" ? "text-yellow-400" : ""}
          >
            home.tsx
          </Link>
        </li>
        <li className="mb-2">
          <File className="inline-block mr-2" />
          <Link
            href="/cv"
            className={activePage === "cv" ? "text-yellow-400" : ""}
          >
            cv.tsx
          </Link>
        </li>
        <li className="mb-2">
          <File className="inline-block mr-2" />
          <Link
            href="/personal-projects"
            className={activePage === "projects" ? "text-yellow-400" : ""}
          >
            personal-projects.tsx
          </Link>
        </li>
      </ul>
    </nav>
  );
};
