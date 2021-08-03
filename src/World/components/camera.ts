import { PerspectiveCamera } from 'three';
import { Scroller } from '../../typings';

function createCamera(canvas: HTMLCanvasElement) {
	const camera: PerspectiveCamera & Scroller = new PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
	camera.position.z = 10;

	const screenWidth: number = window.innerWidth;
	camera.scroll = () => {
		if (screenWidth > 768) camera.position.x = Math.min(0, 1 - window.scrollY / 40);
	};
	camera.scroll();

	return camera;
}

export { createCamera };
