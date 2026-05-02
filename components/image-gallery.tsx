'use client';

import Image from 'next/image';
import { ViewTransition } from 'react';
import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react';
import { urlFor } from '@/lib/urlForImage';
import { Photo } from '@/sanity.types';

type ImageGalleryProps = {
	photos: Photo[];
};

export default function ImageGallery({ photos }: ImageGalleryProps) {
	return (
		<MasonryGrid
			className='h-full w-full col-span-full row-span-full object-cover rounded-lg p'
			gap={'.5rem'}
			frameWidth={'10rem'}
		>
			{photos.map(
				({ description, portrait, dimensions: { width, height } }, i) => {
					const photoUrl = portrait
						? urlFor(portrait, width, height)!.fit('max').quality(100).url()
						: '';

					if (i === 0) {
						return (
							<Frame width={width} height={height} key={i}>
								<ViewTransition name={'cover-photo'}>
									<Image
										alt={description}
										src={photoUrl}
										width={width}
										height={height}
										className='h-full object-cover rounded-lg'
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
								className='h-full object-cover rounded-lg'
							/>
						</Frame>
					);
				},
			)}
		</MasonryGrid>
	);
}
