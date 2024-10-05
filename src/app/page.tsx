"use client";

import { Briefcase, FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cvData, getTopSkillsLastFiveYears, formatDuration } from "@/app/data";
import { Navigation } from "@/components/Navigation";
import { useMemo } from "react";
import { parseMarkdownLinks } from "@/lib/utils/markdown";

export default function Home() {
  const aboutMe = cvData.find((entry) => entry.type === "about");
  const topSkills = useMemo(() => getTopSkillsLastFiveYears(cvData), []);

  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row pb-20 lg:pb-0">
      <Navigation activePage="home" />
      <div className="flex-grow max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          Welcome to My Portfolio
        </h1>

        <div className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400">
            About Me
          </h2>
          {aboutMe?.details.map((detail, index) => (
            <p key={index} className="mb-4 text-green-300">
              {parseMarkdownLinks(detail)}
            </p>
          ))}
        </div>

        <div className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400">
            Top Skills (Last 5 Years)
          </h2>
          <div className="flex flex-wrap gap-2">
            {topSkills.map(({ skill, duration }, index) => (
              <span
                key={index}
                className="bg-gray-800 text-green-400 px-2 py-1 rounded-md text-sm flex items-center"
              >
                <span className="mr-2">{skill}</span>
                <span className="text-xs text-green-300">
                  ({formatDuration(duration)})
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cv"
              className="flex items-center text-yellow-400 hover:text-green-400 transition-colors duration-200"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View My CV
            </Link>
            <Link
              href="/personal-projects"
              className="flex items-center text-yellow-400 hover:text-green-400 transition-colors duration-200"
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              Browse My Personal Projects
            </Link>
          </div>
        </div>

        <div className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400">
            Connect With Me
          </h2>
          <div className="flex flex-wrap gap-4">
            {aboutMe?.links &&
              Object.entries(aboutMe.links).map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-yellow-400 hover:text-green-400 transition-colors duration-200"
                >
                  {key === "github" && <Github className="w-5 h-5 mr-2" />}
                  {key === "linkedin" && <Linkedin className="w-5 h-5 mr-2" />}
                  {key === "email" && <Mail className="w-5 h-5 mr-2" />}
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
