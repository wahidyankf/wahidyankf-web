"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Github, Globe, Youtube, Search } from "lucide-react";
import { filterItems } from "@/utils/search";

type Project = {
  title: string;
  description: string;
  details: string[];
  links: {
    [key: string]: string;
  };
};

const projects: Project[] = [
  {
    title: "AyoKoding",
    description:
      "A website to learn about software engineering through books, blogs, and YouTube videos. Created to learn in public and give back to the community.",
    details: [
      "Comprehensive learning resources for software engineering",
      "Public learning platform to share knowledge",
      "Includes a YouTube channel for video content",
    ],
    links: {
      repository: "https://github.com/organiclever/ayokoding",
      website: "https://ayokoding.com/",
      YouTube: "https://www.youtube.com/@AyoKoding",
    },
  },
  {
    title: "Organic Lever",
    description:
      "A web application focused on team and personal productivity (in progress).",
    details: [
      "Aims to improve team collaboration",
      "Enhances personal productivity",
      "Web-based application for easy access",
    ],
    links: {
      website: "http://organiclever.com/",
    },
  },
  {
    title: "The Organic",
    description:
      "A repository to showcase open source projects and toy-projects.",
    details: [
      "Collection of various open source contributions",
      "Includes experimental and learning projects",
      "Demonstrates diverse coding skills and interests",
    ],
    links: {
      repository: "https://github.com/organiclever/the-organic",
    },
  },
];

const LinkIcon = ({ type }: { type: string }) => {
  switch (type.toLowerCase()) {
    case "repository":
      return <Github className="inline-block w-4 h-4 mr-1" />;
    case "youtube":
      return <Youtube className="inline-block w-4 h-4 mr-1" />;
    default:
      return <Globe className="inline-block w-4 h-4 mr-1" />;
  }
};

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

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => (
  <div className="mb-8 relative">
    <input
      type="text"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full bg-gray-800 text-green-400 border border-green-400 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
  </div>
);

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(
    () =>
      filterItems(projects, searchTerm, [
        "title",
        "description",
        "details",
        "links",
      ]),
    [searchTerm]
  );

  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          Personal Projects
        </h1>

        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="mb-8 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-2 text-yellow-400">
                {highlightText(project.title, searchTerm)}
              </h2>
              <p className="mb-2 text-green-300">
                {highlightText(project.description, searchTerm)}
              </p>
              <ul className="list-disc list-inside mb-2 text-green-200">
                {project.details.map((detail, index) => (
                  <li key={index} className="mb-1">
                    {highlightText(detail, searchTerm)}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                {Object.entries(project.links).map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 underline decoration-yellow-400 hover:text-green-400 hover:decoration-green-400 transition-all duration-200 mr-4 inline-flex items-center"
                  >
                    <LinkIcon type={key} />
                    {highlightText(
                      key.charAt(0).toUpperCase() + key.slice(1),
                      searchTerm
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-yellow-400">
            No projects found matching your search.
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
