import React from 'react';
import { Link } from '@reach/router';

import './viewbutton.css';

export function ViewMoreButton({ name }) {
	return (
		<div className="viewbtn-container">
			<Link to={`/resource/${name}`} className="btn viewbtn">
				view more
			</Link>
		</div>
	);
}
