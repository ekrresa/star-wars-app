import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import './loader.css';

export function Loader() {
	return (
		<div className="loader">
			<ScaleLoader size={50} margin={3} width={5} color="#2D697C" />
		</div>
	);
}
