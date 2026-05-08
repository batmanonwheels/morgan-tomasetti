import type { Metadata, Viewport } from "next";
import { MainContainer } from "@/components/main-container";
import { ProjectList } from "@/components/project-list";
import { PROJECT_LIST_QUERY } from "@/lib/queries";
import { Field } from "@/sanity.types";
import { client } from "../../sanity/lib/client";

export const viewport: Viewport = {
	themeColor: "#f4aba5",
};

export const metadata: Metadata = {
	title: "MUSIC | Morgan Tomasetti",
	openGraph: {
		title: "MUSIC | Morgan Tomasetti",
	},
};

export default async function MusicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY("Music"),
	);

	return (
		<MainContainer className="flex-col-reverse gap-2">
			{projects && (
				<ProjectList projects={projects} baseUrl={"/music/"} name={name} />
			)}
			{children}
		</MainContainer>
	);
}
