import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url';
import { client } from '@/sanity/lib/client';

const { projectId, dataset } = client.config();

export const urlFor = (
	source: SanityImageSource | undefined,
	w: number,
	h: number,
) => {
	if (!source || !projectId || !dataset) return null;

	return createImageUrlBuilder({ projectId, dataset })
		.image(source)
		.width(w)
		.height(h);
};
