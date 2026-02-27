"use client";

import Link from "next/link";

export const Header = () => {
  const directory: string[][] = [
    ["BIO", "/bio", "#fec5bb"],
    ["COMMERCIAL", "/commercial", "#fcd5ce"],
    ["THEATRE", "/theatre", "#fae1dd"],
    ["TV/FILM", "/screen", "#f8edeb"],
    ["MUSIC", "/music", "#e8e8e4"],
    ["DIGIS", "/digis", "#d8e2dc"],
    ["HEADSHOTS", "/headshots", "#ece4db"],
    ["GALLERY", "/gallery", "#ffe5d9"],
    ["CONTACT/RESUME", "/contact", "#ffd7ba"],
  ];

  const changeHeaderBg = (color: string) => {
    const header = document.querySelector("#header");
    if (header) {
      header.classList.remove(header.classList[7]);
      header.classList.add(`bg-[${color}]`);
      console.log(header);
    }
  };

  const removeHeaderBg = () => {
    const header = document.querySelector("#header");
    if (header) {
      header.classList.remove(header.classList[7]);
      console.log(header);
    }
  };

  return (
    <header
      className="fixed bottom-0 flex gap-10 p-8 w-full border-t bg-blue-500"
      id="header"
    >
      <Link href="/">
        <h1 className="items-center text-3xl">MORGAN TOMASETTI</h1>
      </Link>
      <nav className="flex items-center gap-5">
        {directory.map(([title, link, color], i) => {
          return (
            <Link
              className={``}
              href={link}
              key={title + i}
              onMouseOver={() => changeHeaderBg(color)}
              onMouseLeave={() => removeHeaderBg()}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
