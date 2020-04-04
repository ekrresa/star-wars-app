import React from 'react';

import styles from './planets.module.css';

export function PlanetsCard({ img, name }) {
	return (
		<div className={styles.card}>
			<img src={img} alt="" />
			<div className={styles['card-name']}>{name}</div>
		</div>
	);
}
