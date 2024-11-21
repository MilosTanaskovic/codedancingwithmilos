import { Content } from "@/types/mdx";
import Image from "next/image";
import React from "react";

type WidgetReferenceProps = {
  data: Content;
};

const WidgetReference: React.FC<WidgetReferenceProps> = ({ data }) => {
  return (
    <li>
      <a
        className="flex justify-between items-center space-x-2 group"
        href={data?.metadata.mainUrl}
        target="_blank"
      >
        <div className="grow flex items-center space-x-3 truncate">
          <Image
            className="rounded-full"
            src={data?.metadata.image || "/default-logo.png"}
            width={32}
            height={32}
            alt={data?.metadata?.name || "Reference logo"}
          />
          <div className="truncate">
            <div className="font-aspekta font-[650] text-sm truncate mb-1">
              {data?.metadata.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {data?.metadata.position}
            </div>
          </div>
        </div>
        <div className="shrink-0 text-cdwmcp-blue">
          <svg
            className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
          >
            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
          </svg>
        </div>
      </a>
    </li>
  );
};

export default WidgetReference;
