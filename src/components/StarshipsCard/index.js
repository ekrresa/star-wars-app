import React from 'react';

import { getStarshipImages } from '../../utils';
import styles from './starships.module.css';

export function StarshipCard({ data, index }) {
	return (
		<div className={`${styles.card} ${styles['card-grid']}`}>
			<div className={styles['card-image']}>
				<img
					src={getStarshipImages(data.name)}
					style={{ height: '100%' }}
					alt="starship"
				/>
			</div>
			<div className={styles['card-body']}>
				<div className={styles['card-info']}>
					<h4 className={styles['card-shipname']}>{data.name}</h4>
					<p>{data.model}</p>
					{/* <p>{data.cargo_capacity}</p> */}
					<p>
						{new Intl.NumberFormat('en', {
							style: 'unit',
							unit: 'kilogram',
							unitDisplay: 'short',
						}).format(parseInt(data.cargo_capacity))}
					</p>
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
