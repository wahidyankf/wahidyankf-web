"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ExternalLink } from "lucide-react";
import { projectsData, Project } from "../data";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
    <h3 className="text-lg sm:text-xl md:text-2xl mb-2 text-yellow-400">
      {project.title}
    </h3>
    {project.image && (
      <div className="mb-4">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    )}
    <p className="mb-2 text-green-200">{project.description}</p>
    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-1 text-yellow-400">
        Technologies:
      </h4>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <li
            key={index}
            className="bg-gray-700 text-green-300 px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:text-green-400 transition-colors duration-200 flex items-center"
    >
      <ExternalLink className="w-4 h-4 mr-1" />
      View Project
    </a>
  </div>
);

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <main className="min-h-screen bg-gray-900 text-green-400 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          Projects
        </h1>

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

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
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
