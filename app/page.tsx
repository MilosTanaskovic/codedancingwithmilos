import Talks from "@/components/talks";
import FeaturedProjects from "@/components/featured-projects";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import WidgetBook from "@/components/widget-book";
import Posts from "@/components/posts/Posts";
import {
  getDotnetEcosystemPageContent,
  getJavaScriptEcosystemPageContent,
} from "@/components/mdx/utils";
import RightSidebar from "@/components/RightSidebar";
import Hero from "@/components/heros/Hero";
import Card from "@/components/cards/Card";

export const metadata = {
  title:
    "CodeDancingwithMilos - Think like a Software Engineer, Become the Best on Your Team!",
  description:
    "CodeDancingwithMilos is the ultimate platform to master software engineering. Learn to code like a software engineer, sharpen your leadership and communication skills, and become a top-level professional in the tech industry.",
};

export default async function Home() {
  const getJavaScriptEcosystemContent = getJavaScriptEcosystemPageContent();

  const getDotNetEcosystemContent = getDotnetEcosystemPageContent();

  return (
    <>
      <Hero />
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <section>
              {/* Page title
            <h1 className="h1 font-aspekta mb-12">Nice stuff I've built</h1> */}
              {/* Page content */}
              <div className="space-y-10">
                {/* JavaScript Ecosystem Cards */}
                <section>
                  <h2 className="font-aspekta text-xl font-[650] mb-6">
                    .JS Ecosystem
                  </h2>
                  {/* Cards */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {getJavaScriptEcosystemContent?.map((item) => (
                      <Card key={item.metadata.topic} item={item.metadata} />
                    ))}
                  </div>
                </section>
                {/* .Net Ecosystem Cards */}
                <section>
                  <h2 className="font-aspekta text-xl font-[650] mb-6">
                    .NET Ecosystem
                  </h2>

                  <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {getDotNetEcosystemContent?.map((item) => (
                      <Card key={item.metadata.topic} item={item.metadata} />
                    ))}
                  </div>
                </section>
              </div>
            </section>
            {/* <div className="space-y-10">
              <Posts posts={posts} />
           
            </div> */}
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
