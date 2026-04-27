import { defineField, defineType } from 'sanity';

export const videoType = defineType({
	name: 'video',
	title: 'Video',
	type: 'document',
	fields: [
		defineField({
			name: 'description',
			title: 'Video Description',
			description: 'A brief description of whats happening in the video',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'category',
			title: 'Video Category',
			description:
				'Where is this video from? (e.g. a specific location, event, or project)',
			type: 'reference',
			to: [{ type: 'project' }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'link',
			title: 'Video Link',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'isVisible',
			title: 'Would you like this video to be visible?',
			type: 'boolean',
			validation: (rule) => rule.required(),
			initialValue: true,
		}),
	],
});
