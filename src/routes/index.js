import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

import Loader from '../components/loader';

const Homepage = lazy(() => import('../pages/Home'));

function Routes() {
	return (
		<Suspense fallback={<Loader />}>
			<Router>
				<Homepage path="/" />
			</Router>
		</Suspense>
	);
}

export default Routes;
