import React from 'react';
import { useLocation } from '@reach/router';
import { PropagateLoader } from 'react-spinners';

import { Jumbotron } from '../../components/Jumbotron';
import { StarshipCard } from '../../components/StarshipsCard';
import { usePagesQuery } from '../../utils/fetch';
import '../index.css';
import './starships.css';

export default function Starships() {
	const location = useLocation();
	const { status, resolvedData, error } = usePagesQuery([
		'starshipPages',
		'starships',
		1,
	]);

	console.log({ status, resolvedData, error });

	return (
		<main>
			<Jumbotron title={location.pathname.substring(1)} />
			<section className="container" style={{ marginTop: '4em' }}>
				<section className="page-grid">
					{status === 'success' ? (
						resolvedData.results.map((item, index) => {
							return <StarshipCard data={item} key={item.name} index={index} />;
						})
					) : (
						<PropagateLoader />
					)}
				</section>
			</section>
		</main>
	);
}
