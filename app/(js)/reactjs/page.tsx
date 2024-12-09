import Talks from "@/components/talks";
import FeaturedProjects from "@/components/featured-projects";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import Posts from "@/components/posts/Posts";
import { getJavaScriptEcosystemPageContent, getReactBlogPosts } from "@/components/mdx/utils";
import RightSidebar from "@/components/RightSidebar";
import HeroLng from "@/components/heros/HeroLng";
import { useRouter } from "next/router";

export const metadata = {
  title:
    "ReactJS Ecosystem - All about ReactJS Ecosystem. News, tutorials, articles, projects, and more.",
  description:
    "Unpack the power of React! Discover guides, best practices, and advanced techniques to build dynamic, responsive, and scalable user interfaces with React and its ecosystem.",
};

export default async function ReactJS() {
  const posts = getReactBlogPosts();
  const getReactJSPageContent = getJavaScriptEcosystemPageContent().filter(
    (item) => item.metadata.page?.toLowerCase() === "reactjs"
  );

  return (
    <>
      {/* use this one if you want full with of page 
      <HeroLng pageContent={getReactJSPageContent[0]} /> 
      */}
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-screen-md 2xl:max-w-screen-lg">
            <HeroLng pageContent={getReactJSPageContent[0]} />

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
