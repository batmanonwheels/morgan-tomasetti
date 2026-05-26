import { ImageCard } from "@/components/image-card";
import { urlFor } from "@/lib/urlForImage";
import { Photo, Song, Video } from "@/sanity.types";
import { VideoCard } from "./video-card";
import { SongCard } from "./song-card";

type ItemListProps = {
	photos: Photo[];
	videos: Video[];
	music: Song[];
	handleSetItem: (type: string, id: string) => void;
};

export const ItemList = ({
	photos,
	videos,
	music,
	handleSetItem,
}: ItemListProps) => {
	return (
		<ul className="hidden no-scrollbar min-h-1/12 max-h-1/12 w-full basis-1/12 flex-row justify-center gap-2 overflow-x-scroll rounded-lg md:flex md:overflow-x-hidden md:overflow-y-scroll md:min-h-full md:max-h-full md:basis-1/8 md:flex-col md:items-start md:justify-start md:gap-4">
			{music &&
				music.map(({ _id, spotifyEmbedLink, name }, i) => {
					return (
						<SongCard
							id={_id}
							src={spotifyEmbedLink}
							name={name}
							handleSetItem={handleSetItem}
							key={i}
						/>
					);
				})}
			{videos &&
				videos.map(({ _id, description, link }, i) => {
					return (
						<VideoCard
							id={_id}
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
							_id,
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
								id={_id}
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
