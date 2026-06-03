import Image from "next/image";
import { ViewTransition } from "react";
import { ItemList } from "@/components/item-list";
import { urlFor } from "@/lib/urlForImage";
import { Photo, Slug, Song, Video } from "@/sanity.types";
import ImageGallery from "./gallery";
import { cleanSpotifyEmbed } from "@/lib/cleanSpotifyEmbed";
import { ITEM_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import Iframe from "./iframe";

type ProjectCardProps = {
	photos: Photo[];
	videos: Video[];
	music?: Song[];
	slug: Slug;
};

export const ProjectCard = ({
	photos = [],
	videos = [],
	music = [],
	slug,
}: ProjectCardProps) => {
	return (
		<section
			className="flex h-full w-full min-h-0 min-w-0 max-h-full max-w-full rounded-lg gap-2 overflow-hidden"
			id={slug.current}
		>
			<div className="min-h-0 min-w-0 no-scrollbar flex flex-col gap-2 h-full w-full overflow-scroll md:flex-row">
				{videos.length >= 1 &&
					videos.map(({ link, thumbnail }, i) => (
						<Iframe
							src={link}
							type={"video"}
							key={link + i}
							thumbnail={thumbnail}
						/>
					))}
				{music.length >= 1 &&
					music.map(({ spotifyEmbedLink }, i) => (
						<Iframe
							src={cleanSpotifyEmbed(spotifyEmbedLink)}
							type={"song"}
							key={spotifyEmbedLink + i}
						/>
					))}
				{photos.length >= 1 &&
					photos.map(
						({ description, portrait, dimensions: { width, height } }, i) => {
							const photoUrl = portrait
								? urlFor(portrait, width, height)!.fit("max").quality(100).url()
								: "";

							return (
								<Image
									alt={description}
									src={photoUrl}
									width={width}
									height={height}
									loading="eager"
									className="m-auto h-full w-full rounded-lg"
									key={photoUrl + i}
								/>
							);
						},
					)}
			</div>
		</section>
	);
};
