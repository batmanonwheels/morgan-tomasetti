'use client';

import styles from './modules/header.module.css';
import { useState, useEffect } from 'react';

export const revalidate = 60;

const Header = () => {
	const now = new Date();
	const days: string[] = [
		'SUNDAY',
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
	];
	const months: string[] = [
		'JANUARY',
		'FEBRUARY',
		'MARCH',
		'APRIL',
		'MAY',
		'JUNE',
		'JULY',
		'AUGUST',
		'SEPTEMBER',
		'OCTOBER',
		'NOVEMEBER',
		'DECEMBER',
	];

	const parseDate = (now: Date): string => {
		const day = now.getDay();
		const month = now.getMonth();
		const date = now.getDate();
		const year = now.getFullYear();

		return `${days[day]}, ${months[month]} ${date}, ${year}`;
	};

	const parseTime = (now: Date): string => {
		const hours = now.getHours();
		const minutes = now.getMinutes();

		return `${hours > 12 ? hours - 12 : hours === 0 ? 12 : hours}:${
			minutes < 10 ? '0' + minutes : minutes
		}${hours >= 12 ? 'PM' : 'AM'}`;
	};

	const [currentTime, setCurrentTime] = useState<string>(parseTime(now));
	const [currentDate, setCurrentDate] = useState<string>(parseDate(now));

	useEffect(() => {
		let delay = (60 - now.getSeconds()) * 100;

		let interval = setInterval(() => {
			setCurrentTime(parseTime(new Date()));
			setCurrentDate(parseDate(new Date()));
		}, delay);
		return () => clearInterval(interval);
	}, []);

	return (
		<header className={styles.masthead}>
			<h1>Stella Raine Chu</h1>
			<div className={styles.subheader}>
				<h4>{currentTime}</h4>
				<h4 id='date'>{currentDate}</h4>
				<h4>$3.00</h4>
			</div>
		</header>
	);
};

export default Header;
