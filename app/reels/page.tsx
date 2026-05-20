import Image from "next/image";
import { ViewTransition } from "react";
import { getRandomFieldVideoThumbnail } from "@/lib/getRandom";

export default async function Reels() {
	const { cover } = await getRandomFieldVideoThumbnail("Reels");

	return (
		<ViewTransition name={"cover-photo"}>
			<Image
				alt={"Heashot of Morgan Tomasetti"}
				src={cover!}
				width={1920}
				height={1080}
				className="m-auto min-w-0 min-h-0 h-full max-h-full w-auto rounded-lg object-cover"
			/>
		</ViewTransition>
	);
}
