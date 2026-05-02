'use client';

import Image from 'next/image';
import { ItemList } from '@/components/item-list';
import { Photo, Slug, Video } from '@/sanity.types';
import { urlFor } from '@/lib/urlForImage';
import { useState } from 'react';
import { SanityImageSource } from '@sanity/image-url';
import { ViewTransition } from 'react';

type ProjectCardProps = {
	photos: Photo[];
	videos: Video[];
	slug: Slug;
};

export const ProjectCard = ({ photos, videos, slug }: ProjectCardProps) => {
	const [currentItem, setCurrentItem] = useState<(string | number)[]>(
		photos[0]
			? [
					'image',
					urlFor(
						photos[0].portrait!,
						photos[0].dimensions!.width,
						photos[0].dimensions!.height,
					)!.url(),
					photos[0].dimensions!.width,
					photos[0].dimensions!.height,
				]
			: ['video', videos[0].link, 0, 0],
	);

	const handleSetItem = (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => {
		if (type === 'video' && !!link) {
			setCurrentItem([type, link, 0, 0]);
		}

		if (type === 'image' && !!portrait && !!width && !!height) {
			const url = urlFor(portrait, width, height)!.url();
			setCurrentItem([type, url, width, height]);
		}
	};

	const [type, link, width, height] = currentItem;

	return (
		<section
			className='flex-1 h-full grid grid-rows-6 grid-cols-8 gap-4 rounded-xl max-md:max-h-full max-md:flex max-md:flex-col-reverse max-md:gap-2 max-md:justify-between max-md:items-center'
			id={slug.current}
		>
			<ItemList photos={photos} videos={videos} handleSetItem={handleSetItem} />
			<ViewTransition name={'cover-photo'}>
				<div className='h-full w-full  max-h-full m-auto col-start-2 col-span-full row-span-full object-cover overflow-hidden rounded-lg max-md:m-0 flex max-md:items-center max-md:justify-center max-md:flex-1 will-change-transform '>
					{typeof link == 'string' &&
						type &&
						typeof width == 'number' &&
						typeof height == 'number' &&
						type === 'image' && (
							<Image
								alt={'Heashot of Morgan Tomasetti'}
								src={link}
								width={width!}
								height={height}
								loading='eager'
								// className='h-full w-auto m-auto col-start-2 col-span-full row-span-full object-cover rounded-lg max-md:m-0 max-md:w-auto max-md:my-auto'
								className='h-full w-auto m-auto rounded-lg max-md:h-full max-md:object-cover'
							/>
						)}
					{typeof link == 'string' && type === 'video' && (
						<iframe
							src={link}
							className='h-full w-full m-auto col-start-2 col-span-full row-span-full object-cover rounded-lg bg-black max-md:row-span-7 max-md:col-start-1 max-md:flex-1'
							allowFullScreen
							allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						></iframe>
					)}
				</div>
			</ViewTransition>
		</section>
	);
};
