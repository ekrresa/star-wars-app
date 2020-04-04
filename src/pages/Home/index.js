import React, { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { useLocation } from '@reach/router';

import { Jumbotron } from '../../components/Jumbotron';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { StarshipCard } from '../../components/StarshipsCard';
import { CharacterCard } from '../../components/CharactersCard';
import { Slider } from '../../components/Carousel';
import { HomeSection } from './components/HomeSection';
import { useCancellableSWR } from '../../utils/fetch';

import './home.css';

export default function Home() {
	const [{ data: starships }, starshipsRequest] = useCancellableSWR('/starships/');
	const [{ data: characters }, charactersRequest] = useCancellableSWR('/people/');
	const [{ data: planets }, planetsRequest] = useCancellableSWR('/planets/');

	const path = useLocation().pathname;

	useEffect(() => {
		return () => {
			if (path !== '/') {
				starshipsRequest.cancel('cancelled starship request');
				charactersRequest.cancel('cancelled characters request');
				planetsRequest.cancel('cancelled characters request');
			}
		};
	}, [charactersRequest, path, planetsRequest, starshipsRequest]);

	return (
		<>
			<section className="home">
				<Jumbotron />
				<Container>
					<HomeSection title="popular starships" pageTo="starships">
						<section className="starship-grid">
							{starships ? (
								starships.slice(0, 6).map((item, index) => {
									return <StarshipCard data={item} key={item.name} index={index} />;
								})
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
					<HomeSection title="popular planets" pageTo="planets">
						<section className="carousel-grid">
							<Slider data={planets} />
						</section>
					</HomeSection>
					<HomeSection title="popular characters" pageTo="people">
						<section className="character-grid">
							{characters ? (
								characters.slice(0, 4).map((item, index) => {
									return <CharacterCard data={item} key={item.name} index={index} />;
								})
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
				</Container>
			</section>
			<Footer />
		</>
	);
}
