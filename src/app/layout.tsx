import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';

const engraversBt = localFont({
	src: './fonts/engravers-old-english-bt.ttf',
	variable: '--font-engravers-old-english',
});

const dmSerif = localFont({
	src: './fonts/DMSerifText-Regular.ttf',
	variable: '--font-dm-serif-text',
});

const dmSerifItalic = localFont({
	src: './fonts/DMSerifText-Italic.ttf',
	variable: '--font-dm-serif-text-italic',
});

export const metadata: Metadata = {
	title: 'Stella Raine Chu',
	description: 'Multimedia Journalist',
	openGraph: {
		title: 'Stella Raine Chu',
		description: 'Multimedia Journalist',
		images:
			'https://res.cloudinary.com/dmmn0gqaf/image/upload/v1765577218/stella-raine-chu/d0c8qvzhqeijgcwrlkvq_dt9che.webp',
	},
	metadataBase: new URL('https://stellarainechu.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
		},
	},
};

export const viewport: Viewport = {
	themeColor: '#fefefe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${engraversBt.variable} ${dmSerif.variable} ${dmSerifItalic.variable}`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
