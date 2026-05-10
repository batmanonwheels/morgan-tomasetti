import type { Metadata, Viewport } from "next";
import ImageGallery from "@/components/image-gallery";
import { MainContainer } from "@/components/main-container";
import { PHOTOS_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { Photo } from "@/sanity.types";

export const viewport: Viewport = {
	themeColor: "#ef8279",
};

export const metadata: Metadata = {
	title: "GALLERY | Morgan Tomasetti",
	openGraph: {
		title: "GALLERY | Morgan Tomasetti",
	},
};

export default async function Gallery() {
	const photos = await client.fetch<Photo[]>(PHOTOS_QUERY());

	return (
		<MainContainer isScrollable={true} className={""}>
			<div className="no-scrollbar min-h-0 min-w-0 h-full w-full overflow-y-scroll rounded-lg">
				<ImageGallery photos={photos} />
			</div>
		</MainContainer>
	);
}
