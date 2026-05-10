"use client";

import { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import { useState, ViewTransition } from "react";
import { ItemList } from "@/components/item-list";
import { urlFor } from "@/lib/urlForImage";
import { Photo, Slug, Song, Video } from "@/sanity.types";

type ProjectCardProps = {
	photos: Photo[];
	videos: Video[];
	music: Song[];
	slug: Slug;
};

export const ProjectCard = ({
	photos = [],
	videos = [],
	music = [],
	slug,
}: ProjectCardProps) => {
	const [currentItem, setCurrentItem] = useState<(string | number)[]>(
		photos[0]
			? [
					"image",
					urlFor(
						photos[0].portrait!,
						photos[0].dimensions!.width,
						photos[0].dimensions!.height,
					)!.url(),
					photos[0].dimensions!.width,
					photos[0].dimensions!.height,
				]
			: ["video", videos[0].link, 0, 0],
	);

	const handleSetItem = (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => {
		if (type === "song" && !!link) {
			if (link.includes("<iframe")) {
				link = link.split('src="')[1].split('"')[0];
			}
			setCurrentItem([type, link, 0, 0]);
		}

		if (type === "video" && !!link) {
			setCurrentItem([type, link, 0, 0]);
		}

		if (type === "image" && !!portrait && !!width && !!height) {
			const url = urlFor(portrait, width, height)!.url();
			setCurrentItem([type, url, width, height]);
		}
	};

	const [type, link, width, height] = currentItem;

	const multipleItems = [...music, ...videos, ...photos].length > 1;

	return (
		<section
			className="flex flex-col-reverse h-full max-h-[calc(100%-3rem)] items-center justify-between gap-2 rounded-xl md:flex-row md:items-start md:gap-4"
			id={slug.current}
		>
			{multipleItems && (
				<ItemList
					photos={photos}
					videos={videos}
					music={music}
					handleSetItem={handleSetItem}
				/>
			)}
			<ViewTransition name={"cover-photo"}>
				<div
					className={`h-full w-full min-h-0 flex ${multipleItems ? "basis-11/12" : "basis-12/12"} rounded-lg justify-center items-center`}
				>
					{typeof link == "string" &&
						type &&
						typeof width == "number" &&
						typeof height == "number" &&
						type === "image" && (
							<Image
								alt={"Heashot of Morgan Tomasetti"}
								src={link}
								width={width!}
								height={height}
								loading="eager"
								className="m-auto h-full w-auto rounded-lg object-cover md:object-none"
							/>
						)}
					{typeof link == "string" && type === "video" && (
						<iframe
							src={link}
							className="aspect-video m-auto h-full w-full rounded-lg bg-black object-cover"
							allowFullScreen
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					)}
					{typeof link == "string" && type === "song" && (
						<iframe
							data-testid="embed-iframe"
							className="rounded-lg"
							src={link}
							width="100%"
							height="352"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					)}
				</div>
			</ViewTransition>
		</section>
	);
};
