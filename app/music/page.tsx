import Image from "next/image";
import { ViewTransition } from "react";
import { getRandomFieldPhoto } from "@/lib/getRandom";

export default async function Music() {
	const { width, height, cover } = await getRandomFieldPhoto("Music");

	return (
		<ViewTransition name={"cover-photo"}>
			<Image
				alt={"Heashot of Morgan Tomasetti"}
				src={cover}
				width={width}
				height={height}
				className="m-auto h-full w-auto rounded-lg object-cover"
			/>
		</ViewTransition>
	);
}
