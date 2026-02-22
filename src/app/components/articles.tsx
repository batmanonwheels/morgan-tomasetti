import styles from './modules/articles.module.css';
import HorizontalRule from './horizontal-rule';
import { Fragment } from 'react';
import Link from 'next/link';

import { client } from '../../sanity/lib/client';
import { Article } from '../../../sanity.types';

const ARTICLES_QUERY = `*[
  _type == "article" && !isContribution && isVisible
] | order(date desc)`;
const options = { next: { revalidate: 30 } };

const Articles = async () => {
	const articles = await client.fetch<Article[]>(ARTICLES_QUERY, {}, options);
	return (
		<section id={styles.articles}>
			<h4>{'BYLINES'}</h4>
			<HorizontalRule width='30%' />
			<ul>
				{articles.map(
					({ title, date, origin, link, image, objectFitPosition }, i) => {
						let newDate = new Date(date);
						const formattedDate = `${new Intl.DateTimeFormat('en-US', {
							month: 'short',
						}).format(
							newDate
						)}. ${newDate.getDate()}, ${newDate.getFullYear()}`;
						return (
							<Fragment key={title}>
								<li className={styles.article}>
									<Link href={link} target='_blank'>
										{image ? (
											<img
												src={image}
												alt={title + ' via ' + origin}
												style={{ objectPosition: objectFitPosition }}
											/>
										) : (
											<></>
										)}
										<HorizontalRule width='100%' />
										<h5>{title}</h5>
										<p>{origin}</p>
									</Link>
									<p>{formattedDate}</p>
								</li>
								{i < articles.length - 1 ? (
									<HorizontalRule width='15%' />
								) : (
									<></>
								)}
							</Fragment>
						);
					}
				)}
			</ul>
		</section>
	);
};

export default Articles;
