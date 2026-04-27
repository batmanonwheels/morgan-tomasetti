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
		<ul className='col-span-1 row-span-full grid grid-rows-subgrid overflow-y-auto no-scrollbar max-md:col-span-full max-md:row-start-8 max-md:row-span-1 max-md:flex max-md:overflow-y-hidden max-md:overflow-x-scroll max-md:min-w-full max-md:px-4 max-md:h-1/10 max-md:snap-x max-md:snap-mandatory max-md:gap-1  max-md:justify-center'>
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
