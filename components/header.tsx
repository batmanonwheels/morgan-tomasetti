export const Header = () => {
	const directory: string[][] = [
		['BIO', '/bio'],
		['COMMERCIAL', '/commercial'],
		['THEATRE', '/theatre'],
		['TV/FILM', '/screen'],
		['MUSIC', '/music'],
		['DIGIS', '/digis'],
		['HEADSHOTS', '/headshots'],
		['GALLERY', '/gallery'],
		['CONTACT/RESUME', '/contact'],
	];
	return (
		<header className='fixed bottom-0 flex gap-10 p-8'>
			<h1 className='items-center text-2xl'>MORGAN TOMASETTI</h1>
			<nav className='flex items-center gap-5'>
				{directory.map(([title, link], i) => {
					return (
						<a className='opacity-65' href={link} key={title + i}>
							{title}
						</a>
					);
				})}
			</nav>
		</header>
	);
};
