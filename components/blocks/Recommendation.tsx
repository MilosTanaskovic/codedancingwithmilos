import { Content } from "@/types/mdx";
import Image from "next/image";
import React from "react";
import { CustomMDX } from "../mdx/mdx";

interface RecommendationProps {
  data: Content;
}

const Recommendation: React.FC<RecommendationProps> = ({ data }) => {
  const { metadata, slug, content } = data;
  return (
    <div className="relative group">
      <div className="flex items-start">
        <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
          <Image
            className="rounded-full"
            src={metadata.image || "/default-avatar.png"}
            width={56}
            height={56}
            alt={metadata?.name || "Recommendation avatar"}
          />
        </div>
        <div className="pl-20 space-y-1">
          <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
            {metadata.name}
          </div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
            {metadata.position}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <CustomMDX source={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
