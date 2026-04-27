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
	const [currentItem, setCurrentItem] = useState(
		photos[0]
			? [
					'image',
					urlFor(
						photos[0].portrait!,
						photos[0].dimensions!.width,
						photos[0].dimensions!.height,
					)!.url(),
				]
			: ['video', videos[0].link],
	);

	const handleSetItem = (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => {
		if (type === 'video' && !!link) {
			setCurrentItem([type, link]);
		}

		if (type === 'image' && !!portrait && !!width && !!height) {
			const url = urlFor(portrait, width, height)!.url();
			setCurrentItem([type, url]);
		}
	};

	const [type, link] = currentItem;

	return (
		<section
			className='flex-1 grid grid-rows-6 grid-cols-8 gap-4 rounded-xl max-md:flex max-md:flex-col-reverse max-md:gap-2'
			id={slug.current}
		>
			<ItemList photos={photos} videos={videos} handleSetItem={handleSetItem} />
			<ViewTransition name={'cover-photo'}>
				{link && type === 'image' && (
					<Image
						alt={'Heashot of Morgan Tomasetti'}
						src={link}
						width={1920}
						height={1080}
						className='h-full w-auto m-auto col-start-2 col-span-full row-span-full object-cover rounded-lg max-md:row-span-7 max-md:col-start-1  max-md:w-full max-md:h-auto'
					/>
				)}
				{link && type === 'video' && (
					<iframe
						src={link}
						className='h-full w-full m-auto col-start-2 col-span-full row-span-full object-cover rounded-lg bg-black max-md:row-span-7 max-md:col-start-1 max-md:flex-1'
						allowFullScreen
						allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				)}
			</ViewTransition>
		</section>
	);
};
