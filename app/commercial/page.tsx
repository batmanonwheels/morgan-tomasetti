import Image from "next/image";
import { ViewTransition } from "react";
import { getRandomFieldVideoThumbnail } from "@/lib/getRandom";

export default async function Commercial() {
	const { cover } = await getRandomFieldVideoThumbnail("Commercial");

	return (
		<ViewTransition name={"cover-photo"}>
			<Image
				alt={"Morgan Tomasetti video thumbnail"}
				src={cover!}
				width={1920}
				height={1080}
				className="m-auto grow rounded-lg object-cover"
			/>
		</ViewTransition>
	);
}
