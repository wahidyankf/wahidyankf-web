import { Metadata } from "next";
import Terminal from "@/components/terminal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wahidyan Kresna Fridayoka (Yoka) - Software Engineer",
  description:
    "Personal website of Wahidyan Kresna Fridayoka (Yoka), a Software Engineer and Engineering Manager.",
};

export default function Home() {
  const commands = [
    { command: "whoami", output: "Wahidyan Kresna Fridayoka (Yoka)" },
    { command: "job", output: "Software Engineer (Engineering Manager)" },
    {
      command: "ls",
      output: (
        <span>
          <Link
            href="/cv"
            className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200"
          >
            cv.txt
          </Link>{" "}
          <Link
            href="/projects"
            className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200"
          >
            projects.txt
          </Link>
        </span>
      ),
    },
    {
      command: "cat cv.txt",
      output: (
        <span>
          Loading CV...{" "}
          <Link
            href="/cv"
            className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200"
          >
            View full CV
          </Link>
        </span>
      ),
    },
    {
      command: "cat projects.txt",
      output: (
        <span>
          Loading Projects...{" "}
          <Link
            href="/projects"
            className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200"
          >
            View all projects
          </Link>
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
