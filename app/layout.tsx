import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Caprasimo, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import "./globals.css";

const zenithaClassic = localFont({
	src: "./../fonts/ZenithaClassic.otf",
	variable: "--font-zenitha-classic",
	weight: "400",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const caprasimo = Caprasimo({
	variable: "--font-caprasimo",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Morgan Tomasetti",
	description: "NYC-BASED ACTRESS",
	openGraph: {
		title: "Morgan Tomasetti",
		description: "NYC-BASED ACTRESS",
		images:
			"https://cdn.sanity.io/images/0a7f8a0o/production/5841243fe8695737a0008383d941acaf25c2b197-1371x1920.webp",
	},
	metadataBase: new URL("https://morgantomasetti.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${zenithaClassic.variable} ${geistSans.variable} ${geistMono.variable} ${caprasimo.variable} box-border flex h-dvh max-h-dvh max-w-dvw flex-col justify-between gap-2 antialiased md:gap-4`}
			>
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
