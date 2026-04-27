import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		viewTransition: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/images/0a7f8a0o/production/**',
			},
			{
				protocol: 'https',
				hostname: 'vumbnail.com',
				// pathname: '/**/**.jpg',
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
				// pathname: 'vi/**/mqdefault.jpg',
			},
		],
	},
};

export default nextConfig;
