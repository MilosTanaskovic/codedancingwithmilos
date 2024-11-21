import Recommendation from "./blocks/Recommendation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Content } from "@/types/mdx";

interface RecommendationTabsProps {
  data: Content[];
}

const RecommendationTabs: React.FC<RecommendationTabsProps> = ({ data }) => {
  return (
    <Tabs defaultValue="received" className="w-full">
      <TabsList className="flex justify-start space-x-2">
        <TabsTrigger
          value="received"
          className="w-20 rounded-l-full bg-cdwmcp-blue text-cdwmcp-white"
        >
          Received
        </TabsTrigger>
        <TabsTrigger
          value="given"
          className="w-20 rounded-r-full bg-cdwmcp-blue text-cdwmcp-white"
        >
          Given
        </TabsTrigger>
      </TabsList>

      {/* Received Tab Content */}
      <TabsContent value="received">
        <Carousel
          opts={{ align: "start" }}
          orientation="vertical"
          className="w-full !mt-16 !mb-16"
        >
          <CarouselContent className="-mt-1 h-[300px] space-y-8">
            {data
              .filter((recommendation) => recommendation.metadata.status === "Received")
              .map((recommendation) => (
                <CarouselItem
                  key={recommendation.slug}
                  className="pt-1 md:basis-1/2"
                >
                  <Recommendation data={recommendation} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="text-cdwmcp-blue border-cdwmcp-blue dark:text-cdwmcp-white dark:border-cdwmcp-white" />
          <CarouselNext className="text-cdwmcp-blue border-cdwmcp-blue dark:text-cdwmcp-white dark:border-cdwmcp-white" />
        </Carousel>
      </TabsContent>

      {/* Given Tab Content */}
      <TabsContent value="given">
        <Carousel
          opts={{ align: "start" }}
          orientation="vertical"
          className="w-full !mt-16 !mb-16"
        >
          <CarouselContent className="-mt-1 h-[300px] space-y-8">
            {data
              .filter((recommendation) => recommendation.metadata.status === "Given")
              .map((recommendation) => (
                <CarouselItem
                  key={recommendation.slug}
                  className="pt-1 md:basis-1/2"
                >
                  <Recommendation data={recommendation} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="text-cdwmcp-blue border-cdwmcp-blue dark:text-cdwmcp-white dark:border-cdwmcp-white" />
          <CarouselNext className="text-cdwmcp-blue border-cdwmcp-blue dark:text-cdwmcp-white dark:border-cdwmcp-white" />
        </Carousel>
      </TabsContent>
    </Tabs>
  );
};

export default RecommendationTabs;