export const generateThumbnail = (src: string) => {
	if (src.includes('vimeo')) {
		const id1 = src.split('video/')[1].split('?')[0];
		const id2 = src.split('?h=')[1].split('#')[0];

		return `https://vumbnail.com/${id1}/${id2}_large.jpg`;
	}

	if (src.includes('youtube')) {
		const id = src.split('/')[4].split('?')[0];

		return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
	}
};
