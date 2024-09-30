import { Metadata } from "next";
import Terminal from "@/components/terminal";
import Link from "next/link";
import { cvData } from "./data";
import { FaChevronDown } from "react-icons/fa"; // Make sure to install react-icons

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
  const aboutMe = cvData.find((entry) => entry.type === "about");
  const latestJob = cvData.find((entry) => entry.type === "work");
  const skills = aboutMe?.skills?.join(", ");

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
          {latestJob?.title} at{" "}
          <StyledLink
            href="https://www.linkedin.com/company/hijrabyalamigroup/mycompany/"
            external
          >
            {latestJob?.organization}
          </StyledLink>
        </span>
      ),
    },
    {
      command: "summary",
      output: (
        <div>
          <p>{aboutMe?.details[0]}</p>
          <p className="mt-2">Key skills: {skills}</p>
        </div>
      ),
    },
    {
      command: "tail work_experience.txt",
      output: (
        <ul className="list-disc list-inside">
          {latestJob?.details.slice(0, 3).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      ),
    },
    {
      command: "ls",
      output: (
        <span>
          <StyledLink href="/cv">cv.txt</StyledLink>{" "}
          <StyledLink href="/personal-projects">
            personal-projects.txt
          </StyledLink>
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
      command: "cat personal-projects.txt",
      output: (
        <span>
          Loading Personal Projects...{" "}
          <StyledLink href="/personal-projects">
            View all personal projects
          </StyledLink>
        </span>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col">
      <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col">
        <div className="flex-grow">
          <Terminal initialCommands={commands} />
        </div>
      </div>
    </main>
  );
}
