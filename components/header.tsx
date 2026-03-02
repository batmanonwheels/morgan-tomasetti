import Link from "next/link";

export const Header = () => {
  const directory: string[][] = [
    ["BIO", "/bio", "hover:before:bg-stone-600"],
    ["COMMERCIAL", "/commercial", "hover:before:bg-red-600"],
    ["THEATRE", "/theatre", "hover:before:bg-amber-600"],
    ["TV/FILM", "/screen", "hover:before:bg-yellow-600"],
    ["MUSIC", "/music", "hover:before:bg-emerald-600"],
    ["DIGIS", "/digis", "hover:before:bg-blue-600"],
    ["HEADSHOTS", "/headshots", "hover:before:bg-indigo-600"],
    ["GALLERY", "/gallery", "hover:before:bg-violet-600"],
    ["CONTACT/RESUME", "/contact", "hover:before:bg-stone-600"],
  ];

  return (
    <header
      className="fixed bottom-0 flex flex-row items-end gap-10 p-8 w-full h-24 border-t transition-all duration-300 ease-in hover:h-60 hover:border-t-0"
      id="header"
    >
      <div className="flex-1 hidden peer-hover:block"></div>
      <nav className="flex items-center gap-5">
        <Link href="/" className="flex ">
          <h1 className="text-3xl">MORGAN TOMASETTI</h1>
        </Link>
        {directory.map(([title, link, bg], i) => {
          return (
            <Link
              className={`


              before:absolute before:inset-0 before:pointer-events-none before:-z-10

              ${bg} hover:before:pointer-events-auto `}
              href={link}
              key={title + i}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
