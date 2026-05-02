import { Field } from '@/sanity.types';
import { client } from '../../sanity/lib/client';
import { ProjectList } from '@/components/project-list';
import { PROJECT_LIST_QUERY } from '@/lib/queries';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#f7c7c3',
};

export const metadata: Metadata = {
	title: 'Theatre | Morgan Tomasetti',
	description: 'Actress',
	openGraph: {
		title: 'Theatre | Morgan Tomasetti',
		description: 'Actress',
		images: '',
	},
};

export default async function TheatreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY('Theatre'),
	);

	return (
		<main className='col-span-full row-span-7 flex gap-4 p-4 max-md:flex-col-reverse max-md:p-2 max-md:gap-2'>
			{projects && (
				<ProjectList projects={projects} baseUrl={'/theatre/'} name={name} />
			)}
			{children}
		</main>
	);
}
