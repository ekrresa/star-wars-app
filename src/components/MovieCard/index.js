import React from 'react';

import styles from './movie.module.css';

export function MovieCard({ img }) {
	return (
		<div className={styles.card}>
			<img src={img} alt="" />
		</div>
	);
}
