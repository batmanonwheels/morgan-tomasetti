import { getRandomFieldPhoto } from '@/lib/getRandom';
import Image from 'next/image';
import { ViewTransition } from 'react';

export default async function Bio() {
	const { width, height, cover } = await getRandomFieldPhoto('Headshots');

	const subtitle: string =
		'Morgan Tomasetti is an NYC-based actress with a foundation in musical theatre and on-camera storytelling.';

	const aboutText: string[] = [
		'Morgan is a NYC-based actress working across national commercial campaigns, independent film, and live performance. With a foundation in musical theatre and dance, she brings grounded presence and athletic physicality to her on-camera work.',
		'Recent credits include a national campaign for OLLY Wellness and the award-winning short film "Rehersal", for which she received "Best Acting" at the SVA Awards, with additional national and international campaigns currently under NDA.',
		'She holds a BFA in Musical Theatre with a minor in Dance from Kent State University.',
	];

	return (
		<main className='col-span-full row-span-7 grid grid-cols-subgrid grid-rows-subgrid p-4 max-md:flex max-md:flex-col max-md:overflow-y-scroll max-md:no-scrollbar. max-md:gap-4'>
			<ViewTransition name={'cover-photo'}>
				<Image
					alt={'Heashot of Morgan Tomasetti'}
					src={cover}
					width={width}
					height={height}
					className='col-span-4 row-span-full w-full h-full object-cover rounded-lg object-top max-md:w-full max-md:h-[62.5vh]'
				/>
			</ViewTransition>

			<section className='col-start-6 col-span-4 row-span-full my-auto flex flex-col gap-4 max-md:px-4'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-8xl font-zenitha max-md:text-6xl'>
						About Morgan
					</h1>
					<h3 className='text-xl font-caprasimo max-md:text-sm'>
						{subtitle.toUpperCase()}
					</h3>
				</div>

				<div className='flex flex-col gap-2 max-md:text-sm'>
					{aboutText.map((paragraph, i) => (
						<p className='' key={i}>
							{paragraph}
						</p>
					))}
				</div>
			</section>
		</main>
	);
}
