import Hero from "@/components/hero";
import Talks from "@/components/talks";
import FeaturedProjects from "@/components/featured-projects";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import Posts from "@/components/posts/Posts";
import { getBlogPosts } from "@/components/mdx/utils";

export const metadata = {
  title: "Home - CodeDancingwithMilos",
  description: "CodeDancing with Milos, home page",
};

export default async function Home() {
  const posts = getBlogPosts();
  return (
    <>
      <Hero />
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
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
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">
            <WidgetNewsletter />
            {/* <WidgetSponsor />
            <WidgetBook /> */}
          </div>
        </aside>
      </div>
    </>
  );
}
