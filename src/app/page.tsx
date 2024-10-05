"use client";

import {
  Briefcase,
  FolderOpen,
  Github,
  Linkedin,
  Mail,
  Star,
  Code,
  Package,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  cvData,
  getTopSkillsLastFiveYears,
  getTopLanguagesLastFiveYears,
  getTopFrameworksLastFiveYears,
  formatDuration,
} from "@/app/data";
import { Navigation } from "@/components/Navigation";
import { useMemo, useState, useEffect, useCallback } from "react";
import { parseMarkdownLinks } from "@/lib/utils/markdown";
import { filterItems } from "@/utils/search";
import { Key } from "react";

interface Searchable {
  name: string;
  duration: number;
  [key: string]: string | number; // Add index signature
}

const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  updateURL,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  updateURL: (term: string) => void;
}) => {
  const throttledUpdateURL = useCallback(
    (value: string) => throttle(updateURL, 300)(value),
    [updateURL]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    throttledUpdateURL(newTerm);
  };

  return (
    <div className="mb-8 relative">
      <input
        type="text"
        placeholder="Search skills, languages, or frameworks..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full bg-gray-800 text-green-400 border border-green-400 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const aboutMe = cvData.find((entry) => entry.type === "about");
  const topSkills = useMemo(() => getTopSkillsLastFiveYears(cvData), []);
  const topLanguages = useMemo(() => getTopLanguagesLastFiveYears(cvData), []);
  const topFrameworks = useMemo(
    () => getTopFrameworksLastFiveYears(cvData),
    []
  );

  const filterByName = useCallback(
    (items: Searchable[]) => filterItems(items, searchTerm, ["name"]),
    [searchTerm]
  );

  const filteredSkills = useMemo(
    () => filterByName(topSkills as Searchable[]),
    [topSkills, filterByName]
  );
  const filteredLanguages = useMemo(
    () => filterByName(topLanguages as Searchable[]),
    [topLanguages, filterByName]
  );
  const filteredFrameworks = useMemo(
    () => filterByName(topFrameworks as Searchable[]),
    [topFrameworks, filterByName]
  );

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const updateURL = useCallback(
    (term: string) => {
      const newURL = term ? `/?search=${encodeURIComponent(term)}` : "/";
      router.push(newURL, { scroll: false });
    },
    [router]
  );

  const highlightText = (text: string): React.ReactNode => {
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

  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row pb-20 lg:pb-0">
      <Navigation activePage="home" />
      <div className="flex-grow max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          Welcome to My Portfolio
        </h1>

        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          updateURL={updateURL}
        />

        <section className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400">
            About Me
          </h2>
          {aboutMe?.details.map((detail, index) => (
            <p key={index} className="mb-4 text-green-300">
              {parseMarkdownLinks(detail)}
            </p>
          ))}
        </section>

        <section className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400">
            Skills & Expertise
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-300">
                Top Skills Used in The Last 5 Years
              </h3>
              <div className="flex flex-wrap gap-2">
                {filteredSkills.map(({ name, duration }) => (
                  <span
                    key={name as Key}
                    className="bg-gray-800 text-green-400 px-2 py-1 rounded-md text-sm flex items-center"
                  >
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="mr-2">
                      {highlightText(name as string)}
                    </span>
                    <span className="text-xs text-green-300">
                      ({formatDuration(duration as number)})
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-300">
                Top Programming Languages Used in The Last 5 Years
              </h3>
              <div className="flex flex-wrap gap-2">
                {filteredLanguages.map(({ name, duration }) => (
                  <span
                    key={name as Key}
                    className="bg-gray-800 text-green-400 px-2 py-1 rounded-md text-sm flex items-center"
                  >
                    <Code className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="mr-2">
                      {highlightText(name as string)}
                    </span>
                    <span className="text-xs text-green-300">
                      ({formatDuration(duration as number)})
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-300">
                Top Frameworks & Libraries Used in The Last 5 Years
              </h3>
              <div className="flex flex-wrap gap-2">
                {filteredFrameworks.map(({ name, duration }) => (
                  <span
                    key={name as Key}
                    className="bg-gray-800 text-green-400 px-2 py-1 rounded-md text-sm flex items-center"
                  >
                    <Package className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="mr-2">
                      {highlightText(name as string)}
                    </span>
                    <span className="text-xs text-green-300">
                      ({formatDuration(duration as number)})
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
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
        </section>

        <section className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
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
        </section>
      </div>
    </main>
  );
}
