import { Photo } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { PHOTOS_QUERY } from '@/lib/queries';
import ImageGallery from '@/components/image-gallery';

export default async function Gallery() {
	const photos = await client.fetch<Photo[]>(PHOTOS_QUERY());

	return (
		<main className='col-span-full row-span-7 grid grid-cols-subgrid grid-rows-subgrid p-4 overflow-y-scroll'>
			<ImageGallery photos={photos} />
		</main>
	);
}
