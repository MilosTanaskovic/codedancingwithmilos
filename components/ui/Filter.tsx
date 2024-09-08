import Link from "next/link";
import React from "react";

interface FilterProps {
  name: string;
  styleItem?: string;
  styleLink?: string;
  linkUrl: string;
  onClick: () => void;
}

const Filter: React.FC<FilterProps> = ({ name, styleItem, styleLink, linkUrl, onClick }) => {
  return (
    <li 
        className={`${styleItem} px-3 -mb-px `}
        onClick={onClick}
    >
      <Link
        className={`${styleLink} block py-3 `}
        href={linkUrl}
      >
        {name}
      </Link>
    </li>
  );
};

export default Filter;
