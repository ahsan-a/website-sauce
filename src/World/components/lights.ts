import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
	const ambientLight = new HemisphereLight('white', 'lightslategray', 4);
	const light = new DirectionalLight('white', 2);
	light.position.set(0, 5, 8);

	return { light, ambientLight };
}

export { createLights };
