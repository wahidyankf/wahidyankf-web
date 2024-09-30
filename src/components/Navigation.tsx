import Link from "next/link";
import { Briefcase, FolderOpen, Home } from "lucide-react";

const NavItem = ({
  title,
  icon,
  href,
  active,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
}) => (
  <Link href={href} className="flex flex-col items-center">
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full ${
        active ? "bg-gray-800" : "hover:bg-gray-800"
      }`}
    >
      {icon}
    </div>
    <span className="mt-1 text-xs">{title}</span>
  </Link>
);

export function Navigation({ activePage }: { activePage: string }) {
  return (
    <>
      <nav className="w-64 pr-4 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Navigation</h2>
        <NavItem
          title="Home"
          icon={<Home className="w-6 h-6" />}
          href="/"
          active={activePage === "home"}
        />
        <NavItem
          title="CV"
          icon={<Briefcase className="w-6 h-6" />}
          href="/cv"
          active={activePage === "cv"}
        />
        <NavItem
          title="Personal Projects"
          icon={<FolderOpen className="w-6 h-6" />}
          href="/personal-projects"
          active={activePage === "projects"}
        />
      </nav>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-green-400 flex justify-around items-center p-2">
        <NavItem
          title="Home"
          icon={<Home className="w-6 h-6" />}
          href="/"
          active={activePage === "home"}
        />
        <NavItem
          title="CV"
          icon={<Briefcase className="w-6 h-6" />}
          href="/cv"
          active={activePage === "cv"}
        />
        <NavItem
          title="Personal Projects"
          icon={<FolderOpen className="w-6 h-6" />}
          href="/personal-projects"
          active={activePage === "projects"}
        />
      </nav>
    </>
  );
}
