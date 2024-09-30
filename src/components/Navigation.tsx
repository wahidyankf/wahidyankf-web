import Link from "next/link";
import { File, Folder } from "lucide-react";

type NavigationProps = {
  activePage: string;
};

export const Navigation = ({ activePage }: NavigationProps) => {
  return (
    <>
      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-green-400 p-2 flex justify-around items-center">
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
          label="Projects"
        />
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 h-full w-64 pr-8 text-green-400 font-mono bg-gray-900 overflow-y-auto">
        <div className="mb-4 p-4">
          <Folder className="inline-block mr-2" />
          <span className="font-bold">organiclever</span>
        </div>
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
const NavLink = ({
  href,
  activePage,
  pageName,
  label,
}: {
  href: string;
  activePage: string;
  pageName: string;
  label: string;
}) => (
  <Link
    href={href}
    className={`flex flex-col items-center ${
      activePage === pageName ? "text-yellow-400" : "text-green-400"
    }`}
  >
    <File className="w-6 h-6" />
    <span className="text-xs">{label}</span>
  </Link>
);

const NavItem = ({
  href,
  activePage,
  pageName,
  label,
}: {
  href: string;
  activePage: string;
  pageName: string;
  label: string;
}) => (
  <li className="mb-2">
    <File className="inline-block mr-2" />
    <Link
      href={href}
      className={activePage === pageName ? "text-yellow-400" : ""}
    >
      {label}
    </Link>
  </li>
);
