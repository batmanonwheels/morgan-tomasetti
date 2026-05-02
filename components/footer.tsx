'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const Footer = () => {
	const pathname = usePathname();
	const hideIfStudio = pathname.includes('/studio') ? 'hidden' : '';

	//Array of all nav links and their respective colors
	const directory: string[][] = [
		['BIO', '/bio', 'bg-jinza-safflower-8'],
		['COMMERCIAL', '/commercial', 'bg-jinza-safflower-7'],
		['THEATRE', '/theatre', 'bg-jinza-safflower-6'],
		['TV/FILM', '/screen', 'bg-jinza-safflower-5'],
		['MUSIC', '/music', 'bg-jinza-safflower-4'],
		['DIGIS', '/digis', 'bg-jinza-safflower-3'],
		['HEADSHOTS', '/headshots', 'bg-jinza-safflower-2'],
		['GALLERY', '/gallery', 'bg-jinza-safflower-1'],
		['CONTACT', '/contact', 'bg-jinza-safflower-1'],
	];

	const pathnameToColor = (path: string): string => {
		console.log(path === '/');
		if (path === '/') return 'bg-inherit';
		for (const [, link, color] of directory) {
			if (link.split('/')[1] === path.split('/')[1]) {
				return color;
			}
		}
		return 'bg-inherit';
	};

	const [bgColor, setBgColor] = useState<string>(pathnameToColor(pathname));

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
			className={`${hideIfStudio} col-span-full row-start-8 flex flex-row gap-10 p-8 w-full h-full transition-all duration-200 z-100 ${pathname === '/' ? 'bg-inherit' : bgColor} ${pathname === '/' ? 'hover:border-t' : 'border-t'} max-md:row-start-8  max-md:p-2 max-md:overflow-hidden will-change-auto`}
			id='footer'
			onMouseLeave={() => setBgColor(pathnameToColor(pathname))}
		>
			<nav className='flex items-center gap-5 max-md:flex-col-reverse max-md:w-full max-md:justify-center max-md:h-full max-md:gap-1'>
				<Link
					href='/'
					onMouseOver={() => setBgColor(pathnameToColor(pathname))}
				>
					<h1 className='text-4xl max-md:text-3xl font-zenitha'>
						Morgan Tomasetti
					</h1>
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
									className={`${isCurrent ? 'underline opacity-100' : ''} opacity-65 hover:opacity-100 hover:underline underline-offset-8 decoration-wavy decoration-from-font max-md:underline-offset-2`}
									href={link}
									onMouseOver={() => setBgColor(bg)}
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
