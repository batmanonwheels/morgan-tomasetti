import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { ViewTransition } from "react";
import { MainContainer } from "@/components/main-container";
import { getRandomFieldPhoto } from "@/lib/getRandom";

export const viewport: Viewport = {
	themeColor: "#fbe3e1",
};

export const metadata: Metadata = {
	title: "BIO | Morgan Tomasetti",
	openGraph: {
		title: "BIO | Morgan Tomasetti",
	},
};

export default async function Bio() {
	const { width, height, cover } = await getRandomFieldPhoto("Headshots");

	const subtitle: string =
		"Morgan Tomasetti is an NYC-based actress with a foundation in musical theatre and on-camera storytelling.";

	const aboutText: string[] = [
		"Morgan is a NYC-based actress working across national commercial campaigns, independent film, and live performance. With a foundation in musical theatre and dance, she brings grounded presence and athletic physicality to her on-camera work.",
		'Recent credits include a national campaign for OLLY Wellness and the award-winning short film "Rehersal", for which she received "Best Acting" at the SVA Awards, with additional national and international campaigns currently under NDA.',
		"She holds a BFA in Musical Theatre with a minor in Dance from Kent State University.",
	];

	return (
		<MainContainer
			isScrollable={true}
			className="md:items-center md:overflow-hidden"
		>
			<ViewTransition name={"cover-photo"}>
				<Image
					alt={"Heashot of Morgan Tomasetti"}
					src={cover}
					width={width}
					height={height}
					className="h-3/5 w-full rounded-lg object-cover object-top md:h-full md:w-full"
				/>
			</ViewTransition>
			<section className="flex h-fit flex-col gap-4 p-4 md:justify-center">
				<div className="flex flex-col gap-2">
					<h1 className="w-full font-zenitha text-6xl md:text-8xl">
						About Morgan
					</h1>
					<h3 className="font-caprasimo text-sm md:w-3/4 md:text-xl">
						{subtitle.toUpperCase()}
					</h3>
				</div>

				<div className="flex flex-col gap-2 pb-5 text-sm md:w-3/4 md:text-base">
					{aboutText.map((paragraph, i) => (
						<p className="" key={i}>
							{paragraph}
						</p>
					))}
				</div>
			</section>
		</MainContainer>
	);
}
