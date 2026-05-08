import Image from "next/image";
import { ViewTransition } from "react";
import { MainContainer } from "@/components/main-container";
import { getRandomCoverPhoto } from "@/lib/getRandom";

export default async function Home() {
	const { width, height, cover } = await getRandomCoverPhoto();

	return (
		<MainContainer>
			<ViewTransition name={"cover-photo"}>
				<Image
					alt={"Heashot of Morgan Tomasetti"}
					src={cover}
					width={width}
					height={height}
					className="h-full w-full rounded-lg object-cover"
				/>
			</ViewTransition>
		</MainContainer>
	);
}
