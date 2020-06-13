import React from 'react';

import styles from './planets.module.css';

export function MovieCard({ img }) {
	return (
		<div className={styles.card}>
			<img src={img} alt="" />
		</div>
	);
}
