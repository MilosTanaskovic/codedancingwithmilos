"use client";

import { GoupShareIconsData } from "@/data/global";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Import your icons as React components
import TwitterIcon from '@/assets/icons/twitter.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import ShareIcon from '@/assets/icons/share.svg';

interface GroupShareIconsProps {
  slug: string; // The slug of the post to be shared
}

const iconsMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  share: ShareIcon,
};

// Client-side only share URL generator
const generateShareUrl = (platform: string, slug: string, postUrl: string) => {
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=Check out this post!`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    default:
      return postUrl;
  }
};

const GroupShareIcons: React.FC<GroupShareIconsProps> = ({ slug }) => {
  const [postUrl, setPostUrl] = useState<string | null>(null);
  
  // Effect to get the post URL on the client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = `${window.location.origin}/posts/${slug}`;
      setPostUrl(fullUrl);
    }
  }, [slug]);

  return (
    <ul className="inline-flex">
      {GoupShareIconsData?.map(({ id, title, icon }) => {
        const IconComponent = iconsMap[icon];

        return (
          <li key={id}>
            {postUrl && (
              <a
                className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-cdwmcp-blue dark:hover:text-cdwmcp-blue transition duration-150 ease-in-out"
                href={generateShareUrl(icon, slug, postUrl)}
                aria-label={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {IconComponent ? (
                  <IconComponent className="w-8 h-8 fill-current" />
                ) : (
                  <span>{title}</span>
                )}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default GroupShareIcons;