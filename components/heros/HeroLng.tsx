import Link from "next/link";
import React from "react";
import GroupShareIcons from "../GroupShareIcons";
import PostDate from "../post-date";
import { Content } from "@/types/mdx";
import { CustomMDX } from "../mdx/mdx";

interface HeroLngProps {
  pageContent: Content;
}

const HeroLng: React.FC<HeroLngProps> = ({ pageContent }) => {
  console.log("content", pageContent);
  return (
    <div className="max-w-screen-md 2xl:max-w-screen-lg mb-8">
      {/* <div className="grow">
       <div className="max-w-[700px]"> */}
      {/* Back */}
      <div className="mb-3">
        <Link
          className="inline-flex text-cdwmcp-blue rounded-full border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
          href={`/`}
        >
          <span className="sr-only">Back</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
            <path
              className="fill-current"
              d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"
            />
          </svg>
        </Link>
      </div>

      <div className="flex items-center justify-between mb-1">
        {/* Date */}
        <div className="text-xs text-slate-500 uppercase">
          <span className="text-cdwmcp-blue">—</span> Last updated{" "}
          <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
          <PostDate dateString={"2024-11-11"} />{" "}
          <span className="text-cdwmcp-blue">—</span> Share with developers!
        </div>
        {/* Share buttons */}
        <GroupShareIcons
          page={pageContent.metadata.page || ""}
          mainUrl={pageContent.metadata.mainUrl || ""}
          slug={pageContent.slug}
        />
      </div>
      <h1 className="h1 font-aspekta mb-4">{pageContent.metadata.title}</h1>
      <div className="prose text-slate-500 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-cdwmcp-blue prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-pre:bg-slate-800 dark:prose-code:text-slate-200">
        <CustomMDX source={pageContent.content} />
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default HeroLng;
