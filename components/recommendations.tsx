import dynamic from "next/dynamic";
import { getRecommendationsContent } from "./mdx/utils";
import { Suspense } from "react";

// const RecommendationTabs = dynamic(() => import("./RecommendationTabs"), {
//   ssr: true,
// });
import RecommendationTabs from "./RecommendationTabs";
import SkeletonCard from "./cards/SkeletonCard";

export default function Recommendations() {
  // get recommendations data
  const getRecommendationData = getRecommendationsContent();

  // Sort recommendations data by `metadata.sort` in ascending order
  const sortedRecommendations = getRecommendationData.sort((a, b) => {
    if (a.metadata.sort && b.metadata.sort) {
      return parseInt(a.metadata.sort) - parseInt(b.metadata.sort);
    }
    return 0;
  });

  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        {sortedRecommendations[0].metadata.title}
      </h2>
      <Suspense fallback={<SkeletonCard />}>
        <RecommendationTabs data={sortedRecommendations} />
      </Suspense>
    </div>
  );
}
