import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Jumbotron } from '../../components/Jumbotron';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { SectionHeader } from '../../components/SectionHeader';
import { StarshipCard } from '../../components/StarshipsCard';
import { ViewMoreButton } from '../../components/ViewButton';

import './home.css';

export default function Home() {
	const [starships, setStarships] = useState([]);

	useEffect(() => {
		async function getStarships() {
			const starships = await Axios.get('/starships/')
				.then((res) => res.data.results)
				.catch((err) => console.error(err));

			setStarships(starships);
		}

		getStarships();
	}, []);

	return (
		<>
			<section className="home">
				<Jumbotron />
				<Container>
					<SectionHeader title="popular starships" />
					<section className="starship-grid">
						{starships.slice(0, 6).map((item) => {
							return <StarshipCard data={item} key={item.name} />;
						})}
					</section>
					<ViewMoreButton />
				</Container>
			</section>
			<Footer />
		</>
	);
}
