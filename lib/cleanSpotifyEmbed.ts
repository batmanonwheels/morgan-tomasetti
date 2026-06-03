export const cleanSpotifyEmbed = (str: string): string => {
	return str.split('src="')[1].split('"')[0];
};
