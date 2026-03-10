"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ContentPreview } from "./content-preview";

export const Header = () => {
  const [currentColor, setCurrentColor] = useState<string>("bg-white");
  const [currentHover, setCurrentHover] = useState<string | undefined>("");

  //Hide header on studio path
  const pathname = usePathname();
  if (pathname.includes("/studio")) {
    return <header></header>;
  }

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

  //Change the background of the header depending on the current nav link being hovered
  const lockBackgroundColor = (name: string, linkColor: string) => {
    const header = document.querySelector("#header");

    if (header && currentColor) {
      header.classList.remove(currentColor);
    }

    if (header) {
      header.classList.add(linkColor);
      setCurrentColor(linkColor);
      setCurrentHover(name);
    }
  };

  return (
    <header
      className="fixed bottom-0 bg-white flex flex-row items-end gap-10 p-8 w-full h-24 border-t transition-all duration-300 ease-in hover:h-60"
      id="header"
      onMouseLeave={() => lockBackgroundColor("", "bg-white")}
    >
      <ContentPreview link={currentHover} />
      <nav className="flex items-center gap-5">
        <Link
          href="/"
          className="font-[--font-zenitha-classic]"
          onMouseOver={() => lockBackgroundColor("", "bg-white")}
        >
          <h1 className="text-4xl  ">MORGAN TOMASETTI</h1>
        </Link>
        {directory.map(([title, link, bg], i) => {
          return (
            <Link
              className={`hover:underline`}
              href={link}
              key={title + i}
              onMouseOver={() => lockBackgroundColor(title.toLowerCase(), bg)}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
