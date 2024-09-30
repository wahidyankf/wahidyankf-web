"use client";

import {
  Award,
  Briefcase,
  FileCheck,
  GithubIcon,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  Search,
  Star,
  ToggleLeft,
  ToggleRight,
  User,
  ChevronRight,
  ChevronDown,
  Home,
  FolderOpen,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CVEntry, cvData } from "../data";
import { filterItems } from "@/utils/search";

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

const parseDate = (dateString: string): Date => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, year] = dateString.split(" ");
  const monthIndex = months.indexOf(month);
  if (monthIndex === -1) {
    throw new Error(`Invalid month: ${month}`);
  }
  return new Date(parseInt(year), monthIndex);
};

const calculateDuration = (period: string): number => {
  const [start, end] = period.split(" - ");
  let startDate: Date, endDate: Date;

  try {
    startDate = parseDate(start);
    endDate = end === "Present" ? new Date() : parseDate(end);
  } catch (error) {
    console.error("Error parsing date:", error);
    return 0;
  }

  // Calculate the difference in months
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1; // Add 1 to include the end month

  // If the end date is not the last day of the month, and it's before the start day,
  // subtract one month to avoid overcounting
  if (
    endDate.getDate() < startDate.getDate() &&
    endDate.getDate() <
      new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate()
  ) {
    months--;
  }

  return months;
};

const formatDuration = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${
      remainingMonths > 1 ? "s" : ""
    }`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else {
    return `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }
};

const CVEntryComponent = ({
  entry,
  searchTerm,
}: {
  entry: CVEntry;
  searchTerm: string;
}) => (
  <div className="mb-4 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
    <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400">
      {highlightText(entry.title, searchTerm)}
    </h3>
    {entry.period && (
      <p className="mb-2 text-green-300">
        {highlightText(entry.period, searchTerm)}
        {entry.type === "work" && (
          <span className="ml-2 text-yellow-400">
            (
            {highlightText(
              formatDuration(calculateDuration(entry.period)),
              searchTerm
            )}
            )
          </span>
        )}
      </p>
    )}
    {entry.employmentType && entry.location && entry.locationType && (
      <p className="mb-2 text-green-200">
        {highlightText(
          `${entry.employmentType} | ${entry.location} | ${entry.locationType}`,
          searchTerm
        )}
      </p>
    )}
    {entry.type === "work" ? (
      <ul className="list-disc list-inside mb-2 text-green-200">
        {entry.details.map((detail, index) => (
          <li key={index} className="mb-1">
            {highlightText(detail, searchTerm)}
          </li>
        ))}
      </ul>
    ) : (
      entry.details.map((detail, index) => (
        <p key={index} className="mb-2 text-green-200">
          {highlightText(detail, searchTerm)}
        </p>
      ))
    )}
    {entry.skills && (
      <>
        <h4 className="text-lg font-semibold mb-2 text-yellow-400 mt-4">
          Skills
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

const StickyHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="sticky top-0 z-10 bg-gray-900 py-2 mb-4">{children}</div>
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
    <StickyHeader>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 flex items-center">
        {icon}
        <span className="ml-2">{highlightText(title, searchTerm)}</span>
      </h2>
    </StickyHeader>
    {entries.map((entry, index) => (
      <CVEntryComponent key={index} entry={entry} searchTerm={searchTerm} />
    ))}
  </div>
);

const isWithinLastFiveYears = (endDate: string): boolean => {
  const date = endDate === "Present" ? new Date() : parseDate(endDate);
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
  return date >= fiveYearsAgo;
};

const WorkExperienceSection = ({
  entries,
  searchTerm,
}: {
  entries: CVEntry[];
  searchTerm: string;
}) => {
  const [showRecentOnly, setShowRecentOnly] = useState(false);

  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.organization]) {
      acc[entry.organization] = [];
    }
    acc[entry.organization].push(entry);
    return acc;
  }, {} as Record<string, CVEntry[]>);

  // Sort entries within each organization by date (most recent first)
  Object.values(groupedEntries).forEach((orgEntries) => {
    orgEntries.sort((a, b) => {
      const dateA = parseDate(a.period.split(" - ")[0]);
      const dateB = parseDate(b.period.split(" - ")[0]);
      return dateB.getTime() - dateA.getTime();
    });
  });

  // Sort organizations by the most recent job
  const sortedOrganizations = Object.keys(groupedEntries).sort((a, b) => {
    const dateA = parseDate(groupedEntries[a][0].period.split(" - ")[0]);
    const dateB = parseDate(groupedEntries[b][0].period.split(" - ")[0]);
    return dateB.getTime() - dateA.getTime();
  });

  // Calculate total duration for each organization and overall
  const organizationDurations = sortedOrganizations.reduce((acc, org) => {
    const totalMonths = groupedEntries[org].reduce(
      (sum, entry) => sum + calculateDuration(entry.period),
      0
    );
    acc[org] = formatDuration(totalMonths);
    return acc;
  }, {} as Record<string, string>);

  const totalWorkExperience = formatDuration(
    sortedOrganizations.reduce((total, org) => {
      return (
        total +
        groupedEntries[org].reduce(
          (sum, entry) => sum + calculateDuration(entry.period),
          0
        )
      );
    }, 0)
  );

  const filteredOrganizations = sortedOrganizations.filter((org) =>
    groupedEntries[org].some((entry) => {
      const [, endDate] = entry.period.split(" - ");
      return !showRecentOnly || isWithinLastFiveYears(endDate);
    })
  );

  return (
    <div className="mb-8">
      <StickyHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            {highlightText("Work Experience", searchTerm)}
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-green-300 mr-2">
              Show recent only (≤5 years)
            </span>
            <button
              onClick={() => setShowRecentOnly(!showRecentOnly)}
              className="text-yellow-400 hover:text-green-400 transition-colors duration-200"
            >
              {showRecentOnly ? (
                <ToggleRight className="w-6 h-6" />
              ) : (
                <ToggleLeft className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div className="text-sm text-green-300 mt-2">
          Total: {highlightText(totalWorkExperience, searchTerm)}
        </div>
      </StickyHeader>
      {filteredOrganizations.map((organization) => (
        <div
          key={organization}
          className="mb-6 border border-green-400 rounded-lg p-4"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400 flex justify-between items-center">
            <span>{highlightText(organization, searchTerm)}</span>
            <span className="text-sm text-green-300">
              Total:{" "}
              {highlightText(organizationDurations[organization], searchTerm)}
            </span>
          </h3>
          {groupedEntries[organization]
            .filter((entry) => {
              const [, endDate] = entry.period.split(" - ");
              return !showRecentOnly || isWithinLastFiveYears(endDate);
            })
            .map((entry, index) => (
              <CVEntryComponent
                key={index}
                entry={entry}
                searchTerm={searchTerm}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

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

export default function CV() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntries = useMemo(
    () =>
      filterItems(cvData, searchTerm, [
        "title",
        "organization",
        "details",
        "skills",
        "links",
        "employmentType",
        "location",
        "locationType",
      ]),
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
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row pb-20 lg:pb-0">
      <nav className="w-64 pr-4 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Navigation</h2>
        <NavItem
          title="Home"
          icon={<Home className="w-6 h-6" />}
          href="/"
          active={false}
        />
        <NavItem
          title="CV"
          icon={<Briefcase className="w-6 h-6" />}
          href="/cv"
          active={true}
        />
        <NavItem
          title="Projects"
          icon={<FolderOpen className="w-6 h-6" />}
          href="/personal-projects"
          active={false}
        />
      </nav>
      <div className="flex-grow max-w-4xl mx-auto">
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
              <div id="highlights">
                <CVSection
                  title="Highlights"
                  entries={[aboutEntry]}
                  icon={<User className="w-6 h-6" />}
                  searchTerm={searchTerm}
                />
              </div>
            )}
            <div id="work">
              <WorkExperienceSection
                entries={workEntries}
                searchTerm={searchTerm}
              />
            </div>
            <div id="honors">
              <CVSection
                title="Honors & Awards"
                entries={honorEntries}
                icon={<Award className="w-6 h-6" />}
                searchTerm={searchTerm}
              />
            </div>
            <div id="certifications">
              <CVSection
                title="Licenses & Certifications"
                entries={certificationEntries}
                icon={<FileCheck className="w-6 h-6" />}
                searchTerm={searchTerm}
              />
            </div>
            {languageEntry && (
              <div id="languages">
                <CVSection
                  title="Languages"
                  entries={[languageEntry]}
                  icon={<Languages className="w-6 h-6" />}
                  searchTerm={searchTerm}
                />
              </div>
            )}
            <div id="education">
              <CVSection
                title="Education"
                entries={educationEntries}
                icon={<GraduationCap className="w-6 h-6" />}
                searchTerm={searchTerm}
              />
            </div>
          </>
        ) : (
          <p className="text-center text-yellow-400">
            No CV entries found matching your search.
          </p>
        )}
      </div>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-green-400 flex justify-around items-center p-2">
        <NavItem
          title="Home"
          icon={<Home className="w-6 h-6" />}
          href="/"
          active={false}
        />
        <NavItem
          title="CV"
          icon={<Briefcase className="w-6 h-6" />}
          href="/cv"
          active={true}
        />
        <NavItem
          title="Projects"
          icon={<FolderOpen className="w-6 h-6" />}
          href="/personal-projects"
          active={false}
        />
      </nav>
    </main>
  );
}
