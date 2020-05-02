import { starCharacters, starshipImages, unknownStarships } from './images';

export function getImage(key) {
	const imageKey = key.toLowerCase();

	if (!starCharacters[imageKey]) {
		return starCharacters['unavailable'];
	}

	return starCharacters[imageKey];
}

export function getStarshipImages(key) {
	const imageKey = key.toLowerCase();

	if (!starshipImages[imageKey]) {
		return getUnknownStarship();
	}

	return starshipImages[imageKey];
}

function getUnknownStarship() {
	const index = Math.trunc(Math.random() * 4);

	return unknownStarships[index];
}
