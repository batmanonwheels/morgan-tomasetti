import Image from 'next/image';
import { ViewTransition } from 'react';
import { getRandomFieldPhoto } from '@/lib/getRandom';

export default async function Headshots() {
	const { width, height, cover } = await getRandomFieldPhoto('Headshots');

	return (
		<ViewTransition name={'cover-photo'}>
			<Image
				alt={'Heashot of Morgan Tomasetti'}
				src={cover}
				width={width}
				height={height}
				className='h-full w-auto m-auto object-cover rounded-lg'
			/>
		</ViewTransition>
	);
}
