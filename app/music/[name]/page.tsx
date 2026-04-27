import { Project } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { ProjectCard } from '@/components/project-card';
import { PROJECT_QUERY } from '@/lib/queries';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ name: string }>;
}): Promise<Metadata> {
	const { name } = await params;

	const project = await client.fetch<Project>(PROJECT_QUERY(name));

	return {
		title: `${project.name} | Morgan Tomasetti`,
		openGraph: {
			title: `${project.name}  | Morgan Tomasetti`,
		},
	};
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;

	const { slug, photos, videos } = await client.fetch<Project>(
		PROJECT_QUERY(name),
	);

	return <ProjectCard slug={slug} photos={photos} videos={videos} />;
}
