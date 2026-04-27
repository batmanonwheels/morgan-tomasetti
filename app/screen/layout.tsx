import { Field } from '@/sanity.types';
import { client } from '../../sanity/lib/client';
import { ProjectList } from '@/components/project-list';
import { PROJECT_LIST_QUERY } from '@/lib/queries';

export default async function ScreenLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY('TV/Film'),
	);

	return (
		<main className='col-span-full row-span-7 flex gap-4 p-4'>
			{projects && (
				<ProjectList projects={projects} baseUrl={'/screen/'} name={name} />
			)}
			{children}
		</main>
	);
}
