import Talks from "@/components/talks";
import FeaturedProjects from "@/components/featured-projects";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import Posts from "@/components/posts/Posts";
import {
  getJavaScriptBlogPosts,
  getJavaScriptEcosystemPageContent,
} from "@/components/mdx/utils";
import RightSidebar from "@/components/RightSidebar";
import HeroLng from "@/components/heros/HeroLng";

export const metadata = {
  title:
    "CodeDancingwithMilos - Think like a Software Engineer, Become the Best on Your Team!",
  description:
    "CodeDancingwithMilos is the ultimate platform to master software engineering. Learn to code like a software engineer, sharpen your leadership and communication skills, and become a top-level professional in the tech industry.",
};

export default async function JavaScript() {
  const posts = getJavaScriptBlogPosts();
  const getJavaScriptPageContent = getJavaScriptEcosystemPageContent().filter(
    (item) => item.metadata.page?.toLowerCase() === "javascript"
  );
  return (
    <>
      {/* use this one if you want full with of page 
      <HeroLng pageContent={getJavaScriptPageContent[0]} /> 
      */}
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-[700px] mb-8">
            <HeroLng pageContent={getJavaScriptPageContent[0]} />

            <div className="space-y-10">
              <Posts posts={posts} />
              {/* 
              <Talks />
              <FeaturedProjects /> 
              */}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <RightSidebar>
          <WidgetNewsletter />
          {/* <WidgetSponsor />
          <WidgetBook /> */}
        </RightSidebar>
      </div>
    </>
  );
}
