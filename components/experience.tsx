import Image from "next/image";
import SvenskaDomanerImg from "@/public/images/svenskadomaner.png";
import FootwayImg from "@/public/images/footway-logo.png";
import QbankImg from "@/public/images/qbank-logo.png";
import NetsImg from "@/public/images/nets-logo.png";
import EuroAccidentImg from "@/public/images/euroaccident-logo.png";

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Work Experience
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                className=""
                src={EuroAccidentImg}
                width={40}
                height={40}
                alt="EuroAccident AB Sweden"
              />
            </div>
            <div className=" pl-16 sm:pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Aug 2024{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Euro Accident{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Full-time
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                
              </div>
              <div className=" text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  Skills:{" "}
                </span>
                <span>
                  Web Development · Front-End Development · Microsoft Azure ·
                  Agile Methodologies · Test Driven Development · React Hooks ·
                  GraphQL · High-Performing Website · Computer Science · Design
                  Tools · Search Engine Optimization (SEO) · Communication ·
                  Leadership · Web Design · Teamwork · TypeScript · Azure DevOps
                  Services · Responsive Web Design
                </span>
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                className=""
                src={NetsImg}
                width={40}
                height={40}
                alt="Nets AB Sweden"
              />
            </div>
            <div className="pl-16 sm:pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Feb 2023{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Aug 2024
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Senior Frontend Web Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Nets{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Full-time
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <p>
                  As a Frontend Web Software Engineer experienced in React and
                  Front-end technologies with interest for Back-end development,
                  my primary assignment is development and maintenance of a
                  custom platform that serves technical documentation for all
                  Nexi group products.
                </p>

                <p>
                  This job is in our Relay team, a newly formed group at Nets,
                  who is creating a next generation distributed payments
                  processing system for Nets eCommerce and Point of Sale. The
                  team consists mainly of payment developers from a variety of
                  backgrounds who are primarily “hands on keyboard” working on
                  Azure cloud and whose primary product is a set of robust
                  RESTful APIs. The team has a digital first approach, a modern,
                  green field tech stack built on Azure. The goal of the team is
                  to be the central payment processing connector for the
                  entirety of Nets and third party PSPs.{" "}
                </p>
              </div>
              <div className=" text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  Skills:{" "}
                </span>
                <span>
                  Web Development · Front-End Development · Microsoft Azure ·
                  Agile Methodologies · Test Driven Development · React Hooks ·
                  GraphQL · High-Performing Website · Computer Science · Design
                  Tools · Search Engine Optimization (SEO) · Communication ·
                  Leadership · Web Design · Teamwork · TypeScript · Azure DevOps
                  Services · Responsive Web Design
                </span>
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 100 21"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>salt logo</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Salt-hemsida"
                    transform="translate(-250, -5130)"
                    fill="#FF7960"
                    fillRule="nonzero"
                  >
                    <g id="footer" transform="translate(0, 4991.1186)">
                      <path
                        d="M265.544041,159.013917 C268.60959,152.318508 271.571432,145.572569 274.649424,138.881372 C275.242623,139.192982 275.831672,139.508803 276.42487,139.824624 C273.338581,146.490556 270.376739,153.21544 267.29045,159.881372 C266.709696,159.595027 266.12756,159.305876 265.544041,159.013917 Z M309.73619,138.881372 L315.587772,138.881372 C315.583672,144.942562 315.582305,151.005172 315.583672,157.0692 C316.867165,157.0692 318.146558,157.073456 319.425951,157.073456 C319.425951,157.656591 319.425951,158.243981 319.430052,158.831372 L309.588568,158.831372 C309.584467,158.243981 309.584467,157.656591 309.588568,157.073456 L313.455451,157.073456 C313.45135,151.596819 313.45135,146.118763 313.455451,140.639287 L309.73619,140.639287 L309.73619,138.881372 Z M326.818692,141.44356 C327.70819,141.300702 328.597687,141.14944 329.483047,140.981372 C328.9328,142.258693 328.895565,143.666266 328.72594,145.027621 L333.123781,145.027621 C333.123781,145.615861 333.127918,146.199899 333.127918,146.788139 C331.621978,146.788139 330.120176,146.792341 328.614236,146.788139 C328.506669,149.183116 328.241888,151.57389 328.316358,153.973068 C328.38669,155.036102 328.51908,156.460482 329.677496,156.880654 C331.162749,157.401666 332.619043,156.510903 333.798144,155.687367 L334.455959,157.401666 C332.652141,158.653777 330.240154,159.321849 328.163281,158.405876 C326.835241,157.767215 326.413247,156.178968 326.264308,154.817613 C326.011939,152.145323 326.400835,149.46463 326.487716,146.788139 L323.57513,146.788139 C323.57513,146.199899 323.57513,145.615861 323.579267,145.027621 L326.607695,145.027621 C326.67389,143.834335 326.744223,142.639648 326.818692,141.44356 Z M250.016586,148.206861 C254.121581,145.969086 258.226576,143.73559 262.331572,141.506372 C262.335718,142.229477 262.335718,142.948303 262.335718,143.66713 C258.997818,145.438523 255.654389,147.199933 252.305432,148.95136 C255.601867,151.086445 259.055868,152.943413 262.435233,154.933022 L262.435233,157.256372 C258.297066,154.723365 254.088409,152.310162 250,149.687301 C250.004146,149.31933 250.012439,148.57911 250.016586,148.206861 Z M337.614674,141.506372 C341.740343,143.736195 345.864626,145.968872 349.987523,148.204402 C349.991682,148.581032 349.995841,149.334293 350,149.710924 C345.911761,152.321657 341.702913,154.726956 337.564767,157.256372 L337.564767,154.932391 C340.941827,152.942241 344.393748,151.084769 347.687629,148.957663 C344.318887,147.211467 340.970939,145.431032 337.610515,143.676277 C337.610515,142.952975 337.610515,142.229674 337.614674,141.506372 Z M280.907153,146.187843 C282.293306,144.574658 284.676812,144.549517 286.637711,144.733881 C288.189305,144.921411 289.628934,145.631399 290.715873,146.745125 C290.263683,147.298217 289.811493,147.847119 289.376207,148.412782 C288.218263,146.334496 285.196619,145.697602 283.146973,146.778646 C282.793495,146.9721 282.547955,147.31446 282.479712,147.709015 C282.41147,148.103571 282.527935,148.507482 282.796209,148.80665 C284.850081,150.897506 288.361949,150.482687 290.318622,152.724385 C291.704775,154.580596 290.589091,157.396337 288.518314,158.221785 C285.47556,159.409247 282.020293,158.835587 279.533679,156.730113 C280.006934,155.980847 280.420919,155.196348 280.771919,154.383662 C281.967898,156.968948 285.479766,157.714784 287.884403,156.440996 C288.386633,156.16165 288.718894,155.655997 288.77369,155.08763 C288.828485,154.519263 288.598858,153.960357 288.159098,153.591734 C286.227781,152.209004 283.637198,152.179674 281.743916,150.708952 C280.328181,149.73266 279.761887,147.574763 280.907153,146.187843 Z M294.925723,146.498102 C297.038303,144.499564 300.354562,144.12327 302.917498,145.390126 C304.677981,146.280688 305.312574,148.387933 305.390363,150.261039 C305.488622,152.995441 305.406739,155.738204 305.435398,158.476786 L303.14677,158.476786 C303.150864,157.841268 303.163147,157.201568 303.175429,156.56605 C301.652407,159.066313 298.143723,159.358986 295.748647,158.117216 C293.693385,157.059413 293.496866,153.919451 295.142713,152.389189 C297.361741,150.164875 300.7476,150.286126 303.625785,150.58298 C303.43336,149.307762 303.228653,147.781682 302.041351,147.049999 C300.092537,145.900213 297.55826,146.4103 295.928789,147.902932 C295.593069,147.434655 295.257349,146.966379 294.925723,146.498102 Z M297.226634,152.87419 C295.826436,153.672769 295.674952,156.214843 297.263481,156.875447 C299.085377,157.531871 301.435417,157.109585 302.614531,155.44135 C303.302348,154.51734 303.470208,153.334105 303.629879,152.217767 C301.509111,152.050525 299.150883,151.703499 297.226634,152.87419 L297.226634,152.87419 Z"
                        id="salt-logo"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              {/* <Image
                className=""
                src={SaltImg}
                width={40}
                height={40}
                alt="Svenska Domaner AB Sweden"
              /> */}
            </div>
            <div className="pl-16 sm:pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Jun 2021{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Feb 2023
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Full-Stack JavaScript Developer Consultant
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                School of applied technology{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Contract
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Technologies: JavaScript/ES6+ |
                CSS3/SCSS/Styled-components/MaterialUI | HTML5 | Express/Node.js
                | REST APIs | GraphQL | React.js | Next.js | MongoDB Stack: MERN
                | JAM Team Collaboration Technologies: ° Agile Methods - Scrum °
                Mob Programming ° Pair Programming
              </div>
              <div className=" text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  Skills:{" "}
                </span>
                <span>
                  Web Development · Front-End Development · GitHub · Git · Agile
                  Methodologies · Test Driven Development · React Hooks ·
                  High-Performing Website · Computer Science · Design Tools ·
                  Search Engine Optimization (SEO) · Communication · Leadership
                  · Web Design · User Interface Design · Teamwork · TypeScript ·
                  Responsive Web Design
                </span>
              </div>
              <div className=" text-sm font-medium text-slate-700 dark:text-slate-100">
                Companies: Footway AB{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                QBank AB
              </div>
              {/** sub companies */}
              <ul className=" !mt-4">
                <li className="relative group">
                  <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
                    <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
                      <Image
                        className=""
                        src={QbankImg}
                        width={40}
                        height={40}
                        alt="Footway AB Sweden"
                      />
                    </div>
                    <div className="pl-16 sm:pl-20 space-y-1">
                      <div className="text-xs text-slate-500 uppercase">
                        May 2022{" "}
                        <span className="text-slate-400 dark:text-slate-600">
                          ·
                        </span>{" "}
                        Feb 2023
                      </div>
                      <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                        Full Stack JS/React Engineer
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                        QBank DAM{" "}
                        <span className="text-slate-400 dark:text-slate-600">
                          ·
                        </span>{" "}
                        Full-time{" "}
                        <span className="text-slate-400 dark:text-slate-600">
                          ·
                        </span>{" "}
                        Consultant via Salt AB
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        I am a part of a team developing and managing the web
                        part of customers' Media Portals. Most days are
                        different from others and there are always new
                        challenges and tasks that I need to solve with tools and
                        techniques of my choosing. Use of appropriate tools to
                        interpret and support the creatives, design, UX/UI, and
                        prototyping process - we primarily use Figma. Create UI
                        design for new Media Portals using Figma. Technologies:
                        React.js, React Hooks, React Router v6, React Query,
                        TypeScript, Radix UI/Stitches/MUI/Styled- Component,
                        CSS3/Sass, Framer-Motion.
                      </div>
                      <div className=" text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-medium text-slate-800 dark:text-slate-100">
                          Skills:{" "}
                        </span>
                        <span>
                          Web Development · Front-End Development · GitHub ·
                          Framer-Motion · Git · Agile Methodologies · PHP ·
                          React Hooks · High-Performing Website · Computer
                          Science · Design Tools · Search Engine Optimization
                          (SEO) · Communication · Web Design · Teamwork ·
                          TypeScript · Responsive Web Design
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group mt-4">
                  <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
                    <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
                      <Image
                        className=""
                        src={FootwayImg}
                        width={40}
                        height={40}
                        alt="Footway AB Sweden"
                      />
                    </div>
                    <div className="pl-16 sm:pl-20 space-y-1">
                      <div className="text-xs text-slate-500 uppercase">
                        Dec 2021{" "}
                        <span className="text-slate-400 dark:text-slate-600">
                          ·
                        </span>{" "}
                        May 2022
                      </div>
                      <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                        Full Stack JavaScript Developer
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                        Footway{" "}
                        <span className="text-slate-400 dark:text-slate-600">
                          ·
                        </span>{" "}
                        Full-time{" "}
                        <span className="text-slate-400 dark:text-slate-600">
                          ·
                        </span>{" "}
                        Consultant via Salt AB
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Technologies: JavaScript/ES6+ |
                        CSS3/SCSS/Styled-components/MaterialUI | Express/Node.js
                        | GraphQL | React.js | TypeScript | Next.js | MongoDB
                        Stack: MERN | JAM Team Collaboration Technologies: °
                        Agile Methods - Scrum ° Mob Programming ° Pair
                        Programming
                      </div>
                      <div className=" text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-medium text-slate-800 dark:text-slate-100">
                          Skills:{" "}
                        </span>
                        <span>
                          Web Development · Front-End Development · GitHub · Git
                          · Agile Methodologies · React Hooks · High-Performing
                          Website · Computer Science · Design Tools · Search
                          Engine Optimization (SEO) · Communication · Web Design
                          · Teamwork · TypeScript · Responsive Web Design
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                <path fill="#6366F1" d="M2.486 5.549C3.974 7.044 5.953 7.89 8.009 8.045c-.138-2.065-.997-4.053-2.486-5.548C4.035 1.002 2.117.154 0 0c.138 2.065.997 4.053 2.486 5.549Zm12.028 0c-1.488 1.495-3.467 2.342-5.523 2.496.138-2.065.997-4.053 2.486-5.548C12.888 1.002 14.883.154 17 0c-.153 2.065-.997 4.053-2.486 5.549Zm0 5.902c-1.488-1.495-3.467-2.342-5.523-2.496.138 2.065.997 4.053 2.486 5.548C12.965 15.998 14.944 16.846 17 17c-.153-2.127-.997-4.13-2.486-5.549Zm-12.028 0c1.488-1.495 3.467-2.342 5.6-2.496-.138 2.065-.998 4.053-2.486 5.548C4.035 15.998 2.117 16.861 0 17c.138-2.127.997-4.13 2.486-5.549Z" />
              </svg> */}
              <Image
                className=""
                src={SvenskaDomanerImg}
                width={40}
                height={40}
                alt="Svenska Domaner AB Sweden"
              />
            </div>
            <div className="pl-16 sm:pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                Dec 2017{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Jun 2021
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Frontend Web Developer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Svenska Domäner{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Full-time
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Front-End Web Developer in Svenska Domäner is a position that
                primarily deals with the design and implementation of
                functionalities facing customers. Position requires good
                knowledge of Web technologies such as HTML5, CSS3, SCSS, LASS,
                Boostrap4, Responsive Design, JavaScript/ES6+, ReactJs, jQuery,
                AJAX JSON, XML, Babel, Webpack, Git, Symfony Form, Twig but also
                server-side scripting including. Using PHP7, SQL, and Symfony4
                languages on the back-end side.
              </div>
              <div className=" text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  Skills:{" "}
                </span>
                <span>
                  Web Development · Front-End Development · GitHub · Git · Agile
                  Methodologies · PHP · React Hooks · Bootstrap (Framework) ·
                  High-Performing Website · Computer Science · Design Tools ·
                  Search Engine Optimization (SEO) · Communication · Web Design
                  · User Interface Design · Teamwork · Responsive Web Design
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
