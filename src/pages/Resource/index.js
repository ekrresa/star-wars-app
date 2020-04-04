import React from 'react';
import { useParams } from '@reach/router';

import { Jumbotron } from '../../components/Jumbotron';

export default function ResourcePage() {
	const params = useParams();

	return (
		<main>
			<Jumbotron title={params.name} />
		</main>
	);
}
