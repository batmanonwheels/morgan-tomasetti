import type { SanityImageSource } from "@sanity/image-url";

type SongCardProps = {
	id: string;
	src: string;
	name: string;
	handleSetItem: (type: string, id: string) => void;
};

export const SongCard = ({ id, src, name, handleSetItem }: SongCardProps) => {
	const handleSetActive = () => {
		handleSetItem("song", id);
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
