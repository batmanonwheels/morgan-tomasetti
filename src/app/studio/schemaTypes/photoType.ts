import { defineField, defineType } from 'sanity';

export const photoType = defineType({
	name: 'photo',
	title: 'Photo',
	type: 'document',
	fields: [
		defineField({
			name: 'description',
			title: 'Photo Description',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'link',
			title: 'Link',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
	],
});
