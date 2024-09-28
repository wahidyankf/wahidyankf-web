import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV - Wahidyan Kresna Fridayoka (Yoka)",
  description:
    "Curriculum Vitae of Wahidyan Kresna Fridayoka (Yoka), a Software Engineer and Engineering Manager.",
};

export default function CV() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Curriculum Vitae
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">
          Wahidyan Kresna Fridayoka (Yoka)
        </h2>
        <p className="mb-4">Software Engineer (Engineering Manager)</p>

        <section className="mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl mb-2">Experience</h3>
          <ul className="list-disc list-inside">
            <li>Engineering Manager at TechCorp (2020 - Present)</li>
            <li>Senior Software Engineer at InnoSoft (2017 - 2020)</li>
            <li>Software Engineer at WebDev Inc. (2014 - 2017)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl mb-2">Education</h3>
          <p>
            B.S. in Computer Science, University of Technology (2010 - 2014)
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl mb-2">Skills</h3>
          <ul className="list-disc list-inside">
            <li>JavaScript, TypeScript, React, Node.js</li>
            <li>Python, Django</li>
            <li>SQL, NoSQL databases</li>
            <li>Agile methodologies, Team leadership</li>
          </ul>
        </section>

        <Link href="/" className="text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
