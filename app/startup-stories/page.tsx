import StarupCard from "@/components/cards/StarupCard";
import { getStartupStores } from "@/components/mdx/utils";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";

import Icon01 from "@/public/images/popular-post-01.jpg";
import Icon02 from "@/public/images/popular-post-01.jpg";
import Icon03 from "@/public/images/popular-post-01.jpg";
import Icon04 from "@/public/images/popular-post-01.jpg";
import Icon05 from "@/public/images/popular-post-01.jpg";
import Icon06 from "@/public/images/popular-post-01.jpg";
import Icon07 from "@/public/images/popular-post-01.jpg";
import Icon08 from "@/public/images/popular-post-01.jpg";

export const metadata = {
  title: "Startup Stories - Early Startup Days",
  description: " Step into the world of entrepreneurial beginnings! Every Saturday, we uncover the untold stories of founders, their challenges, breakthroughs, and lessons learned on the road to success. ",
};

export default function Projects() {
  const starups = getStartupStores();
  // const getJavaScriptPageContent = getJavaScriptEcosystemPageContent().filter(
  //   (item) => item.metadata.page?.toLowerCase() === "javascript"
  // );

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Early Startup Days</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                This Month Startup Stories
                </h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {starups?.map((starup) => (
                    <StarupCard key={starup.slug} item={starup} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              {/* <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Client Projects
                </h2>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {items02.map((item) => (
                    <StarupCard key={item.id} item={item} />
                  ))}
                </div>
              </section> */}
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
          {/* <WidgetSponsor /> */}
        </div>
      </aside>
    </div>
  );
}
