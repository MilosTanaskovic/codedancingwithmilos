"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type AvatarLogoProps = {
  img: string | StaticImageData;
  alt: string;
  logoFallback: string;
  className?: string;
  width?: number;
  height?: number;
};

const AvatarLogo: React.FC<AvatarLogoProps> = ({
  img,
  alt,
  logoFallback,
  className,
  width,
  height,
}) => {
  const pathname = usePathname();
  return (
    // <div className="mt-auto mr-4">
    //   {pathname !== "/" && (
    //     <div className="">
    //       <Link href="/">
    //         <Image
    //           className="rounded-full"
    //           src={CodeDancingwithMilos_Logo}
    //           width={32}
    //           height={32}
    //           priority
    //           alt="CodeDancing with Milos"
    //         />
    //       </Link>
    //     </div>
    //   )}
    // </div>
    <Avatar className={className}>
      <AvatarImage
        width={width}
        height={height}
        src={typeof img === "string" ? img : img.src}
        alt={alt}
      />
      <AvatarFallback>{logoFallback}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarLogo;
