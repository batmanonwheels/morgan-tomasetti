import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url';
import { generateThumbnail } from '@/lib/generateThumbnail';

type VideoCardProps = {
	src: string;
	desc: string;
	handleSetItem: (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => void;
};

export const VideoCard = ({ src, desc, handleSetItem }: VideoCardProps) => {
	const handleSetActive = () => {
		handleSetItem('video', src);
	};

	return (
		<li className='relative h-auto w-auto max-md:h-full max-md:flex max-md:items-center'>
			<Image
				src={generateThumbnail(src)!}
				alt={desc}
				width={1920}
				height={1080}
				className={`h-auto w-auto m-auto rounded-lg object-contain cursor-pointer max-md:h-full`}
				onClick={() => handleSetActive()}
			/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 640 640'
				className='absolute w-1/4 h-fit fill-white bottom-0 right-0'
			>
				<path d='M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z' />
			</svg>
		</li>
	);
};
