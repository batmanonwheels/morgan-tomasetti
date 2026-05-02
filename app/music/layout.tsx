import { Field } from '@/sanity.types';
import { client } from '../../sanity/lib/client';
import { ProjectList } from '@/components/project-list';
import { PROJECT_LIST_QUERY } from '@/lib/queries';

export default async function MusicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY('Music'),
	);

	return (
		<main className='col-span-full row-span-7 flex gap-4 p-4 max-md:flex-col-reverse max-md:p-2 max-md:gap-2'>
			{projects && (
				<ProjectList projects={projects} baseUrl={'/music/'} name={name} />
			)}
			{children}
		</main>
	);
}
