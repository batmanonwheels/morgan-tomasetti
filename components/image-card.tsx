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
		<li className="flex h-auto w-auto items-center rounded-lg max-md:max-h-full">
			<Image
				src={src}
				alt={desc}
				width={w}
				height={h}
				className={`m-auto h-auto w-auto cursor-pointer rounded-lg object-cover max-md:h-full max-md:object-contain`}
				onClick={() => handleSetActive()}
			/>
		</li>
	);
};
