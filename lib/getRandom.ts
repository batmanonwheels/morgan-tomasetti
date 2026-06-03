import { client } from '@/sanity/lib/client';
import { Photo, Video } from '@/sanity.types';
import { generateThumbnail } from './generateThumbnail';
import {
	COVER_PHOTOS_QUERY,
	FIELD_PHOTOS_QUERY,
	FIELD_VIDEOS_THUMBNAIL_QUERY,
} from './queries';
import { urlFor } from './urlForImage';
import { ImageUrlBuilder } from 'sanity';

export const getRandomCoverPhoto = async (): Promise<{
	width: number;
	height: number;
	cover: string;
}> => {
	const photos = await client.fetch<Photo[]>(COVER_PHOTOS_QUERY());

	const {
		portrait,
		dimensions: { width, height },
	} = photos[Math.floor(Math.random() * photos.length)];

	return {
		width,
		height,
		cover: urlFor(portrait, width, height)!.fit('max').quality(100).url(),
	};
};

export const getRandomFieldPhoto = async (
	field: string,
): Promise<{
	width: number;
	height: number;
	cover: string;
}> => {
	const photos = await client.fetch<Photo[]>(FIELD_PHOTOS_QUERY(field));

	const {
		portrait,
		dimensions: { width, height },
	} = photos[Math.floor(Math.random() * photos.length)];

	return {
		width,
		height,
		cover: urlFor(portrait, width, height)!.fit('max').quality(100).url(),
	};
};

export const getRandomFieldVideoThumbnail = async (
	field: string,
): Promise<{
	cover: string | undefined;
}> => {
	const videos = await client.fetch<Video[]>(
		FIELD_VIDEOS_THUMBNAIL_QUERY(field),
	);

	const { link, thumbnail, dimensions } =
		videos[Math.floor(Math.random() * videos.length)];
	let cover: string | undefined;

	if (thumbnail) {
		const { width, height } = dimensions;
		cover = urlFor(thumbnail, width, height)!.fit('max').quality(100).url();
	} else {
		cover = generateThumbnail(link);
	}

	return {
		cover,
	};
};
