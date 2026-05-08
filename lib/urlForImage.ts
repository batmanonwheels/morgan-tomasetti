import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource, w: number, h: number) =>
	projectId && dataset
		? createImageUrlBuilder({ projectId, dataset })
				.image(source)
				.width(w)
				.height(h)
		: null;
