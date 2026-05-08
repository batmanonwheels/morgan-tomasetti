import type { Metadata, Viewport } from "next";
import { MainContainer } from "@/components/main-container";
import { ProjectList } from "@/components/project-list";
import { PROJECT_LIST_QUERY } from "@/lib/queries";
import { Field } from "@/sanity.types";
import { client } from "../../sanity/lib/client";

export const viewport: Viewport = {
	themeColor: "#f08f87",
};

export const metadata: Metadata = {
	title: "HEADSHOTS | Morgan Tomasetti",
	openGraph: {
		title: "HEADSHOTS | Morgan Tomasetti",
	},
};

export default async function HeadshotsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY("Headshots"),
	);

	return (
		<MainContainer className="flex-col-reverse gap-2">
			{projects && (
				<ProjectList projects={projects} baseUrl={"/headshots/"} name={name} />
			)}
			{children}
		</MainContainer>
	);
}
