"use client";

import { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import { useState, ViewTransition } from "react";
import { ItemList } from "@/components/item-list";
import { urlFor } from "@/lib/urlForImage";
import { Photo, Slug, Video } from "@/sanity.types";

type ProjectCardProps = {
	photos: Photo[];
	videos: Video[];
	slug: Slug;
};

export const ProjectCard = ({ photos, videos, slug }: ProjectCardProps) => {
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
		if (type === "video" && !!link) {
			setCurrentItem([type, link, 0, 0]);
		}

		if (type === "image" && !!portrait && !!width && !!height) {
			const url = urlFor(portrait, width, height)!.url();
			setCurrentItem([type, url, width, height]);
		}
	};

	const [type, link, width, height] = currentItem;

	return (
		<section
			className="flex h-full max-h-full grow flex-col-reverse items-center justify-between gap-2 rounded-xl md:flex-row md:items-start md:gap-4"
			id={slug.current}
		>
			<ItemList photos={photos} videos={videos} handleSetItem={handleSetItem} />
			<ViewTransition name={"cover-photo"}>
				<div className="h-full w-full basis-11/12 rounded-lg bg-jinza-safflower-8">
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
								className="m-auto h-full w-auto grow rounded-lg object-cover md:object-none"
							/>
						)}
					{typeof link == "string" && type === "video" && (
						<iframe
							src={link}
							className="m-auto h-full w-full grow rounded-lg bg-black object-cover"
							allowFullScreen
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					)}
				</div>
			</ViewTransition>
		</section>
	);
};
