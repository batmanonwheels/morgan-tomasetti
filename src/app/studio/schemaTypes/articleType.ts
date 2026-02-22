import { defineField, defineType } from 'sanity';

export const articleType = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'string',
			validation: (rule) => rule.required(),
			initialValue: 'Stella Raine Chu',
		}),
		defineField({
			name: 'origin',
			title: 'Origin',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'datetime',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'link',
			title: 'Link',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'objectFitPosition',
			title: 'Object Fit Position',
			type: 'string',
			validation: (rule) => rule.required(),
			initialValue: 'center',
		}),
		defineField({
			name: 'isContribution',
			title: 'Is Contribution',
			type: 'boolean',
			validation: (rule) => rule.required(),
			initialValue: false,
		}),
		defineField({
			name: 'isVisible',
			title: 'Is Visible',
			type: 'boolean',
			validation: (rule) => rule.required(),
			initialValue: true,
		}),
	],
});
