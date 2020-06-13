import React from 'react';
import { Link } from '@reach/router';

import './viewbutton.css';

export function ViewMoreButton({ name, text }) {
	return (
		<div className="viewbtn-container">
			<Link to={`/${name}`} className="btn viewbtn">
				{text || 'view more'}
			</Link>
		</div>
	);
}
