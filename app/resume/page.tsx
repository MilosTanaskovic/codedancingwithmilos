import Experience from "@/components/experience";
import Awards from "@/components/awards";
import Recommendations from "@/components/recommendations";
import WidgetSkills from "@/components/widgets/WidgetSkills";
import WidgetLanguages from "@/components/widgets/WidgetLanguages";
import WidgetReferences from "@/components/widge-references";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Educations from "@/components/educations";

export const metadata = {
  title: "CodeDancingwithMilos - My Resume",
  description:
    "CodeDancingwithMilos - Discover my resume, education, experience, awards, and recommendations.",
};

export default function Resume() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">My resume</h1>
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-12">
              <Educations />
              <Experience/>
              {/* <Awards /> */}
              <Recommendations />

              {/* Download button */}
              <div className="flex justify-center">
                <Button
                  asChild
                  className="btn-sm text-slate-100 bg-cdwmcp-blue hover:bg-cdwmcp-blue-10"
                >
                  <Link href="/resume.pdf" download="resume.pdf">
                    <Download /> Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetSkills />
          <WidgetLanguages />
          <WidgetReferences />
        </div>
      </aside>
    </div>
  );
}
