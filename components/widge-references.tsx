import Image from "next/image";

import Reference01 from "@/public/images/reference-01.jpg";
import Reference02 from "@/public/images/reference-02.jpg";
import WidgetReference from "./widgets/WidgetReference";
import { getRecommendationsContent } from "./mdx/utils";

export default function WidgetReferences() {
  // get References data
  const getRecommendationData = getRecommendationsContent();

  // Filter References where `metadata.reference` is "yes"
  const filteredReferences = getRecommendationData.filter(
    (item) => item.metadata.reference === "yes"
  );

  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">References</div>
      <ul className="space-y-3">
        {filteredReferences.map((reference) => (
          <WidgetReference 
            key={reference.metadata.name}
            data={reference} 
          />
        ))}
      </ul>
    </div>
  );
}
