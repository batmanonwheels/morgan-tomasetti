import { SanityImageSource } from "@sanity/image-url";
import { ImageCard } from "@/components/image-card";
import { urlFor } from "@/lib/urlForImage";
import { Photo, Video } from "@/sanity.types";
import { VideoCard } from "./video-card";

type ItemListProps = {
	photos: Photo[];
	videos: Video[];
	handleSetItem: (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => void;
};

export const ItemList = ({ photos, videos, handleSetItem }: ItemListProps) => {
	return (
		<ul className="no-scrollbar flex max-h-14 flex-row justify-center gap-2 overflow-y-scroll rounded-lg md:max-h-full md:basis-1/8 md:flex-col md:items-start md:justify-start md:gap-4">
			{videos &&
				videos.map(({ description, link }, i) => {
					return (
						<VideoCard
							desc={description}
							src={link}
							handleSetItem={handleSetItem}
							key={i}
						/>
					);
				})}
			{photos &&
				photos.map(
					(
						{
							description,
							portrait,
							dimensions: { width, height, aspectRatio },
						},
						i,
					) => {
						const photoUrl = portrait
							? urlFor(portrait, width, height)!.fit("max").quality(100).url()
							: "";

						return (
							<ImageCard
								portrait={portrait}
								src={photoUrl}
								desc={description}
								w={width}
								h={height}
								r={aspectRatio}
								key={i}
								handleSetItem={handleSetItem}
							/>
						);
					},
				)}
		</ul>
	);
};
