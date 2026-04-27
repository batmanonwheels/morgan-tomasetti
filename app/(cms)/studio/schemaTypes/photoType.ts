import { defineField, defineType } from 'sanity';

export const photoType = defineType({
	name: 'photo',
	title: 'Photo',
	type: 'document',
	fields: [
		defineField({
			name: 'description',
			title: 'Photo Description',
			description: 'A brief description of whats happening in the photo',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'category',
			title: 'Photo Category',
			description:
				'Where is this photo from? (e.g. a specific location, event, or project)',
			type: 'reference',
			to: [{ type: 'project' }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'portrait',
			title: 'Image',
			type: 'image',
			validation: (rule) => rule.required(),
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'isVisible',
			title: 'Would you like this image to be visible?',
			type: 'boolean',
			validation: (rule) => rule.required(),
			initialValue: true,
		}),
		defineField({
			name: 'isCoverWorthy',
			title: 'Would you like this image to randomly displayed on the homepage?',
			type: 'boolean',
			validation: (rule) => rule.required(),
			initialValue: false,
		}),
	],
});
