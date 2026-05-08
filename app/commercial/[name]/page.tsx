import { ProjectCard } from "@/components/project-card";
import { PROJECT_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { Project } from "@/sanity.types";

export default async function CommercialProjectPage({
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
