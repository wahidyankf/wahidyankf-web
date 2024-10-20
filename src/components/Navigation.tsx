import Link from "next/link";
import { File, Folder } from "lucide-react";
import React from "react";

type NavigationProps = {
  activePage: string;
};

export const Navigation: React.FC<NavigationProps> = ({ activePage }) => {
  return (
    <>
      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-green-400 p-4 flex justify-around z-50">
        <NavLink
          href="/"
          activePage={activePage}
          pageName="home"
          label="Home"
        />
        <NavLink href="/cv" activePage={activePage} pageName="cv" label="CV" />
        <NavLink
          href="/personal-projects"
          activePage={activePage}
          pageName="projects"
          label="Personal Projects"
        />
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 bottom-0 w-80 bg-gray-900 border-r border-green-400 p-4 overflow-y-auto z-50">
        <Link
          href="/"
          className="block mb-4 p-4 hover:text-yellow-400 transition-colors duration-200 light-theme:text-light-primary light-theme:hover:text-light-accent"
        >
          <Folder className="inline-block mr-2" />
          <span className="font-bold">WahidyanKF</span>
        </Link>
        <hr className="border-t border-green-400 mx-4 mb-4 light-theme:border-light-primary" />
        <ul className="pl-4">
          <NavItem
            href="/"
            activePage={activePage}
            pageName="home"
            label="home.tsx"
          />
          <NavItem
            href="/cv"
            activePage={activePage}
            pageName="cv"
            label="cv.tsx"
          />
          <NavItem
            href="/personal-projects"
            activePage={activePage}
            pageName="projects"
            label="personal-projects.tsx"
          />
        </ul>
      </nav>
    </>
  );
};

// Helper components
const NavLink: React.FC<{
  href: string;
  activePage: string;
  pageName: string;
  label: string;
}> = ({ href, activePage, pageName, label }) => (
  <Link
    href={href}
    className={`flex flex-col items-center ${
      activePage === pageName
        ? "text-yellow-400 light-theme:text-light-accent"
        : "text-green-400 light-theme:text-light-primary"
    }`}
  >
    <File className="w-6 h-6" />
    <span className="text-xs">{label}</span>
  </Link>
);

const NavItem: React.FC<{
  href: string;
  activePage: string;
  pageName: string;
  label: string;
}> = ({ href, activePage, pageName, label }) => (
  <li className="mb-2">
    <File className="inline-block mr-2" />
    <Link
      href={href}
      className={
        activePage === pageName
          ? "text-yellow-400 light-theme:text-light-accent"
          : "light-theme:text-light-primary hover:text-light-accent"
      }
    >
      {label}
    </Link>
  </li>
);
