import React from 'react';

import { getImage } from '../../utils';
import styles from './characters.module.css';

export function CharacterCard({ data }) {
	const gender = data.gender === 'n/a' ? 'robot' : data.gender;

	return (
		<div className={`${styles.card} ${styles['card-grid']}`}>
			<div className={styles['card-image']}>
				<img
					src={getImage(data.name)}
					style={{ height: '100%' }}
					alt="popular character"
				/>
			</div>
			<div className={styles['card-body']}>
				<div className={styles['card-info']}>
					<h4 className={styles['card-info-name']}>{data.name}</h4>
					<p>{gender}</p>
					<p>{data.birth_year}</p>
				</div>
				<div className={styles['card-buttonholder']}>
					<a href={data.url} className={styles['card-btn']}>
						read more
					</a>
				</div>
			</div>
		</div>
	);
}
