'use client';

import type { Project } from '@/sanity.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const ProjectList = ({
	projects,
	baseUrl,
	name,
}: {
	projects: Project[];
	baseUrl: string;
	name: string;
}) => {
	const pathname = usePathname();

	const activeRef = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		activeRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}, [pathname]);

	return (
		<aside className='flex flex-col gap-4 px-2 max-md:w-full max-md:h-7 max-md:items-center align-middle'>
			<Link href={baseUrl} className='max-md:hidden'>
				<h2 className='text-3xl font-[--font-zenitha-classic] font-medium w-full '>
					{name.toUpperCase()}
				</h2>
			</Link>
			<ul className='flex flex-col gap-2 text-sm pl-2 font-mono  max-md:flex-row max-md:overflow-x-scroll max-md:max-w-full max-md:px-36 max-md:h-full max-md:w-full max-md:snap-x max-md:snap-mandatory max-md:no-scrollbar max-md:gap-0'>
				{projects.map(({ name, slug, photos, videos }, i: number) => {
					const isCurrent: boolean =
						pathname.split(baseUrl)[1] === slug.current;

					const isEmpty: boolean = photos.length <= 0 && videos.length <= 0;

					if (isEmpty) return;

					return (
						<li
							key={slug.current + i}
							className='max-md:flex max-md:snap-center max-md:justify-center max-md:items-center max-md:not-last:*:border-r '
							ref={isCurrent ? activeRef : null}
						>
							<Link
								href={`${baseUrl}${encodeURIComponent(slug.current)}`}
								className={`${isCurrent ? 'underline opacity-100' : ''} opacity-65 hover:opacity-100 hover:underline underline-offset-8 decoration-wavy decoration-from-font font-mono max-md:underline-offset-2 max-md:w-full max-md:text-nowrap max-md:px-4`}
							>
								{name!.toUpperCase()}
							</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};
