import React from 'react';

import { Jumbotron } from '../../components/Jumbotron';
import { Footer } from '../../components/Footer';

import './home.css';

export default function Home() {
	return (
		<section className="home">
			<Jumbotron />
			<Footer />
		</section>
	);
}
