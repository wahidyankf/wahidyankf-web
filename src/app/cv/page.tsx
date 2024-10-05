"use client";

import { Navigation } from "@/components/Navigation";
import { filterItems } from "@/utils/search";
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
  Star,
  ToggleLeft,
  ToggleRight,
  User,
  Code,
  Package,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  CVEntry,
  cvData,
  parseDate,
  calculateDuration,
  formatDuration,
  calculateTotalDuration,
  getTopSkillsLastFiveYears,
  getTopLanguagesLastFiveYears,
  getTopFrameworksLastFiveYears,
} from "../data";
import { SearchComponent } from "@/components/SearchComponent";
import { HighlightText } from "@/components/HighlightText";

// Update the type definition for topSkills, topLanguages, and topFrameworks
type TopItem = { name: string; duration: number };

// Add this new component
const ClickableItem = ({
  name,
  duration,
  icon,
  searchTerm,
  handleItemClick,
}: {
  name: string;
  duration: number;
  icon: React.ReactNode;
  searchTerm: string;
  handleItemClick: (item: string) => void;
}) => (
  <button
    onClick={() => handleItemClick(name)}
    className="flex items-center justify-between w-full bg-gray-800 text-green-400 px-2 py-1 rounded-md text-sm hover:bg-gray-700 transition-colors duration-200"
  >
    <div className="flex items-center">
      {icon}
      <HighlightText text={name} searchTerm={searchTerm} />
    </div>
    <span className="text-xs text-green-300">
      (<HighlightText text={formatDuration(duration)} searchTerm={searchTerm} />
      )
    </span>
  </button>
);

// Update the DynamicSkillsComponent
const DynamicSkillsComponent = ({
  skills,
  languages,
  frameworks,
  searchTerm,
  handleItemClick,
}: {
  skills: TopItem[];
  languages: TopItem[];
  frameworks: TopItem[];
  searchTerm: string;
  handleItemClick: (item: string) => void;
}) => (
  <>
    <h4 className="text-lg font-semibold mb-2 text-yellow-400 mt-4">
      Top Skills Used in The Last 5 Years
    </h4>
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
      {skills.map(({ name, duration }, index) => (
        <li key={index}>
          <ClickableItem
            name={name}
            duration={duration}
            icon={<Star className="w-4 h-4 mr-2 text-yellow-400" />}
            searchTerm={searchTerm}
            handleItemClick={handleItemClick}
          />
        </li>
      ))}
    </ul>

    <h4 className="text-lg font-semibold mb-2 text-yellow-400 mt-4">
      Top Programming Languages Used in The Last 5 Years
    </h4>
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
      {languages.map(({ name, duration }, index) => (
        <li key={index}>
          <ClickableItem
            name={name}
            duration={duration}
            icon={<Code className="w-4 h-4 mr-2 text-yellow-400" />}
            searchTerm={searchTerm}
            handleItemClick={handleItemClick}
          />
        </li>
      ))}
    </ul>

    <h4 className="text-lg font-semibold mb-2 text-yellow-400 mt-4">
      Top Frameworks & Libraries Used in The Last 5 Years
    </h4>
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
      {frameworks.map(({ name, duration }, index) => (
        <li key={index}>
          <ClickableItem
            name={name}
            duration={duration}
            icon={<Package className="w-4 h-4 mr-2 text-yellow-400" />}
            searchTerm={searchTerm}
            handleItemClick={handleItemClick}
          />
        </li>
      ))}
    </ul>
  </>
);

// Update the CVEntryComponent prop types
const CVEntryComponent = ({
  entry,
  searchTerm,
  topSkills,
  topLanguages,
  topFrameworks,
  handleItemClick,
}: {
  entry: CVEntry;
  searchTerm: string;
  topSkills?: TopItem[];
  topLanguages?: TopItem[];
  topFrameworks?: TopItem[];
  handleItemClick: (item: string) => void;
}) => (
  <div className="mb-4 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
    <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400">
      <HighlightText text={entry.title} searchTerm={searchTerm} />
    </h3>
    {entry.period && (
      <p className="mb-2 text-green-300">
        <HighlightText text={entry.period} searchTerm={searchTerm} />
        {entry.type === "work" && (
          <span className="ml-2 text-yellow-400">
            (
            <HighlightText
              text={formatDuration(calculateDuration(entry.period))}
              searchTerm={searchTerm}
            />
            )
          </span>
        )}
      </p>
    )}
    {entry.type === "work" &&
      entry.employmentType &&
      entry.location &&
      entry.locationType && (
        <p className="mb-2 text-green-200">
          <HighlightText
            text={`${entry.employmentType} | ${entry.location} | ${entry.locationType}`}
            searchTerm={searchTerm}
          />
        </p>
      )}
    {entry.type === "work" ? (
      <ul className="list-disc list-inside mb-2 text-green-200">
        {entry.details.map((detail, index) => (
          <li key={index} className="mb-1">
            <HighlightText text={detail} searchTerm={searchTerm} />
          </li>
        ))}
      </ul>
    ) : (
      entry.details.map((detail, index) => (
        <p key={index} className="mb-2 text-green-200">
          <HighlightText text={detail} searchTerm={searchTerm} />
        </p>
      ))
    )}
    {entry.type === "work" && (
      <>
        {entry.skills && (
          <div className="mt-2">
            <h4 className="text-md font-semibold text-yellow-400">Skills:</h4>
            <ul className="list-none grid grid-cols-2 gap-2 mb-2">
              {entry.skills.map((skill, index) => (
                <li key={index}>
                  <ClickableItem
                    name={skill}
                    duration={0} // We don't have duration for individual skills in work entries
                    icon={<Star className="w-4 h-4 mr-2 text-yellow-400" />}
                    searchTerm={searchTerm}
                    handleItemClick={handleItemClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {entry.programmingLanguages && (
          <div className="mt-2">
            <h4 className="text-md font-semibold text-yellow-400">
              Programming Languages:
            </h4>
            <ul className="list-none grid grid-cols-2 gap-2 mb-2">
              {entry.programmingLanguages.map((lang, index) => (
                <li key={index}>
                  <ClickableItem
                    name={lang}
                    duration={0} // We don't have duration for individual languages in work entries
                    icon={<Code className="w-4 h-4 mr-2 text-yellow-400" />}
                    searchTerm={searchTerm}
                    handleItemClick={handleItemClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {entry.frameworks && (
          <div className="mt-2">
            <h4 className="text-md font-semibold text-yellow-400">
              Frameworks:
            </h4>
            <ul className="list-none grid grid-cols-2 gap-2 mb-2">
              {entry.frameworks.map((framework, index) => (
                <li key={index}>
                  <ClickableItem
                    name={framework}
                    duration={0} // We don't have duration for individual frameworks in work entries
                    icon={<Package className="w-4 h-4 mr-2 text-yellow-400" />}
                    searchTerm={searchTerm}
                    handleItemClick={handleItemClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )}
    {entry.type === "about" && topSkills && topLanguages && topFrameworks && (
      <DynamicSkillsComponent
        skills={topSkills}
        languages={topLanguages}
        frameworks={topFrameworks}
        searchTerm={searchTerm}
        handleItemClick={handleItemClick}
      />
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
            <HighlightText
              text={
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
                  : key
              }
              searchTerm={searchTerm}
            />
          </a>
        ))}
      </div>
    )}
  </div>
);

const StickyHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="sticky top-0 z-10 bg-gray-900 py-2 mb-4">{children}</div>
);

// Update the CVSection component
const CVSection = ({
  title,
  entries,
  icon,
  searchTerm,
  topSkills,
  topLanguages,
  topFrameworks,
  handleItemClick,
}: {
  title: string;
  entries: CVEntry[];
  icon: React.ReactNode;
  searchTerm: string;
  topSkills?: TopItem[];
  topLanguages?: TopItem[];
  topFrameworks?: TopItem[];
  handleItemClick: (item: string) => void;
}) => {
  return (
    <div className="mb-8">
      <StickyHeader>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 flex items-center">
          {icon}
          <span className="ml-2">
            <HighlightText text={title} searchTerm={searchTerm} />
          </span>
        </h2>
      </StickyHeader>
      {entries.map((entry, index) => (
        <CVEntryComponent
          key={index}
          entry={entry}
          searchTerm={searchTerm}
          topSkills={topSkills}
          topLanguages={topLanguages}
          topFrameworks={topFrameworks}
          handleItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};

const isWithinLastFiveYears = (endDate: string): boolean => {
  const date = endDate === "Present" ? new Date() : parseDate(endDate);
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
  return date >= fiveYearsAgo;
};

const WorkExperienceSection = ({
  entries,
  searchTerm,
  showRecentOnly,
  setShowRecentOnly,
  handleItemClick,
}: {
  entries: CVEntry[];
  searchTerm: string;
  showRecentOnly: boolean;
  setShowRecentOnly: (value: boolean) => void;
  handleItemClick: (item: string) => void;
}) => {
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
    const periods = groupedEntries[org].map((entry) => ({
      start: parseDate(entry.period.split(" - ")[0]),
      end:
        entry.period.split(" - ")[1] === "Present"
          ? new Date()
          : parseDate(entry.period.split(" - ")[1]),
    }));
    const totalMonths = calculateTotalDuration(periods);
    acc[org] = formatDuration(totalMonths);
    return acc;
  }, {} as Record<string, string>);

  const allPeriods = entries.map((entry) => ({
    start: parseDate(entry.period.split(" - ")[0]),
    end:
      entry.period.split(" - ")[1] === "Present"
        ? new Date()
        : parseDate(entry.period.split(" - ")[1]),
  }));
  const totalWorkExperience = formatDuration(
    calculateTotalDuration(allPeriods)
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
            <HighlightText text="Work Experience" searchTerm={searchTerm} />
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
          Total:{" "}
          <HighlightText text={totalWorkExperience} searchTerm={searchTerm} />
        </div>
      </StickyHeader>
      {filteredOrganizations.map((organization) => (
        <div
          key={organization}
          className="mb-6 border border-green-400 rounded-lg p-4"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400 flex justify-between items-center">
            <span>
              <HighlightText text={organization} searchTerm={searchTerm} />
            </span>
            <span className="text-sm text-green-300">
              Total:{" "}
              <HighlightText
                text={organizationDurations[organization]}
                searchTerm={searchTerm}
              />
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
                handleItemClick={handleItemClick}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

// In the main CV component, update the type of topSkills
export default function CV() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [showRecentOnly, setShowRecentOnly] = useState(false);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const updateURL = (term: string) => {
    const newURL = term ? `/cv?search=${encodeURIComponent(term)}` : "/cv";
    router.push(newURL, { scroll: false });
  };

  const handleItemClick = (item: string) => {
    setSearchTerm(item);
    updateURL(item);
  };

  const filteredEntries =
    filterItems(cvData, searchTerm, [
      "title",
      "organization",
      "details",
      "skills",
      "programmingLanguages",
      "frameworks",
    ]) || []; // Provide an empty array as fallback

  const topSkills = getTopSkillsLastFiveYears(cvData);
  const topLanguages = getTopLanguagesLastFiveYears(cvData);
  const topFrameworks = getTopFrameworksLastFiveYears(cvData);

  const aboutEntry =
    filteredEntries.find((entry) => entry.type === "about") || null;
  const workEntries = filteredEntries.filter((entry) => entry.type === "work");
  const honorEntries = filteredEntries.filter(
    (entry) => entry.type === "honor"
  );
  const licenseEntries = filteredEntries.filter(
    (entry) => entry.type === "license"
  );
  const languageEntries = filteredEntries.filter(
    (entry) => entry.type === "language"
  );
  const educationEntries = filteredEntries.filter(
    (entry) => entry.type === "education"
  );

  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row pb-20 lg:pb-0">
      <Navigation activePage="cv" />
      <div className="flex-grow max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          Curriculum Vitae
        </h1>

        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          updateURL={updateURL}
          placeholder="Search CV entries..."
        />

        {filteredEntries.length > 0 ? (
          <>
            {aboutEntry && (
              <div id="highlights">
                <CVSection
                  title="Highlights"
                  entries={[aboutEntry]}
                  icon={<User className="w-6 h-6" />}
                  searchTerm={searchTerm}
                  topSkills={topSkills}
                  topLanguages={topLanguages}
                  topFrameworks={topFrameworks}
                  handleItemClick={handleItemClick}
                />
              </div>
            )}
            <div id="work">
              <WorkExperienceSection
                entries={workEntries}
                searchTerm={searchTerm}
                showRecentOnly={showRecentOnly}
                setShowRecentOnly={setShowRecentOnly}
                handleItemClick={handleItemClick}
              />
            </div>
            <div id="honors">
              <CVSection
                title="Honors & Awards"
                entries={honorEntries}
                icon={<Award className="w-6 h-6" />}
                searchTerm={searchTerm}
                handleItemClick={handleItemClick}
              />
            </div>
            <div id="licenses">
              <CVSection
                title="Licenses & Certifications"
                entries={licenseEntries}
                icon={<FileCheck className="w-6 h-6" />}
                searchTerm={searchTerm}
                handleItemClick={handleItemClick}
              />
            </div>
            {languageEntries.length > 0 && (
              <div id="languages">
                <CVSection
                  title="Languages"
                  entries={languageEntries}
                  icon={<Languages className="w-6 h-6" />}
                  searchTerm={searchTerm}
                  handleItemClick={handleItemClick}
                />
              </div>
            )}
            <div id="education">
              <CVSection
                title="Education"
                entries={educationEntries}
                icon={<GraduationCap className="w-6 h-6" />}
                searchTerm={searchTerm}
                handleItemClick={handleItemClick}
              />
            </div>
          </>
        ) : (
          <p className="text-center text-yellow-400">
            No CV entries found matching your search.
          </p>
        )}
      </div>
    </main>
  );
}
