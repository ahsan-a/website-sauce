import { Color, Scene } from 'three';

function createScene() {
	const scene = new Scene();

	const bgTexture = new Color(0x2e3440);
	scene.background = bgTexture;
	return scene;
}

export { createScene };
