import React from 'react';

import './container.css';

export function Container({ children, ...style }) {
	return (
		<section {...style} className="container">
			{children}
		</section>
	);
}
