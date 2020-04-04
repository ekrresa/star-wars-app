import React from 'react';

import { starshipImages } from '../../utils/images';
import styles from './starships.module.css';

export function StarshipCard({ data, index }) {
	const shipImage = starshipImages[index];

	return (
		<div className={`${styles.card} ${styles['card-flex']}`}>
			<div className={styles['card-image']}>
				<img src={shipImage} style={{ height: '100%' }} alt="starship" />
			</div>
			<div className={styles['card-body']}>
				<div className={styles['card-info']}>
					<h4 className={styles['card-shipname']}>{data.name}</h4>
					<p>{data.model}</p>
					<p>{data.cargo_capacity}</p>
				</div>
				<div className={styles['card-buttonholder']}>
					<a href={data.url} className="btn">
						read more &rarr;
					</a>
				</div>
			</div>
		</div>
	);
}
