import React from 'react';
import { Link } from '@reach/router';
import { MdKeyboardBackspace } from 'react-icons/md';

import './back.css';

export function BackToHome() {
	return (
		<section className="back">
			<Link className="back-link" to="/">
				<MdKeyboardBackspace />
				<span className="back-link-text">Back to home</span>
			</Link>
		</section>
	);
}
