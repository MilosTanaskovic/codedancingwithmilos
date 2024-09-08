import React, { useEffect, useState } from "react";
import { Filter } from "../ui";
import { FilterItem } from "@/types/filter";

interface ArticleFilterProps {
  selectedTopic: string;
  onFilterChange: (topic: string) => void;
}

const filterData: FilterItem[] = [
  {
    id: 1,
    name: "React Ecosystem",
    topic: "react",
    linkUrl: "",
    styleLink: `text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300`,
  },
  {
    id: 2,
    name: "JavaScript Ecosystem",
    topic: "javascript",
    linkUrl: "",
    styleLink:
      " text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
  },
  {
    id: 3,
    name: "C# Ecosystem",
    topic: "csharp",
    linkUrl: "",
    styleLink:
      "text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
  },
  {
    id: 4,
    name: ".NET",
    topic: "dotnet",
    linkUrl: "",
    styleLink:
      "text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
  },
];

const ArticleFilter: React.FC<ArticleFilterProps> = ({
  selectedTopic: propSelectedTopic,
  onFilterChange,
}) => {
  // Use state to track selected topic
  const [selectedTopic, setSelectedTopic] = useState(
    propSelectedTopic || filterData[0].topic
  );

  // Handle filter change
  const handleFilterChange = (topic: string) => {
    setSelectedTopic(topic); // Update the selected topic in the state
    onFilterChange(topic); // Notify parent about the selection
  };

  useEffect(() => {
    // If propSelectedTopic changes, update the state
    if (propSelectedTopic && propSelectedTopic !== selectedTopic) {
      setSelectedTopic(propSelectedTopic);
    }
  }, [propSelectedTopic]);
  return (
    <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
      {filterData?.map((filter) => {
        return (
          <Filter
            key={filter.id}
            name={filter.name}
            linkUrl={filter.linkUrl!}
            styleLink={
              filter.topic === selectedTopic
                ? "font-medium text-slate-800 dark:text-slate-100 border-b-2 border-cdwmcp-blue"
                : filter.styleLink
            }
            onClick={() => handleFilterChange(filter.topic)}
          />
        );
      })}
    </ul>
  );
};

export default ArticleFilter;
