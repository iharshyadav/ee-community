import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-green-600 dark:text-green-400">
          EmissionGPT
        </h1>
        <p className="mb-6 flex items-center justify-center gap-1 text-sm sm:text-base">
          Developed by:
          <a
            href="https://www.earthemission.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 font-bold hover:underline"
          >
            earthemission - carbon management SaaS solution
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          {
            icon: SunIcon,
            title: "Examples",
            items: [
              "Explain quantum computing in simple terms",
              "Got any creative ideas for a 10 year old's birthday?",
              "How do I make an HTTP request in Javascript?",
            ],
          },
          {
            icon: BoltIcon,
            title: "Capabilities",
            items: [
              "Remembers what user said earlier in the conversation",
              "Allows user to provide follow-up corrections",
              "Trained to decline inappropriate requests",
            ],
          },
          {
            icon: ExclamationTriangleIcon,
            title: "Limitations",
            items: [
              "May occasionally generate incorrect information",
              "May occasionally produce harmful instructions or biased content",
              "Limited knowledge of world and events after 2021",
            ],
          },
        ].map((section, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <section.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h2 className="text-xl font-semibold mt-2">{section.title}</h2>
            </div>
            <div className="space-y-3 w-full">
              {section.items.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
