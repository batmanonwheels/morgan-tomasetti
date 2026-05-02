import { ImageCard } from '@/components/image-card';
import { urlFor } from '@/lib/urlForImage';
import { Photo, Video } from '@/sanity.types';
import { SanityImageSource } from '@sanity/image-url';
import { VideoCard } from './video-card';

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
		// <ul className='col-span-1 row-span-full grid grid-rows-subgrid no-scrollbar justify-center gap-3 max-md:flex max-md:max-h-14 max-md:justify-center'>
		<ul className='col-span-1 row-span-full h-full no-scrollbar overflow-y-scroll rounded-lg gap-4 flex flex-col max-md:flex-row max-md:max-h-14 max-md:justify-center'>
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
							? urlFor(portrait, width, height)!.fit('max').quality(100).url()
							: '';

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
