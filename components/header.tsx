"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const directory: string[][] = [
    ["BIO", "/bio", "bg-stone-200"],
    ["COMMERCIAL", "/commercial", "bg-red-200"],
    ["THEATRE", "/theatre", "bg-amber-200"],
    ["TV/FILM", "/screen", "bg-yellow-200"],
    ["MUSIC", "/music", "bg-emerald-200"],
    ["DIGIS", "/digis", "bg-blue-200"],
    ["HEADSHOTS", "/headshots", "bg-indigo-200"],
    ["GALLERY", "/gallery", "bg-violet-200"],
    ["CONTACT/RESUME", "/contact", "bg-stone-200"],
  ];

  const [currentColor, setCurrentColor] = useState<string>("bg-white");

  const lockBackgroundColor = (linkColor: string) => {
    const header = document.querySelector("#header");

    if (header && currentColor) {
      header.classList.remove(currentColor);
    }

    if (header) {
      header.classList.add(linkColor);
      setCurrentColor(linkColor);
    }
  };

  return (
    <header
      className="fixed bottom-0 flex flex-row items-end gap-10 p-8 w-full h-24 border-t transition-all duration-300 ease-in hover:h-60"
      id="header"
      onMouseLeave={() => lockBackgroundColor("bg-white")}
    >
      <div className="hidden peer-hover:block peer-hover:flex-1 "></div>
      <nav className="flex items-center gap-5">
        <Link href="/" className="font-[--font-zenitha-classic]">
          <h1 className="text-4xl  ">MORGAN TOMASETTI</h1>
        </Link>
        {directory.map(([title, link, bg], i) => {
          return (
            <Link
              className={`hover:underline`}
              href={link}
              key={title + i}
              onMouseOver={() => lockBackgroundColor(bg)}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
