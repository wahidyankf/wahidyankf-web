"use client";

import React, { ReactNode } from "react";

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
    <div className="bg-black text-green-400 p-4 rounded-lg shadow-lg font-mono text-sm flex flex-col h-[calc(100vh-8rem)] sm:h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)] lg:h-[calc(100vh-14rem)]">
      <div className="mb-2 flex space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="overflow-y-auto flex-grow">
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
