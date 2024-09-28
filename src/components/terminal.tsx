"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

type Command = {
  command: string;
  output: string | ReactNode;
};

export default function Terminal({
  initialCommands,
}: {
  initialCommands: Command[];
}) {
  const renderOutput = (output: string | ReactNode) => {
    if (typeof output === "string") {
      return output;
    }
    if (React.isValidElement(output)) {
      return output;
    }
    return output;
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base overflow-hidden">
      <div className="mb-2 flex space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="overflow-y-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh]">
        {initialCommands.map((cmd, index) => (
          <div key={index} className="mb-2 sm:mb-3 md:mb-4">
            <div className="flex items-center flex-wrap">
              <span className="text-blue-400 mr-2 text-xs sm:text-sm md:text-base">
                guest@wahidyankf.com:~$
              </span>
              <span className="text-xs sm:text-sm md:text-base">
                {cmd.command}
              </span>
            </div>
            <div className="whitespace-pre-wrap text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
              {renderOutput(cmd.output)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
