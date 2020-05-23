import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

import { Loader } from '../components/Loader';

const Homepage = lazy(() => import('../pages/Home'));
const StarshipsPage = lazy(() => import('../pages/Starships'));
const PeoplePage = lazy(() => import('../pages/People'));
const FilmsPage = lazy(() => import('../pages/Films'));
const PlanetsPage = lazy(() => import('../pages/Planets'));

function Routes() {
	return (
		<Suspense fallback={<Loader />}>
			<Router>
				<Homepage exact path="/" />
				<StarshipsPage path="starships" />
				<PeoplePage path="people" />
				<PlanetsPage path="planets" />
				<FilmsPage path="films" />
			</Router>
		</Suspense>
	);
}

export default Routes;
