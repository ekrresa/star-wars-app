import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

import Loader from '../components/Loader';

const Homepage = lazy(() => import('../pages/Home'));
const ResourcePage = lazy(() => import('../pages/Resource'));

function Routes() {
	return (
		<Suspense fallback={<Loader />}>
			<Router>
				<Homepage path="/" />
				<ResourcePage path="resource/:name" />
			</Router>
		</Suspense>
	);
}

export default Routes;
