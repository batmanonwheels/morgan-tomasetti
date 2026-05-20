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
	title: "REELS | Morgan Tomasetti",
	openGraph: {
		title: "REELS | Morgan Tomasetti",
	},
};

export default async function ReelsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY("Reels"),
	);

	return (
		<MainContainer className="flex-col-reverse gap-2">
			{projects && (
				<ProjectList projects={projects} baseUrl={"/reels/"} name={name} />
			)}
			{children}
		</MainContainer>
	);
}
