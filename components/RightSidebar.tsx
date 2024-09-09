"use client";
import { useWindowResize } from "@/hooks";
import React, { useState, useEffect, useRef } from "react";

interface RightSidebarProps {
  children: React.ReactNode;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ children }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  // Use custom hook to determine if the device is mobile
  const isMobile = useWindowResize(768);

  useEffect(() => {
    if (isMobile) return; // Skip setting up sticky behavior if on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
      // { rootMargin: "0px 0px 0px 0px" } // Adjust the top offset if necessary
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isMobile]);

  return (
    <aside className="md:w-[240px] lg:w-[300px] shrink-0">
      {/** This is an invisible div used to track when the sidebar reaches the viewport */}
      <div ref={observerRef} className=" top-0 w-full h-0"></div>
      {/** Sticky sidebar content */}
      <div
        ref={sidebarRef}
        className={` space-y-6 w-[inherit] transition-all duration-300 ${
          isSticky && !isMobile ? "fixed top-[20px]" : "relative"
        }`}
      >
        {children}
      </div>
    </aside>
  );
};

export default RightSidebar;
