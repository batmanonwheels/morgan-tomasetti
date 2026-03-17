"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ContentPreview } from "./content-preview";

export const Header = () => {
  const pathname = usePathname();
  const hideIfStudio = pathname.includes("/studio") ? "hidden" : "";

  //Array of all nav links and their respective colors
  const directory: string[][] = [
    ["BIO", "/bio", "bg-stone-200"],
    ["COMMERCIAL", "/commercial", "bg-vintage-copper"],
    ["THEATRE", "/theatre", "bg-dwarven-bronze"],
    ["TV/FILM", "/screen", "bg-oak-palace"],
    ["MUSIC", "/music", "bg-track-and-field"],
    ["DIGIS", "/digis", "bg-fuzzy-wuzzy"],
    ["HEADSHOTS", "/headshots", "bg-annatto"],
    ["GALLERY", "/gallery", "bg-jinza-sunflower"],
    ["CONTACT/RESUME", "/contact", "bg-stone-200"],
  ];

  const pathnameToColor = (path: string): string => {
    for (const [, link, color] of directory) {
      if (link === path) {
        return color;
      }
    }
    return "bg-white";
  };

  const [bgColor, setBgColor] = useState<string>(pathnameToColor(pathname));
  // const [showFullNav, setShowFullNav] = useState<boolean>(false);

  return (
    <header
      className={`${hideIfStudio} fixed bottom-0 ${bgColor} flex flex-row items-end gap-10 p-8 w-full h-24 border-t transition-all duration-300 ease-in ${bgColor === "bg-stone-200" && "hover:h-60"}`}
      id="header"
      onMouseLeave={() => setBgColor(pathnameToColor(pathname))}
    >
      <ContentPreview link={pathname} />
      <nav className="flex items-center gap-5">
        <Link
          href="/"
          className={`font-[--font-zenitha-classic]`}
          onMouseOver={() => setBgColor("bg-white")}
        >
          <h1 className="text-4xl">MORGAN TOMASETTI</h1>
        </Link>
        {directory.map(([title, link, bg], i) => {
          return (
            <Link
              className={`${pathname.includes(link) ? "underline" : "hover:underline"} underline-offset-8 decoration-wavy decoration-from-font`}
              href={link}
              key={title + i}
              onMouseOver={() => setBgColor(bg)}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
