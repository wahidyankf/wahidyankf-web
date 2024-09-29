"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Award,
  Search,
  User,
  Linkedin,
  Globe,
  Mail,
  Star,
  Languages,
  FileCheck,
  GithubIcon,
} from "lucide-react";
import { cvData, CVEntry } from "../data";

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-300 text-gray-900">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const CVEntryComponent = ({
  entry,
  searchTerm,
}: {
  entry: CVEntry;
  searchTerm: string;
}) => (
  <div className="mb-4 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
    {entry.type !== "language" && (
      <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400">
        {highlightText(entry.title, searchTerm)}
      </h3>
    )}
    {entry.organization && entry.period && (
      <p className="mb-2 text-green-300">
        {highlightText(entry.organization, searchTerm)} |{" "}
        {highlightText(entry.period, searchTerm)}
      </p>
    )}
    {entry.type === "about" ? (
      <>
        {entry.details.map((detail, index) => (
          <p key={index} className="mb-2 text-green-200">
            {highlightText(detail, searchTerm)}
          </p>
        ))}
        {entry.skills && (
          <>
            <h4 className="text-lg font-semibold mb-2 text-yellow-400 mt-4">
              Top Skills
            </h4>
            <ul className="list-none grid grid-cols-2 gap-2 mb-2 text-green-200">
              {entry.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  {highlightText(skill, searchTerm)}
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    ) : entry.type === "language" ? (
      <ul className="list-none mb-2 text-green-200">
        {entry.details.map((item, index) => {
          const [language, proficiency] = item.split("|");
          return (
            <li key={index} className="mb-2 flex items-start">
              <Globe className="w-4 h-4 mr-2 mt-1 text-yellow-400" />
              <div>
                <span className="font-semibold">
                  {highlightText(language, searchTerm)}
                </span>
                <br />
                <span className="text-sm text-green-300">
                  {highlightText(proficiency, searchTerm)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    ) : (
      <ul className="list-disc list-inside mb-2 text-green-200">
        {entry.details.map((detail, index) => (
          <li key={index} className="mb-1">
            {highlightText(detail, searchTerm)}
          </li>
        ))}
      </ul>
    )}
    {entry.links && (
      <div className="mt-4 flex flex-wrap gap-4">
        {Object.entries(entry.links).map(([key, value]) => (
          <a
            key={key}
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-green-400 transition-colors duration-200 flex items-center"
          >
            {key === "github" && <GithubIcon className="w-4 h-4 mr-1" />}
            {key === "githubOrg" && <GithubIcon className="w-4 h-4 mr-1" />}
            {key === "linkedin" && <Linkedin className="w-4 h-4 mr-1" />}
            {key === "website" && <Globe className="w-4 h-4 mr-1" />}
            {key === "email" && <Mail className="w-4 h-4 mr-1" />}
            {key === "credential" && <FileCheck className="w-4 h-4 mr-1" />}
            {highlightText(
              key === "github"
                ? "GitHub"
                : key === "githubOrg"
                ? "GitHub (Org)"
                : key === "linkedin"
                ? "LinkedIn"
                : key === "website"
                ? "Website"
                : key === "email"
                ? "Email"
                : key === "credential"
                ? "View Credential"
                : key,
              searchTerm
            )}
          </a>
        ))}
      </div>
    )}
  </div>
);

const CVSection = ({
  title,
  entries,
  icon,
  searchTerm,
}: {
  title: string;
  entries: CVEntry[];
  icon: React.ReactNode;
  searchTerm: string;
}) => (
  <div className="mb-8">
    <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400 flex items-center">
      {icon}
      <span className="ml-2">{highlightText(title, searchTerm)}</span>
    </h2>
    {entries.map((entry, index) => (
      <CVEntryComponent key={index} entry={entry} searchTerm={searchTerm} />
    ))}
  </div>
);

export default function CV() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntries = useMemo(
    () =>
      cvData.filter(
        (entry) =>
          entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.details.some((detail) =>
            detail.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          (entry.skills &&
            entry.skills.some((skill) =>
              skill.toLowerCase().includes(searchTerm.toLowerCase())
            )) ||
          (entry.links &&
            Object.values(entry.links).some((link) =>
              link.toLowerCase().includes(searchTerm.toLowerCase())
            ))
      ),
    [searchTerm]
  );

  const aboutEntry = filteredEntries.find((entry) => entry.type === "about");
  const workEntries = filteredEntries.filter((entry) => entry.type === "work");
  const honorEntries = filteredEntries.filter(
    (entry) => entry.type === "honor"
  );
  const certificationEntries = filteredEntries.filter(
    (entry) => entry.type === "certification"
  );
  const languageEntry = filteredEntries.find(
    (entry) => entry.type === "language"
  );
  const educationEntries = filteredEntries.filter(
    (entry) => entry.type === "education"
  );

  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          Curriculum Vitae
        </h1>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search CV entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 text-green-400 border border-green-400 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
        </div>

        {filteredEntries.length > 0 ? (
          <>
            {aboutEntry && (
              <CVSection
                title="Highlights"
                entries={[aboutEntry]}
                icon={<User className="w-6 h-6" />}
                searchTerm={searchTerm}
              />
            )}
            <CVSection
              title="Work Experience"
              entries={workEntries}
              icon={<Briefcase className="w-6 h-6" />}
              searchTerm={searchTerm}
            />
            <CVSection
              title="Honors & Awards"
              entries={honorEntries}
              icon={<Award className="w-6 h-6" />}
              searchTerm={searchTerm}
            />
            <CVSection
              title="Licenses & Certifications"
              entries={certificationEntries}
              icon={<FileCheck className="w-6 h-6" />}
              searchTerm={searchTerm}
            />
            {languageEntry && (
              <CVSection
                title="Languages"
                entries={[languageEntry]}
                icon={<Languages className="w-6 h-6" />}
                searchTerm={searchTerm}
              />
            )}
            <CVSection
              title="Education"
              entries={educationEntries}
              icon={<GraduationCap className="w-6 h-6" />}
              searchTerm={searchTerm}
            />
          </>
        ) : (
          <p className="text-center text-yellow-400">
            No CV entries found matching your search.
          </p>
        )}

        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
