"use client";

import { Frame, BalancedMasonryGrid as MasonryGrid } from "@masonry-grid/react";
import Image from "next/image";
import { useState, ViewTransition } from "react";
import { urlFor } from "@/lib/urlForImage";
import { Photo, Song, Video } from "@/sanity.types";
import { cleanSpotifyEmbed } from "@/lib/cleanSpotifyEmbed";
import Iframe from "./iframe";
import { FullsizeImage } from "./fullsize-image";

type GalleryProps = {
	photos?: Photo[];
	videos?: Video[];
	music?: Song[];
	gap: string;
	frameWidth: string;
	height: number;
	width: number;
	className?: string;
};

export default function Gallery({
	photos,
	videos,
	music,
	gap,
	frameWidth,
	height = 1080,
	width = 1920,
	className,
}: GalleryProps) {
	const [currentFullsize, setCurrentFullsize] = useState<string>("");

	const viewFullsize = (img: string) => {
		setCurrentFullsize(img);
		const modal: HTMLDialogElement | null = document.querySelector("#fullsize");
		if (!modal) return;
		if (modal.open) return;
		modal.showModal();
	};

	return (
		<>
			<MasonryGrid
				className={className}
				gap={gap}
				frameWidth={frameWidth}
				id="grid"
			>
				{videos &&
					videos.map(({ link, thumbnail }, i) => {
						if (videos.length === 1 && i === 0) {
							return (
								<Frame width={width} height={height} key={link + i}>
									<ViewTransition name={"cover-photo"}>
										<Iframe
											src={link}
											type="video"
											// inGallery={true}
											thumbnail={thumbnail}
										/>
									</ViewTransition>
								</Frame>
							);
						}
						if (videos.length > 1 && i === 0) {
							return (
								<Frame width={0} height={0} key={link + i}>
									<ViewTransition name={"cover-photo"}>
										<Iframe
											src={link}
											type="video"
											// inGallery={true}
											thumbnail={thumbnail}
										/>
									</ViewTransition>
								</Frame>
							);
						}
						return (
							<Frame width={0} height={0} key={link + i}>
								<Iframe
									src={link}
									type="video"
									// inGallery={true}
									thumbnail={thumbnail}
								/>
							</Frame>
						);
					})}

				{music &&
					music.map(({ spotifyEmbedLink }, i) => {
						if (i === 0) {
							return (
								<Frame width={0} height={0} key={spotifyEmbedLink + i}>
									<ViewTransition name={"cover-photo"}>
										<Iframe
											src={cleanSpotifyEmbed(spotifyEmbedLink)}
											type="video"
											// inGallery={true}
										/>
									</ViewTransition>
								</Frame>
							);
						}
						return (
							<Frame width={width} height={height} key={spotifyEmbedLink + i}>
								<iframe
									src={cleanSpotifyEmbed(spotifyEmbedLink)}
									className={`aspect-video m-auto h-full w-full rounded-lg bg-black object-cover`}
									allowFullScreen
									allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								></iframe>
							</Frame>
						);
					})}

				{photos &&
					photos

						// .sort(() => Math.random() - 0.5)
						.map(
							({ description, portrait, dimensions: { width, height } }, i) => {
								const photoUrl = portrait
									? urlFor(portrait, width, height)!
											.fit("max")
											.quality(100)
											.url()
									: "";

								if (i === 0) {
									return (
										<Frame width={width} height={height} key={i}>
											<ViewTransition name={"cover-photo"}>
												<Image
													alt={description}
													src={photoUrl}
													width={width}
													height={height}
													className="h-full w-full rounded-lg cursor-pointer"
													onClick={() => viewFullsize(photoUrl)}
												/>
											</ViewTransition>
										</Frame>
									);
								}

								return (
									<Frame width={width} height={height} key={i}>
										<Image
											alt={description}
											src={photoUrl}
											width={width}
											height={height}
											className="h-full w-full rounded-lg cursor-pointer"
											onClick={() => viewFullsize(photoUrl)}
										/>
									</Frame>
								);
							},
						)}
			</MasonryGrid>

			<FullsizeImage
				img={currentFullsize}
				setCurrentFullsize={setCurrentFullsize}
			/>
		</>
	);
}
