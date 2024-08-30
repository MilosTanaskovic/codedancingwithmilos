import Image from "next/image";
import HeroImage from "@/public/images/me.jpg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image
            className="rounded-full mb-5"
            src={HeroImage}
            width={56}
            height={56}
            priority
            alt="Me"
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
        </div>
      </div>
    </section>
  );
}
