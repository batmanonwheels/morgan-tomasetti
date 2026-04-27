import Image from 'next/image';
import { Field } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { ViewTransition } from 'react';
import { FIELD_PHOTOS_QUERY } from '@/lib/queries';

export default async function Digis() {
	const { projects } = await client.fetch<Field>(FIELD_PHOTOS_QUERY('Digis'));
	return (
		<ViewTransition name={'cover-photo'}>
			<Image
				alt={'Heashot of Morgan Tomasetti'}
				src={
					'https://cdn.sanity.io/images/0a7f8a0o/production/4fe819901fcecc07e25908684ceb2149a941a04d-1920x1536.webp?w=2000&fit=max&auto=format&dpr=2'
				}
				width={1920}
				height={1080}
				className='h-full w-auto m-auto object-cover rounded-lg'
			/>
		</ViewTransition>
	);
}
