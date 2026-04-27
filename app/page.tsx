import { getRandomCoverPhoto } from '@/lib/getRandom';
import Image from 'next/image';
import { ViewTransition } from 'react';

export default async function Home() {
	const { width, height, cover } = await getRandomCoverPhoto();

	return (
		<main className='col-span-full row-span-7 p-4 max-md:row-span-7 max-md:p-2'>
			<ViewTransition name={'cover-photo'}>
				<Image
					alt={'Heashot of Morgan Tomasetti'}
					src={cover}
					width={width}
					height={height}
					className='w-full h-full object-cover rounded-lg'
				/>
			</ViewTransition>
		</main>
	);
}
