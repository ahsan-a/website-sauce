import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Ticker } from '../../../typings';

export async function loadIsland() {
	const loader = new GLTFLoader();

	const islandData = await loader.loadAsync('/assets/models/island.glb');

	const island: Group & Ticker = islandData.scene;
	island.position.set(2, -6, -25);
	island.castShadow = true;
	island.receiveShadow = true;

	const rotationsPerSecond = Math.PI / 5;

	island.tick = (delta = 0.16) => {
		island.rotation.y -= rotationsPerSecond * delta;
	};

	return island;
}
