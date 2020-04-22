import React from 'react';
import { useLocation } from '@reach/router';
import { PropagateLoader } from 'react-spinners';

import { Jumbotron } from '../../components/Jumbotron';
import { PlanetsCard } from '../../components/PlanetsCard';
import { usePagesQuery } from '../../utils/fetch';
import { starPlanets } from '../../utils/images';
import '../index.css';
import './planets.css';

export default function Planets() {
	const location = useLocation();
	const { status, resolvedData, error } = usePagesQuery(['planetPages', 'planets', 1]);

	console.log({ status, resolvedData, error });

	return (
		<main>
			<Jumbotron title={location.pathname.substring(1)} />
			<section className="container" style={{ marginTop: '4em' }}>
				<section className="page-grid">
					{status === 'success' ? (
						resolvedData.results.map((item, index) => {
							return (
								<PlanetsCard name={item.name} key={item.name} img={starPlanets[index]} />
							);
						})
					) : (
						<PropagateLoader />
					)}
				</section>
			</section>
		</main>
	);
}
