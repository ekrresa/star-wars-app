import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

import { Loader } from '../components/Loader';

const Homepage = lazy(() => import('../pages/Home'));
const StarshipsPage = lazy(() => import('../pages/Starships'));
const PeoplePage = lazy(() => import('../pages/People'));
const FilmsPage = lazy(() => import('../pages/Films'));

function Routes() {
	return (
		<Suspense fallback={<Loader />}>
			<Router>
				<Homepage exact path="/" />
				<StarshipsPage path="starships" />
				<PeoplePage path="people" />
				<FilmsPage path="films" />
			</Router>
		</Suspense>
	);
}

export default Routes;
