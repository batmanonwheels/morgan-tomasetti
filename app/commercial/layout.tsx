import type { Metadata, Viewport } from "next";
import { MainContainer } from "@/components/main-container";
import { ProjectList } from "@/components/project-list";
import { PROJECT_LIST_QUERY } from "@/lib/queries";
import { Field } from "@/sanity.types";
import { client } from "../../sanity/lib/client";

export const viewport: Viewport = {
	themeColor: "#f9d5d2",
};

export const metadata: Metadata = {
	title: "COMMERCIAL | Morgan Tomasetti",
	openGraph: {
		title: "COMMERCIAL | Morgan Tomasetti",
	},
};

export default async function CommercialLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { name, projects } = await client.fetch<Field>(
		PROJECT_LIST_QUERY("Commercial"),
	);

	return (
		// <main className="flex basis-7/8 flex-col-reverse gap-2 px-2 pt-2 md:flex-row md:gap-4 md:p-4">
		<MainContainer className="flex-col-reverse gap-2">
			{projects && (
				<ProjectList projects={projects} baseUrl={"/commercial/"} name={name} />
			)}
			{children}
		</MainContainer>
		// </main>
	);
}
