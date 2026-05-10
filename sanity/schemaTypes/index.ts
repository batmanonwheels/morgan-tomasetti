import { type SchemaTypeDefinition } from 'sanity';
import { fieldType } from '@/app/(cms)/studio/schemaTypes/fieldType';
import { photoType } from '@/app/(cms)/studio/schemaTypes/photoType';
import { projectType } from '@/app/(cms)/studio/schemaTypes/projectType';
import { videoType } from '@/app/(cms)/studio/schemaTypes/videoType';
import { songType } from '@/app/(cms)/studio/schemaTypes/songType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [fieldType, projectType, photoType, videoType, songType],
};
