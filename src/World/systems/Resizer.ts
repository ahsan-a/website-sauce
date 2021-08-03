import { PerspectiveCamera, WebGLRenderer } from 'three';

function setSize(camera: PerspectiveCamera, renderer: WebGLRenderer) {
	const container = document.getElementById('canvasContainer');
	if (!container) throw 'container not found';
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
	constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
		setSize(camera, renderer);

		window.addEventListener('resize', () => {
			setSize(camera, renderer);
			this.onResize();
		});
	}
	onResize() {}
}

export { Resizer };
