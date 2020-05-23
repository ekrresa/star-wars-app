import React from 'react';
import { Link, useLocation } from '@reach/router';
import { FiSearch } from 'react-icons/fi';

import banner1 from '../../assets/images/resource.jpg';
import banner2 from '../../assets/images/hero-banner.jpg';
import logo from '../../assets/images/logo.png';
import './jumbotron.css';

export function Jumbotron({ title }) {
	const path = useLocation().pathname;
	const banner = path === '/' ? banner2 : banner1;

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
						<img data-testid="siteLogo" src={logo} alt="app logo" />
					</Link>
				</div>
			</section>

			<section className="hero">
				<div className="row align-center">
					<div className="hero-img">
						<img data-testid="heroLogo" src={logo} alt="title" />
					</div>
					<div className="hero-title" style={{ color: titleColor }}>
						<h1>{title || 'directory'}</h1>
					</div>
				</div>
				<hr className="hero-linebreak" />

				<p className="hero-desc">Explore the Star Wars Universe</p>

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
