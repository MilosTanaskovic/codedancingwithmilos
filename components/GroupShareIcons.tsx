"use client";

import { GoupShareIconsData } from "@/data/global";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import ShareIcon from "@/assets/icons/share.svg";

interface GroupShareIconsProps {
  slug: string;
  mainUrl: string;
  page: string;
}

const iconsMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  share: ShareIcon,
};

// Client-side only share URL generator
const generateShareUrl = (platform: string, slug: string, postUrl: string) => {
  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        postUrl
      )}&text=Check out this post!`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        postUrl
      )}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        postUrl
      )}`;
    case "share":
      return postUrl; // We handle copy to clipboard directly
    default:
      return postUrl;
  }
};

const GroupShareIcons: React.FC<GroupShareIconsProps> = ({
  slug,
  mainUrl,
  page,
}) => {
  const [postUrl, setPostUrl] = useState<string | null>(null);

  // Effect to get the post URL on the client-side
  useEffect(() => {
    if (typeof window !== "undefined" && page === "") {
      const fullUrl = `${window.location.origin}${mainUrl}/posts/${slug}`;
      setPostUrl(fullUrl);
    } else {
      const fullUrl = `${window.location.origin}${mainUrl}`;
      setPostUrl(fullUrl);
    }
  }, [slug, mainUrl]);

  // Function to handle copy to clipboard
  const handleCopyToClipboard = (url: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(
        () => {
          toast.success("Link copied!");
        },
        () => {
          toast.error("Failed to copy the link.");
        }
      );
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success("Link copied!");
      } catch (err) {
        toast.error("Failed to copy the link.");
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <ul className="inline-flex">
      {GoupShareIconsData?.map(({ id, title, icon }) => {
        const IconComponent = iconsMap[icon];
        const isShareIcon = icon === "share";

        return (
          <li key={id}>
            {postUrl && (
              <a
                className={`flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-cdwmcp-blue dark:hover:text-cdwmcp-blue transition duration-150 ease-in-out ${
                  isShareIcon ? "cursor-copy" : ""
                }`}
                href={
                  !isShareIcon
                    ? generateShareUrl(icon, slug, postUrl)
                    : undefined
                }
                aria-label={title}
                target={!isShareIcon ? "_blank" : undefined}
                rel={!isShareIcon ? "noopener noreferrer" : undefined}
                onClick={
                  isShareIcon
                    ? (e) => {
                        e.preventDefault();
                        handleCopyToClipboard(postUrl);
                      }
                    : undefined
                }
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
