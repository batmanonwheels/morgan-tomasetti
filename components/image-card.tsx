import { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";

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
		handleSetItem("image", undefined, portrait, w, h);
	};

	return (
		<li className="min-w-0 min-h-0 md:h-full md:w-auto">
			<Image
				src={src}
				alt={desc}
				width={w}
				height={h}
				className={`m-auto h-full w-auto cursor-pointer rounded-lg object-contain`}
				onClick={() => handleSetActive()}
			/>
		</li>
	);
};
