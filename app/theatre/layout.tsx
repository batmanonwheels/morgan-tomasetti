import type { Metadata, Viewport } from "next";
import { MainContainer } from "@/components/main-container";
import { ProjectList } from "@/components/project-list";
import { PROJECT_LIST_QUERY } from "@/lib/queries";
import { Field } from "@/sanity.types";
import { client } from "../../sanity/lib/client";

export const viewport: Viewport = {
	themeColor: "#f7c7c3",
};

export const metadata: Metadata = {
	title: "THEATRE | Morgan Tomasetti",
	openGraph: {
		title: "THEATRE | Morgan Tomasetti",
	},
};

export default async function TheatreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY("Theatre"),
	);

	return (
		<MainContainer className="flex-col-reverse gap-2">
			{projects && (
				<ProjectList projects={projects} baseUrl={"/theatre/"} name={name} />
			)}
			{children}
		</MainContainer>
	);
}
