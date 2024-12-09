import Image from "next/image";
import WidgetNewsletter from "@/components/widget-newsletter";
import Experience from "@/components/experience";
import PawelImg from "@/public/images/people/pawelchecinski.jpeg";
import AnastasijaImg from "@/public/images/people/anastasijafrolova.jpeg";
import RightSidebar from "@/components/RightSidebar";
import HeroBox from "@/components/heros/HeroBox";

export const metadata = {
  title:
    "About - Experienced Software Engineer JS & .NET | SaaS, E-commerce, PayTech, Insurance Innovator - CodeDancingwithMilos",
  description:
    "About - Experienced Software Engineer in the JS & .NET ecosystems, eager to solve engineering problems in both frontend and backend development. I've worked in the SaaS, E-commerce, and PayTech industries for several years and have enjoyed it immensely! I'm passionate about creating exceptional user experiences and collaborating with innovation teams.",
};

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-screen-2xl">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-5">
              Hi. I'm Milos{" "}
              <span className="inline-flex relative text-cdwmcp-blue before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-cdwmcp-blue before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
                @codedancingwithmilos
              </span>{" "}
              🤟
            </h1>
            {/* <Image 
              className="w-full"
              src={AboutImg}
              width={692}
              height={390}
              alt="Milos Tanaskovic"
            /> */}
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <HeroBox>
                <div className="space-y-4">
                  <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                    Short Bio
                  </h2>
                  <p>
                    Experienced Full Stack JavaScript/React Engineer eager to
                    solve engineering problems in frontend and backend
                    development. I've been in the SaaS, E-commerce, and PayTech
                    business for some years now and I'm liking it a lot!
                    Passionate about creating user experiences and working
                    within an innovation team.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                    Career
                  </h2>
                  <p>
                    Currently, I’m working as a Software Engineer at{" "}
                    <b>EuroAccident AB Sweden</b>. Here, I focus on web
                    development, leveraging technologies like React, GraphQL,
                    and Microsoft Azure. I’m heavily involved in creating
                    high-performing, responsive websites, all within an Agile
                    environment. My work doesn’t stop at coding—I also take
                    pride in leading and collaborating with cross-functional
                    teams to bring innovative solutions to life.
                  </p>
                  <p>
                    Before joining EuroAccident, I was a{" "}
                    <b>Senior Frontend Web Engineer</b> at <b>Nets AB Sweden</b>
                    , where I played a key role in developing a custom platform
                    for technical documentation across the Nexi group. As part
                    of the Relay team, I contributed to building a next-gen
                    distributed payment processing system, which was a fantastic
                    experience to dive deeper into backend technologies and work
                    with a cutting-edge tech stack on Azure.
                  </p>
                  <p>
                    My journey into consulting as a{" "}
                    <b>Full-Stack JavaScript Developer</b> with{" "}
                    <b>School of Applied Technology</b> allowed me to tackle
                    diverse projects for clients like Footway AB and QBank AB.
                    Working with the MERN and JAM stacks, I embraced Agile
                    methodologies and collaborated closely with my teams through
                    Scrum, Mob Programming, and Pair Programming. These
                    experiences sharpened my skills and broadened my perspective
                    on web development.
                  </p>
                  <p>
                    I started my career as a <b>Frontend Web Developer</b> at
                    <b>Svenska Domäner AB Sweden</b>, where I focused on
                    designing and implementing customer-facing features. It was
                    here that I built a strong foundation in web technologies,
                    working with PHP, SQL, Symfony, and various JavaScript
                    frameworks.
                  </p>
                  <p>
                    Throughout my career, I’ve been driven by a love for
                    technology and a desire to continuously learn and grow.
                    Whether it’s improving existing systems or building
                    something new from scratch, I’m always ready to take on the
                    next challenge.
                  </p>
                </div>
              </HeroBox>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Let's Connect
                </h2>
                <p>
                  I'm excited to connect with others via{" "}
                  <a
                    className="font-medium text-cdwmcp-blue hover:underline"
                    target="_blank"
                    href="https://www.linkedin.com/in/codedancingwithmilos/"
                  >
                    LinkedIn
                  </a>
                  .
                  {/* to chat about projects and ideas. Currently, I'm not taking on
                  freelance projects, but I am open to hearing about potential
                  opportunities, discussing them with you and then potentially
                  collaborating if it's a good fit. */}
                </p>
              </div>
            </div>
          </section>
          <section className="">
            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
              <a
                className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                href="#0"
              >
                <div className="flex flex-col h-full">
                  <div className="grow">
                    <Image
                      className="rounded-full mb-2"
                      src={PawelImg}
                      width={40}
                      height={40}
                      alt="Pawel"
                    />
                    <div className="text-lg font-aspekta font-[650] mb-1">
                      Pawel Checinski
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      Milos is a skilled developer with a very professional
                      attitude. Everything he does, he handles with same high
                      level of commitment, and you can always count on him. He’s
                      an expert in frontend but is not afraid to get “his hands
                      dirty” in the backend components, build pipelines or
                      environment configuration. One can virtually throw any
                      task at him – he takes everything as a challenge and a
                      great opportunity to learn even more. A true full stack
                      developer! His enthusiasm is contagious – he’s always full
                      ideas and new solutions. He not only completes his
                      assignments but helps others and finds time to share his
                      knowledge in any way possible. A fantastic team player who
                      brings value on so many levels!
                    </p>
                  </div>
                  <div className="text-xs font-aspekta font-[650] text-cdwmcp-blue">
                    <p>- Experienced Empathetic Leader and Project Manager</p>
                    <p>- Pawel managed Milos directly</p>
                  </div>
                </div>
              </a>
              <a
                className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                href="#0"
              >
                <div className="flex flex-col h-full">
                  <div className="grow">
                    <Image
                      className="rounded-full mb-2"
                      src={AnastasijaImg}
                      width={40}
                      height={40}
                      alt="Testimonial 02"
                    />
                    <div className="text-lg font-aspekta font-[650] mb-1">
                      Anastasija Frolova
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      We have been working together with Milos in one team on a
                      big UX project: developer (technical documentation) portal
                      for Nexi group: https://developer.nexigroup.com/. Milos
                      has implemented new company design system according to
                      Atomic principles, Tailwind CSS library, as well as
                      delivered new features such as the feedback tool, support
                      page functionality, rendering gRPC type of APIs and many
                      other smaller improvements and maintenance.
                      <br />
                      It is a pleasure to work together with Milos as one team:
                      exceptional collaboration, steadfast support and
                      outstanding deliveries. We have worked out the best ways
                      of working based on Agile/scrum principals. Milos always
                      eagers to share the knowledge with the team and is very
                      good in explaining technical things to the non-tech
                      audience.
                    </p>
                  </div>
                  <div className="text-xs font-aspekta font-[650] text-cdwmcp-blue">
                    <p>
                      - Product and Risk management in the Nordic and Baltic
                      FinTech world.
                    </p>
                    <p>- Anastasija worked with Milos on the same team.</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <RightSidebar>
        <WidgetNewsletter />
        {/* <WidgetSponsor /> */}
      </RightSidebar>
    </div>
  );
}
