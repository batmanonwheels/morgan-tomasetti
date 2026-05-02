import { Field } from '@/sanity.types';
import { client } from '../../sanity/lib/client';
import { ProjectList } from '@/components/project-list';
import { PROJECT_LIST_QUERY } from '@/lib/queries';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#f6b9b4',
};

export const metadata: Metadata = {
	title: 'TV/Film | Morgan Tomasetti',
	description: 'Actress',
	openGraph: {
		title: 'TV/Film | Morgan Tomasetti',
		description: 'Actress',
		images: '',
	},
};

export default async function ScreenLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { projects } = await client.fetch<Field>(PROJECT_LIST_QUERY('TV/Film'));

	return (
		<main className='col-span-full row-span-7 flex gap-4 p-4 max-md:flex-col-reverse max-md:p-2 max-md:gap-2'>
			{projects && (
				<ProjectList
					projects={projects}
					baseUrl={'/screen/'}
					name={'Tv/Film'}
				/>
			)}
			{children}
		</main>
	);
}
