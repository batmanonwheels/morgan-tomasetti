import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url';

type ImageCardProps = {
	portrait: SanityImageSource;
	src: string;
	desc: string;
	w: number;
	h: number;
	r: string;
	handleSetItem: (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => void;
};

export const ImageCard = ({
	portrait,
	src,
	desc,
	w,
	h,
	r,
	handleSetItem,
}: ImageCardProps) => {
	const handleSetActive = () => {
		handleSetItem('image', undefined, portrait, w, h);
	};

	return (
		<li className='h-auto w-auto rounded-lg max-md:max-h-full flex items-center'>
			<Image
				src={src}
				alt={desc}
				width={w}
				height={h}
				className={`h-auto w-auto m-auto rounded-lg object-cover cursor-pointer max-md:h-full max-md:object-contain`}
				onClick={() => handleSetActive()}
			/>
		</li>
	);
};
