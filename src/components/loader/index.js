import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

import './loader.css';

export default function Loading() {
	return (
		<div className="loader">
			<MoonLoader size={30} />
		</div>
	);
}
