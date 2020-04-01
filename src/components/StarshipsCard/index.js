import React from 'react';

import { starshipImages } from '../../utils/images';
import './starships.css';

export function StarshipCard({ data, index }) {
	const shipImage = starshipImages[index];

	return (
		<div className="star-card star-card-flex">
			<div className="star-card-image">
				<img src={shipImage} style={{ height: '100%' }} alt="starship" />
			</div>
			<div className="star-card-body">
				<div className="star-card-info">
					<h4 className="star-shipname">{data.name}</h4>
					<p>{data.model}</p>
					<p>{data.cargo_capacity}</p>
				</div>
				<div className="star-card-buttonholder">
					<a href={data.url} className="btn">
						read more &rarr;
					</a>
				</div>
			</div>
		</div>
	);
}
