import { Field } from '@/sanity.types';
import { client } from '../../sanity/lib/client';
import { ProjectList } from '@/components/project-list';
import { PROJECT_LIST_QUERY } from '@/lib/queries';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#f9d5d2',
};

export const metadata: Metadata = {
	title: 'Commercial | Morgan Tomasetti',
	description: 'Actress',
	openGraph: {
		title: 'Commercial | Morgan Tomasetti',
		description: 'Actress',
		images: '',
	},
};

export default async function CommercialLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY('Commercial'),
	);

	return (
		<main className='col-span-full row-span-7 flex gap-4 p-4 max-md:flex-col-reverse max-md:p-2 max-md:gap-2'>
			{projects && (
				<ProjectList projects={projects} baseUrl={'/commercial/'} name={name} />
			)}
			{children}
		</main>
	);
}
