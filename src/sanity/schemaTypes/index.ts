import { articleType } from '@/app/studio/schemaTypes/articleType';
import { photoType } from '@/app/studio/schemaTypes/photoType';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [articleType, photoType],
};
