import { Content, Metadata } from "@/types/mdx";
import React from "react";
import PostDate from "../post-date";
import { CustomMDX } from "../mdx/mdx";
import Image from "next/image";

interface EducationProps {
  data: Content;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  const { metadata, slug, content } = data;

  return (
    <li className="relative group">
      <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
        <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
          <Image
            src={metadata.logo || "/default-logo.png"}
            width={34}
            height={34}
            alt={metadata?.schoolName || "School logo"}
          />
        </div>
        <div className="pl-20 space-y-1">
          <div className="text-xs text-slate-500 uppercase">
            <PostDate dateString={metadata.startDate || ""} />{" "}
            <span className="text-slate-400 dark:text-slate-600">·</span>
            {metadata.endDate !== "Pressent" ? (
              <PostDate dateString={metadata.endDate || ""} />
            ) : (
              metadata.endDate
            )}
          </div>
          <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
            {metadata.schoolName}
          </div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
            {metadata.fieldOfStudy}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <CustomMDX source={content} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Education;
