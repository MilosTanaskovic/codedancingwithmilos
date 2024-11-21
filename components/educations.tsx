import Image from "next/image";

import EducationIcon01 from "@/assets/icons/education-icon-01.svg";
import EducationIcon02 from "@/assets/icons/education-icon-02.svg";
import { getEducationContent } from "./mdx/utils";
import Education from "./blocks/Education";

export default function Educations() {
  // get education data
  const getEducationData = getEducationContent();

  // Sort education data by `metadata.sort` in ascending order
  getEducationData.sort((a, b) => {
    if (a.metadata.sort && b.metadata.sort) {
      return parseInt(a.metadata.sort) - parseInt(b.metadata.sort);
    }
    return 0;
  });

  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        {getEducationData[0].metadata.title}
      </h2>
      <ul className="space-y-8">
        {getEducationData.map((education) => (
          <Education key={education.slug} data={education} />
        ))}
      </ul>
    </div>
  );
}
