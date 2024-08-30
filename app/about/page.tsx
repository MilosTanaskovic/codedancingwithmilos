import Image from "next/image";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
//import AboutImg from '@/public/images/about.png'
import Experience from "@/components/experience";

export const metadata = {
  title: "About - DevSpace",
  description: "Page description",
};

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
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
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Short Bio
                </h2>
                <p>
                  Experienced Full Stack JavaScript/React Engineer eager to
                  solve engineering problems in frontend and backend
                  development. I've been in the SaaS, E-commerce, and PayTech
                  business for some years now and I'm liking it a lot!
                  Passionate about creating user experiences and working within
                  an innovation team.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Career
                </h2>
                <p>
                  Currently, I’m working as a Software Engineer at{" "}
                  <b>EuroAccident AB Sweden</b>. Here, I focus on web development,
                  leveraging technologies like React, GraphQL, and Microsoft
                  Azure. I’m heavily involved in creating high-performing,
                  responsive websites, all within an Agile environment. My work
                  doesn’t stop at coding—I also take pride in leading and
                  collaborating with cross-functional teams to bring innovative
                  solutions to life.
                </p>
                <p>
                  Before joining EuroAccident, I was a <b>Senior Frontend Web
                  Engineer</b> at <b>Nets AB Sweden</b>, where I played a key role in
                  developing a custom platform for technical documentation
                  across the Nexi group. As part of the Relay team, I
                  contributed to building a next-gen distributed payment
                  processing system, which was a fantastic experience to dive
                  deeper into backend technologies and work with a cutting-edge
                  tech stack on Azure.
                </p>
                <p>
                  My journey into consulting as a <b>Full-Stack JavaScript
                  Developer</b> with <b>School of Applied Technology</b> allowed me
                  to tackle diverse projects for clients like Footway AB and
                  QBank AB. Working with the MERN and JAM stacks, I embraced
                  Agile methodologies and collaborated closely with my teams
                  through Scrum, Mob Programming, and Pair Programming. These
                  experiences sharpened my skills and broadened my perspective
                  on web development.
                </p>
                <p>
                  I started my career as a <b>Frontend Web Developer</b> at 
                  <b>Svenska Domäner AB Sweden</b>, where I focused on designing
                  and implementing customer-facing features. It was here that I
                  built a strong foundation in web technologies, working with
                  PHP, SQL, Symfony, and various JavaScript frameworks.
                </p>
                <p>
                  Throughout my career, I’ve been driven by a love for
                  technology and a desire to continuously learn and grow.
                  Whether it’s improving existing systems or building something
                  new from scratch, I’m always ready to take on the next
                  challenge.
                </p>
              </div>

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
                  </a>.
                  {/* to chat about projects and ideas. Currently, I'm not taking on
                  freelance projects, but I am open to hearing about potential
                  opportunities, discussing them with you and then potentially
                  collaborating if it's a good fit. */}
                </p>
              </div>
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
