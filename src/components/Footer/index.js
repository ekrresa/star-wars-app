import React from 'react';
import { FaRegCopyright, FaHeart } from 'react-icons/fa';

import './footer.css';

export function Footer() {
	return (
		<footer className="footer">
			<p>
				Created with <FaHeart color="crimson" style={{ margin: '0em .4em' }} /> by
				<a href="https://github.com/chuck-huey"> Ochuko Ekrresa</a>
			</p>
			<p className="footer-copyright">
				<FaRegCopyright style={{ marginRight: '3px' }} /> Star Wars,{' '}
				{new Date().getFullYear()}{' '}
			</p>
		</footer>
	);
}
