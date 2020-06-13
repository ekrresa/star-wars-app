import React from 'react';
import { Link, useLocation } from '@reach/router';
import { FiSearch } from 'react-icons/fi';

import './jumbotron.css';

export function Jumbotron({ title }) {
	const path = useLocation().pathname;

	const homeBanner = 'https://i.imgur.com/RsodL7F.jpg';
	const resourceBanner = 'https://i.imgur.com/aunaAeY.jpg';

	const banner = path === '/' ? homeBanner : resourceBanner;

	const colors = {
		planets: '#c58127',
		people: '#27c5b9',
		starships: '#BB2CD9',
	};

	const titleColor = colors[title] || '#d8d828';

	return (
		<header className="header" style={{ backgroundImage: `url(${banner})` }}>
			<section className="header-logo-row">
				<div className="header-logo-container">
					<Link to="/">
						<img
							data-testid="siteLogo"
							src="https://i.imgur.com/ALovV5o.png"
							alt="app logo"
						/>
					</Link>
				</div>
			</section>

			<section className="hero">
				<div className="row align-center hero-linebreak">
					<div className="hero-img">
						<img
							data-testid="heroLogo"
							src="https://i.imgur.com/ALovV5o.png"
							alt="title"
						/>
					</div>
					<div className="hero-title" style={{ color: titleColor }}>
						<h1>{title || 'directory'}</h1>
					</div>
				</div>

				<p className="hero-desc">
					An epic space-opera theatrical film series, which depicts the adventures of
					various characters, a long time ago in a galaxy far, far away….
				</p>

				{path !== '/' && (
					<form data-testid="searchForm" className="hero-searchform">
						<div className="hero-formcontainer">
							<div className="hero-searchicon">
								<FiSearch data-testid="searchInputIcon" />
							</div>
							<input
								data-testid="searchInput"
								className="hero-searchinput"
								placeholder="Enter a search term..."
							/>
						</div>
					</form>
				)}
			</section>
		</header>
	);
}
