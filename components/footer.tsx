'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const Footer = () => {
	const pathname = usePathname();
	const hideIfStudio = pathname.includes('/studio') ? 'hidden' : '';

	//Array of all nav links and their respective colors
	const directory: string[][] = [
		['BIO', '/bio', 'bg-stone-200'],
		['COMMERCIAL', '/commercial', 'bg-vintage-copper'],
		['THEATRE', '/theatre', 'bg-dwarven-bronze'],
		['TV/FILM', '/screen', 'bg-oak-palace'],
		['MUSIC', '/music', 'bg-track-and-field'],
		// ['DIGIS', '/digis', 'bg-fuzzy-wuzzy'],
		['HEADSHOTS', '/headshots', 'bg-annatto'],
		['GALLERY', '/gallery', 'bg-jinza-sunflower'],
		['CONTACT', '/contact', 'bg-stone-200'],
	];

	// const pathnameToColor = (path: string): string => {
	// 	for (const [, link, color] of directory) {
	// 		if (link.split('/')[1] === path.split('/')[1]) {
	// 			return color;
	// 		}
	// 	}
	// 	return 'bg-stone-200';
	// };

	// const [bgColor, setBgColor] = useState<string>(pathnameToColor(pathname));

	const activeRef = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		activeRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}, [pathname]);

	return (
		<footer
			className={`${hideIfStudio} col-span-full row-start-8 flex flex-row gap-10 p-8 w-full h-full transition-all duration-300 ease-in z-20 border-t bg-zinc-200 max-md:row-start-8 max-md:bg-inherit max-md:p-2 max-md:overflow-hidden`}
			id='header'
			// onMouseLeave={() => setBgColor(pathnameToColor(pathname))}
		>
			<nav className='flex items-center gap-5 max-md:flex-col-reverse max-md:w-full max-md:justify-center max-md:h-full max-md:gap-1'>
				<Link
					href='/'
					className={`font-[--font-zenitha-classic] `}
					// onMouseOver={() => setBgColor(pathnameToColor(pathname))}
				>
					<h1 className='text-4xl max-md:text-3xl'>MORGAN TOMASETTI</h1>
				</Link>
				<ul className='flex items-center gap-5 max-md:overflow-x-scroll max-md:max-w-full max-md:px-40 max-md:h-10 max-md:snap-x max-md:snap-mandatory max-md:no-scrollbar'>
					{directory.map(([title, link, bg], i) => {
						const isCurrent: boolean = '/' + pathname.split('/')[1] === link;

						return (
							<li
								key={title + i}
								className='snap-center'
								ref={isCurrent ? activeRef : null}
							>
								<Link
									className={`${isCurrent ? 'underline opacity-100' : ''} opacity-65 hover:opacity-100 hover:underline underline-offset-8 decoration-wavy decoration-from-font font-mono max-md:underline-offset-2`}
									href={link}
									// onMouseOver={() => setBgColor(bg)}
								>
									{title.toUpperCase()}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</footer>
	);
};
