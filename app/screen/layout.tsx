import type { Metadata, Viewport } from "next";
import { MainContainer } from "@/components/main-container";
import { ProjectList } from "@/components/project-list";
import { PROJECT_LIST_QUERY } from "@/lib/queries";
import { Field } from "@/sanity.types";
import { client } from "../../sanity/lib/client";

export const viewport: Viewport = {
	themeColor: "#f6b9b4",
};

export const metadata: Metadata = {
	title: "TV/FILM | Morgan Tomasetti",
	openGraph: {
		title: "TV/FILM | Morgan Tomasetti",
	},
};

export default async function ScreenLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { projects } = await client.fetch<Field>(PROJECT_LIST_QUERY("TV/Film"));

	return (
		<MainContainer className="flex-col-reverse gap-2">
			{projects && (
				<ProjectList
					projects={projects}
					baseUrl={"/screen/"}
					name={"Tv/Film"}
				/>
			)}
			{children}
		</MainContainer>
	);
}
