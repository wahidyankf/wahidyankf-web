import React from "react";

export const parseMarkdownLinks = (text: string): React.ReactNode[] => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  return text.split(linkRegex).map((part, index) => {
    if (index % 3 === 1) {
      return (
        <a
          key={index}
          href={text.split(linkRegex)[index + 1]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-green-400 transition-colors duration-200"
        >
          {part}
        </a>
      );
    } else if (index % 3 === 0) {
      return part;
    }
    return null;
  });
};
