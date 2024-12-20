import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Metadata } from "@/types/mdx";

// interface Item {
//   id: number
//   icon: any  //StaticImageData
//   slug: string
//   title: string
//   excerpt: string
//   openSource?: boolean
// }

interface ItemProps {
  item: Metadata;
}

export default function Card({ item }: ItemProps) {
  const isCardActive = item?.status === "Cooming Soon" ? false : true;
  return (
    <Link
      className={`rounded-lg border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 transition-color ease-in-out p-5 group ${
        isCardActive ? "" : "pointer-events-none"
      }`}
      href={item.mainUrl || "#"}
    >
      <div className="flex flex-col h-full">
        <div className="grow">
          <div className="flex items-center justify-between space-x-2">
            <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
              {item.logo && (
                <Image
                  src={item.logo}
                  width={24}
                  height={24}
                  alt={item.title}
                />
              )}
            </div>
            {item.status && (
              <div className="text-xs inline-flex items-center font-medium bg-green-100 text-green-600 rounded-full text-center px-2 h-5">
                {item.status}
              </div>
            )}
          </div>
          <div className="text-lg font-aspekta font-[650] mb-1">
            {item.title}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            {item.summary}
          </p>
        </div>
        <div className="text-cdwmcp-blue flex justify-end">
          <svg
            className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
          >
            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
