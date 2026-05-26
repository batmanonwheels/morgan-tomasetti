"use client";

import { generateThumbnail } from "@/lib/generateThumbnail";
import { urlFor } from "@/lib/urlForImage";
import { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import { useState } from "react";

type IframeProps = {
	src: string;
	type: "video" | "song";
	thumbnail?: string | SanityImageSource | undefined;
	inGallery?: boolean;
};

export default function Iframe({ src, thumbnail, type }: IframeProps) {
	const [isActive, setIsActive] = useState<boolean>(false);

	const thumbnailUrl = thumbnail
		? urlFor(thumbnail, 1920, 1080)!.fit("max").quality(100).url()
		: generateThumbnail(src);

	if (type === "song")
		return (
			<iframe
				data-testid="embed-iframe"
				className="max-w-4xl m-auto rounded-lg"
				src={src}
				width="100%"
				height="352"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			/>
		);

	if (thumbnailUrl)
		return (
			<>
				{!isActive ? (
					<div
						className="relative aspect-video m-auto h-auto w-full rounded-lg lg:h-full"
						onClick={() => setIsActive(true)}
					>
						<Image
							width={1920}
							height={1080}
							src={thumbnailUrl}
							className={`aspect-video m-auto h-auto w-full rounded-lg lg:h-full lg:w-full object-cover`}
							alt={"iframe custom thumbnail"}
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							className="absolute fill-background top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-1/4 w-1/4"
						>
							<path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z" />
						</svg>
					</div>
				) : (
					<iframe
						src={src + "&autoplay=1&mute=1"}
						className={`aspect-video m-auto h-auto w-full rounded-lg lg:h-full lg:w-full`}
						allowFullScreen
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					/>
				)}
			</>
		);

	return (
		<iframe
			src={src}
			className={`aspect-video m-auto h-full w-full rounded-lg`}
			allowFullScreen
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		/>
	);
}
