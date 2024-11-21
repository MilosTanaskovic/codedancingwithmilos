import { FaReact, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiCsharp, SiDotnet } from "react-icons/si";


export default function WidgetSkills() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">Technical Skills</div>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <FaReact className="text-cyan-500 mr-2" size={20} />
            {/* <span className="text-cdwmcp-blue mr-2">—</span>{" "} */}
            <a className="font-aspekta font-[650] text-sm truncate">React</a>
          </div>
          <div className="grow inline-flex mr-1 truncate">
            <SiCsharp className="text-purple-500 mr-2" size={20} />
            <a className="font-aspekta font-[650] text-sm truncate">C#</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <SiTypescript className="text-blue-500 mr-2" size={20} />
            <a className="font-aspekta font-[650] text-sm truncate">
              TypeScript
            </a>
          </div>
          <div className="grow inline-flex mr-1 truncate">
            <SiDotnet className="text-purple-500 mr-2" size={20} />
            <a className="font-aspekta font-[650] text-sm truncate">.NET</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <SiNextdotjs
              className="text-black dark:text-white mr-2"
              size={20}
            />
            <a className="font-aspekta font-[650] text-sm truncate">Next.js</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <SiTailwindcss className="text-sky-400 mr-2" size={20} />
            <a className="font-aspekta font-[650] text-sm truncate">
              Tailwind CSS
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
