"use client";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import NavBarMobile from "./NavBarMobile";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CodeDancingwithMilos_Logo from "@/public/images/codedancingwithmilos.jpg";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-between sm:justify-end space-x-4">
          {/* Search form */}
          {/* <form className="w-full max-w-[276px]">
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="search">
                  Search
                </label>
                <div className="relative flex items-center">
                  <input id="search" type="search" className="form-input py-1 w-full pl-10" />
                  <div className="absolute inset-0 right-auto flex items-center justify-center">
                    <svg className="w-4 h-4 shrink-0 mx-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="fill-slate-400"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form> */}
          {/* Mobile Logo Img */}
          <div className="sm:hidden mt-auto mr-4">
            {pathname !== "/" && (
              <div className="">
                <Link href="/">
                  <Image
                    className="rounded-full"
                    src={CodeDancingwithMilos_Logo}
                    width={32}
                    height={32}
                    priority
                    alt="CodeDancing with Milos"
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Nav Menu */}
          <div className=" sm:hidden">
            <NavBarMobile />
          </div>

          <div className=" flex items-center gap-4">
            {/* Light switch */}
            <ThemeToggle />

            {/* Button */}
            {pathname === "/resume" ? (
              <div className="flex justify-start">
                <a
                  href="/resume.pdf"
                  className="btn-sm  text-slate-100 bg-cdwmcp-blue hover:bg-cdwmcp-blue-10"
                  download="resume.pdf"
                >
                  Download resume
                </a>
              </div>
            ) : (
              <div>
                <Link
                  className="btn-sm text-slate-100 bg-cdwmcp-blue hover:bg-cdwmcp-blue-10"
                  href="/subscribe"
                >
                  <span>Subscribe&nbsp;</span>
                  <span className=" hidden sm:block">to the Newsletter</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
