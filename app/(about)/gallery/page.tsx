import { Photo } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { PHOTOS_QUERY } from '@/lib/queries';
import ImageGallery from '@/components/image-gallery';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#ef8279',
};

export const metadata: Metadata = {
	title: 'Gallery | Morgan Tomasetti',
	description: 'Actress',
	openGraph: {
		title: 'Gallery | Morgan Tomasetti',
		description: 'Actress',
		images: '',
	},
};

export default async function Gallery() {
	const photos = await client.fetch<Photo[]>(PHOTOS_QUERY());

	return (
		<main className='col-span-full row-span-7 p-4 overflow-y-scroll'>
			<ImageGallery photos={photos} />
		</main>
	);
}
