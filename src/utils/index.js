import { starCharacters } from './images';

export function getImage(key) {
	const imageKey = key.toLowerCase();

	if (!starCharacters[imageKey]) {
		return starCharacters['unavailable'];
	}

	return starCharacters[imageKey];
}
