import Image from 'next/image';
import { ViewTransition } from 'react';
import { getRandomFieldPhoto } from '@/lib/getRandom';

export default async function Theatre() {
	const { width, height, cover } = await getRandomFieldPhoto('Theatre');

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
