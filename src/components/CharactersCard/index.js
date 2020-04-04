import React from 'react';

import { starCharacters } from '../../utils/images';
import './characters.css';

export function CharacterCard({ data, index }) {
	const gender = data.gender === 'n/a' ? 'robot' : data.gender;

	return (
		<div className="character-card character-card-flex">
			<div className="character-card-image">
				<img
					src={starCharacters[index]}
					style={{ height: '100%' }}
					alt="popular character"
				/>
			</div>
			<div className="character-card-body">
				<div className="character-card-info">
					<h4 className="character-name">{data.name}</h4>
					<p>{gender}</p>
					<p>{data.birth_year}</p>
				</div>
				<div className="character-card-buttonholder">
					<a href={data.url} className="btn character-btn">
						read more
					</a>
				</div>
			</div>
		</div>
	);
}
