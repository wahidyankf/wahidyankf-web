import { Metadata } from "next";
import Terminal from "@/components/terminal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wahidyan Kresna Fridayoka (Yoka) - Software Engineer",
  description:
    "Personal website of Wahidyan Kresna Fridayoka (Yoka), a Software Engineer and Engineering Manager at Hijra Group.",
};

const StyledLink = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200"
  >
    {children}
  </Link>
);

export default function Home() {
  const commands = [
    {
      command: "whoami",
      output: (
        <span>
          Wahidyan Kresna Fridayoka (Yoka) -{" "}
          <StyledLink
            href="https://www.linkedin.com/in/wahidyan-kresna-fridayoka/"
            external
          >
            LinkedIn Profile
          </StyledLink>
        </span>
      ),
    },
    {
      command: "job",
      output: (
        <span>
          Software Engineer | Engineering Management at{" "}
          <StyledLink
            href="https://www.linkedin.com/company/hijrabyalamigroup/mycompany/"
            external
          >
            Hijra Group
          </StyledLink>
        </span>
      ),
    },
    {
      command: "ls",
      output: (
        <span>
          <StyledLink href="/cv">cv.txt</StyledLink>{" "}
          <StyledLink href="/projects">projects.txt</StyledLink>
        </span>
      ),
    },
    {
      command: "cat cv.txt",
      output: (
        <span>
          Loading CV... <StyledLink href="/cv">View full CV</StyledLink>
        </span>
      ),
    },
    {
      command: "cat projects.txt",
      output: (
        <span>
          Loading Projects...{" "}
          <StyledLink href="/projects">View all projects</StyledLink>
        </span>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <Terminal initialCommands={commands} />
      </div>
    </main>
  );
}
