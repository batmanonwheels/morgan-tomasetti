"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { Project } from "@/sanity.types";

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

	// biome-ignore lint/correctness/useExhaustiveDependencies: <NEED FOR MOBILE NAV CAROUSEL>
	useEffect(() => {
		activeRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	}, [pathname]);

	return (
		<aside className="flex h-10 w-full flex-col items-center gap-4 p-2 lg:h-auto lg:min-w-1/6 lg:basis-1/6 lg:items-start">
			<Link href={baseUrl} className="hidden lg:block">
				<h2 className="w-full font-medium font-zenitha text-2xl">{name}</h2>
			</Link>
			<ul className="no-scrollbar flex h-full max-w-full grow snap-x snap-mandatory flex-row gap-0 overflow-x-scroll px-36 italic text-sm lg:snap-none lg:flex-col lg:gap-2 lg:overflow-hidden lg:px-0 lg:pl-2">
				{projects.map(({ name, slug, photos, videos, music }, i: number) => {
					const isCurrent: boolean =
						pathname.split(baseUrl)[1] === slug.current;

					const isEmpty: boolean =
						photos.length <= 0 && videos.length <= 0 && music.length <= 0;

					if (isEmpty) return;

					return (
						<li
							key={slug.current + i}
							className={`flex snap-center items-center justify-center transition-all not-last:*:border-r lg:block lg:not-last:*:border-none`}
							ref={isCurrent ? activeRef : null}
						>
							<Link
								href={`${baseUrl}${encodeURIComponent(slug.current)}`}
								className={`${isCurrent ? "underline opacity-100" : ""} w-full text-nowrap px-4 decoration-from-font decoration-wavy underline-offset-2 opacity-65 hover:underline hover:opacity-100 lg:text-wrap lg:px-0 lg:underline-offset-4`}
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
