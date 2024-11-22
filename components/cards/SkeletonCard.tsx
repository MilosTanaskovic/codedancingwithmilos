import React from "react";
import { Skeleton } from "../ui/skeleton";

type SkeletonCardProps = {};

const SkeletonCard: React.FC<SkeletonCardProps> = ({}) => {
  return (
    <div className=" p-4 max-w-md w-full h-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-blue-400 h-12 w-12"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-blue-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-blue-400 rounded col-span-2"></div>
              <div className="h-2 bg-blue-400 rounded col-span-1"></div>
              <div className="h-2 bg-blue-400 rounded col-span-2"></div>
              <div className="h-2 bg-blue-400 rounded col-span-1"></div>
              <div className="h-2 bg-blue-400 rounded col-span-2"></div>
              <div className="h-2 bg-blue-400 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
