import React from 'react';
import { Link } from '@reach/router';

import './viewbutton.css';

export function ViewMoreButton() {
	return (
		<div className="viewbtn-container">
			<Link to="/resource/people" className="btn viewbtn">
				view more
			</Link>
		</div>
	);
}
