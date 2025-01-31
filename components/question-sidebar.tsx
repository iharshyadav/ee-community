"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight,ChevronLeft } from "lucide-react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Progress } from "@nextui-org/react";

const environmentTopics = [
  { id: "climate-change", title: "Climate Change" },
  { id: "pollution", title: "Pollution" },
  { id: "water-marine", title: "Water and Marine Resource" },
  { id: "circular-economy", title: "Circular Economy" },
  { id: "biodiversity", title: "Biodiversity and Ecosystem" },
];

const governanceTopics = [
  { id: "business-conduct", title: "Business Conduct" },
];

const socialTopics = [
  { id: "affected-communities", title: "Affected Communities" },
  { id: "consumer-and-end-user", title: "Consumer and End Users" },
  { id: "own-workforce", title: "Own Workforce" },
  { id: "working-in-the-value-chain", title: "Workforce in Value Chain" },
];

const sectionTopics = {
  materiality: {
    environment: environmentTopics,
    social: socialTopics,
    governance: governanceTopics,
  },
  default: {
    environment: environmentTopics,
    governance: governanceTopics,
    social: socialTopics,
  },
};

export function CSRDSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const pathParts = pathname.split("/").filter(Boolean);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMateriality = pathParts.includes("materiality");
  const isGovernance = pathParts.includes("governance");
  const isEnvironment = pathParts.includes("environment");
  const currentSection = isMateriality ? pathParts[2] : pathParts[1];
  const currentTopic = params.id;

  const topicsToShow = isMateriality
    ? sectionTopics.materiality
    : {
        [currentSection]:
          sectionTopics.default[
            currentSection as keyof typeof sectionTopics.default
          ],
      };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleTopicClick = (section: string, topicId: string) => {
    if (isMateriality) {
      router.push(`/csrd/materiality/${section}/${topicId}`);
      return;
    }
    if (isGovernance) {
      router.push(`/csrd/governance/governance/${topicId}`);
      return;
    }
    if (isEnvironment) {
      router.push(`/csrd/environment/environment/${topicId}`);
      return;
    }
    router.push(`/csrd/social/social/${topicId}`);
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto relative`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-0 bottom-20 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30"
      >
        <ChevronLeft className={`h-5 w-5 text-green-600 dark:text-green-400 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
      </button>
      {isCollapsed ? (
        <div className="flex flex-col items-center pt-16 space-y-4">
          {Object.keys(topicsToShow).map((section) => (
            <button
              key={section}
              onClick={() => {
                setIsCollapsed(false);
                toggleSection(section);
              }}
              className={`p-2 rounded-lg ${
                currentSection === section
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                  : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {section.charAt(0).toUpperCase()}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <>
    <div className={`${isCollapsed ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-opacity duration-300`}>
       <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            DMS Progress
          </h3>
          <Progress value={45} color="success" className="h-2 mb-1" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            45% Complete
          </span>
        </div>
      </div>

      {Object.entries(topicsToShow).map(([section, topics]) => (
        <div
          key={section}
          className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          <button
            onClick={() => toggleSection(section)}
            className={`flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-700 ${
              currentSection === section
                ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                : "text-gray-900 dark:text-white"
            }`}
          >
            <div className="flex items-center space-x-2">
              {expandedSections.includes(section) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <span className="capitalize">{section}</span>
            </div>
          </button>

          {expandedSections.includes(section) && (
            <div className="pl-6">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicClick(section, topic.id)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    currentTopic === topic.id
                      ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {topic.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
      )}
    </div>
  );
}

export default CSRDSidebar;
