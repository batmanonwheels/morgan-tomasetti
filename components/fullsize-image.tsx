import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type FullsizeImageProps = {
	img: string;
	setCurrentFullsize: Dispatch<SetStateAction<string>>;
};

export const FullsizeImage = ({
	img,
	setCurrentFullsize,
}: FullsizeImageProps) => {
	const closeFullsize = () => {
		setCurrentFullsize("");
		const modal: HTMLDialogElement | null = document.querySelector("#fullsize");
		if (!modal) return;
		if (!modal.open) return;
		modal.close();
	};
	return (
		<dialog
			id="fullsize"
			className={`relative m-auto bg-black backdrop:bg-jinza-safflower-5 backdrop:opacity-90 rounded-xl`}
			open={false}
			closedby="closerequest"
			onClick={() => closeFullsize()}
		>
			{img !== "" && (
				<Image
					alt={"fullscreen image"}
					src={img}
					width={1920}
					height={1080}
					className="h-full w-full md:max-h-[calc(100dvh-2.5rem)] rounded-xl bg-black object-cover"
				/>
			)}
		</dialog>
	);
};
