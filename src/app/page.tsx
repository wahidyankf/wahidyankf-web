import { Metadata } from "next";
import { TerminalComponent } from "@/components/terminal";

export const metadata: Metadata = {
  title: "Wahidyan Kresna Fridayoka (Yoka) - Software Engineer",
  description:
    "Personal website of Wahidyan Kresna Fridayoka (Yoka), a Software Engineer and Engineering Manager.",
};

export default function Home() {
  const commands = [
    { command: "whoami", output: "Wahidyan Kresna Fridayoka (Yoka)" },
    { command: "job", output: "Software Engineer (Engineering Manager)" },
    { command: "ls", output: "cv.txt  projects.txt" },
    { command: "cat cv.txt", output: "Loading CV..." },
    { command: "cat projects.txt", output: "Loading Projects..." },
  ];

  return (
    <main className="min-h-screen bg-black p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <TerminalComponent commands={commands} />
      </div>
    </main>
  );
}
