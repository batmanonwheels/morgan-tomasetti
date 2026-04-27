import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const zenithaClassic = localFont({
	src: './../fonts/ZenithaClassic.woff2',
	variable: '--font-zenitha-classic',
});

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Morgan Tomasetti',
	description: 'Actress',
	openGraph: {
		title: 'Morgan Tomasetti',
		description: 'Actress',
		images: '',
	},
	metadataBase: new URL('https://morgantomasetti.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${zenithaClassic.variable} ${geistSans.variable} ${geistMono.variable} grid grid-cols-10 grid-rows-8 gap-4 antialiased box-border bg-zinc-100 h-dvh  max-md:max-w-dvw max-md:max-h-dvh max-md:overflow-hidden max-md:grid-rows-7 max-md:gap-0 *:col-span-full`}
			>
				{children}
				<Footer />
			</body>
		</html>
	);
}
