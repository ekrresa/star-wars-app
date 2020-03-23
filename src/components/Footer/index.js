import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

import './footer.css';

export function Footer() {
	return (
		<footer className="footer">
			<p className="footer-copyright">
				<FaRegCopyright style={{ marginRight: '3px' }} /> {new Date().getFullYear()}{' '}
				<a href="https://github.com/chuck-huey"> Ochuko Ekrresa</a>
			</p>
		</footer>
	);
}
