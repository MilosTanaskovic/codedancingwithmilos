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
import HeroBox from "@/components/heros/HeroBox";
import Card from "@/components/cards/Card";
import Image from "next/image";
import CodeDancingwithMilos_Logo from "@/public/images/codedancingwithmilos.jpg";

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
      <HeroBox>
        <Image
          className="rounded-full mb-5 sm:hidden"
          src={CodeDancingwithMilos_Logo}
          width={40}
          height={40}
          priority
          alt="CodeDancing with Milos"
        />
        <h1 className="h1 font-aspekta mb-5">
          I write about coding and being a{" "}
          <span className="inline-flex relative text-cdwmcp-blue before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-cdwmcp-blue before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
            full-time
          </span>{" "}
          maker.
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Writer, Speaker, Developer, Mentor, and Founder of{" "}
          <span className="inline-flex relative text-cdwmcp-blue before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-cdwmcp-blue before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
            CodeDancingwithMilos.com
          </span>
          . I share insights on coding, the interview process, agile
          methodologies, career development, and my journey as a full-time
          creator.
        </p>
      </HeroBox>
      {/* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="max-w-screen-2xl">
            <section>
              {/* Page title
            <h1 className="h1 font-aspekta mb-12">Nice stuff I've built</h1> */}
              {/* Page content */}
              <div className="space-y-10">
                {/* <section>
                  <h2 className="font-aspekta text-xl font-[650] mb-6">
                    UI For Developers
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {getJavaScriptEcosystemContent?.map((item) => (
                      <Card key={item.metadata.topic} item={item.metadata} />
                    ))}
                  </div>
                </section> */}
                {/* JavaScript Ecosystem Cards */}
                <section>
                  <h2 className="font-aspekta text-xl font-[650] mb-6">
                    JS|TS Ecosystem
                  </h2>
                  {/* Cards */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
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

                  <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
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
