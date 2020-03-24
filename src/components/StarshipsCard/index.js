import React from 'react';

import starship1 from '../../assets/starship-1.jpg';
import './starships.css';

export function StarshipCard({ data }) {
	return (
		<div className="star-card star-card-flex">
			<div className="star-card-image">
				<img src={starship1} style={{ height: '100%' }} alt="starship" />
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
