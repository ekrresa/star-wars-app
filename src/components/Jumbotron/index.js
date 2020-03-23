import React from 'react';
import { Link } from '@reach/router';
import { FiSearch } from 'react-icons/fi';

import banner from '../../assets/hero-banner.jpg';
import logo from '../../assets/logo.png';
import './jumbotron.css';

export function Jumbotron() {
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
					<div className="hero-title">
						<h1>directory</h1>
					</div>
				</div>
				<hr className="hero-linebreak" />

				<p className="hero-desc">Find your favourite Characters, Starships and Planets</p>

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
			</section>
		</header>
	);
}
