"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const Footer = () => {
	const pathname = usePathname();
	const hideIfStudio = pathname.includes("/studio") ? "hidden" : "";

	//Array of all nav links and their respective colors
	const directory: string[][] = [
		["BIO", "/bio", "bg-jinza-safflower-8"],
		["COMMERCIAL", "/commercial", "bg-jinza-safflower-7"],
		["THEATRE", "/theatre", "bg-jinza-safflower-6"],
		["TV/FILM", "/screen", "bg-jinza-safflower-5"],
		["MUSIC", "/music", "bg-jinza-safflower-4"],
		// ['DIGIS', '/digis', 'bg-jinza-safflower-3'],
		["HEADSHOTS", "/headshots", "bg-jinza-safflower-2"],
		["GALLERY", "/gallery", "bg-jinza-safflower-1"],
		["CONTACT", "/contact", "bg-jinza-safflower-1"],
	];

	// const pathnameToColor = (path: string): string => {
	// 	if (path === "/") return "bg-inherit";
	// 	for (const [, link, color] of directory) {
	// 		if (link.split("/")[1] === path.split("/")[1]) {
	// 			return color;
	// 		}
	// 	}
	// 	return "bg-inherit";
	// };

	// const [bgColor, setBgColor] = useState<string>(pathnameToColor(pathname));

	const activeRef = useRef<HTMLLIElement | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <NEED FOR MOBILE NAV CAROUSEL>
	useEffect(() => {
		activeRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	}, [pathname]);

	if (hideIfStudio) return null;

	return (
		<footer
			className={`fixed bottom-0 left-0 z-100 flex h-1/7 w-full items-center border-t bg-inherit p-2 transition-colors ${pathname === "/" ? "border-t-jinza-safflower-bg lg:hover:border-t-black" : `border-t-black`} lg:h-1/8 lg:p-6`}
			id="footer"
			// onMouseLeave={() => setBgColor(pathnameToColor(pathname))}
		>
			<nav className="flex h-fit w-full flex-col-reverse items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-8">
				<Link
					href="/"
					// onMouseOver={() => setBgColor(pathnameToColor(pathname))}
				>
					<h1 className="font-zenitha text-3xl md:text-nowrap lg:text-[clamp(1.75rem,2.5dvw,2.75rem)]">
						Morgan Tomasetti
					</h1>
				</Link>
				<ul className="no-scrollbar flex h-10 max-w-full snap-mandatory items-center gap-4 overflow-x-scroll px-40 lg:snap-none lg:gap-4 lg:overflow-x-auto lg:px-0 lg:text-[clamp(.25rem,2vw,1rem)]">
					{directory.map(([title, link], i) => {
						const isCurrent: boolean = "/" + pathname.split("/")[1] === link;

						return (
							<li
								key={title + i}
								className="snap-center"
								ref={isCurrent ? activeRef : null}
							>
								<Link
									className={`${isCurrent ? "underline opacity-100" : ""} decoration-from-font decoration-wavy underline-offset-2 opacity-65 lg:underline-offset-8 lg:hover:underline lg:hover:opacity-100`}
									href={link}
									// onMouseOver={() => setBgColor(bg)}
								>
									<p>{title.toUpperCase()}</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</footer>
	);
};
