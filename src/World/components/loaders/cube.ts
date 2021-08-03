import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Scroller } from '../../../typings';

export async function loadCube() {
	const loader = new GLTFLoader();

	const islandData = await loader.loadAsync('/assets/models/cube.glb');

	const cube: Group & Scroller = islandData.scene;
	cube.position.set(-60, 30, -25);
	cube.scale.set(1.5, 1.5, 1.5);

	cube.scroll = () => {
		cube.rotation.set(window.pageYOffset / 150, window.pageYOffset / 150, 0);
		cube.position.y = -window.pageYOffset / 80 + 30;
	};

	return cube;
}
