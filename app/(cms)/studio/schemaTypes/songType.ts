import { defineField, defineType } from 'sanity';

export const songType = defineType({
	name: 'song',
	title: 'Song',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Song Name',
			description: "What's the name of the song?",
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Song Description',
			description: 'A brief description of the song',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'project',
			title: 'Song Project',
			description:
				"Please name the project the name of the song! (That way it'll display properly)",
			type: 'reference',
			to: [{ type: 'project' }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'spotifyEmbedLink',
			title: 'Spotify Embed Link',
			description:
				'Go to the song you want to share, select "Share", then select "Embed". Copy and paste here!',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'isVisible',
			title: 'Would you like this song to be visible?',
			type: 'boolean',
			validation: (rule) => rule.required(),
			initialValue: true,
		}),
	],
});
