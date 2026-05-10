import type { SanityImageSource } from "@sanity/image-url";

type SongCardProps = {
	src: string;
	name: string;
	handleSetItem: (
		type: string,
		link?: string,
		portrait?: SanityImageSource,
		width?: number,
		height?: number,
	) => void;
};

export const SongCard = ({ src, name, handleSetItem }: SongCardProps) => {
	const handleSetActive = () => {
		handleSetItem("song", src);
	};

	return (
		<li className="flex snap-center items-center justify-center transition-all md:block">
			<button
				className={`w-full text-nowrap px-4 decoration-from-font decoration-wavy underline-offset-2 opacity-65 hover:underline hover:opacity-100  md:px-0 md:underline-offset-4`}
				onClick={() => handleSetActive()}
			>
				{`${name}`}
			</button>
		</li>
	);
};
