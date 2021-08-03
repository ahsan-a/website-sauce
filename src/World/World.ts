import { PerspectiveCamera, Scene, TextureLoader, WebGLRenderer } from 'three';
import { Scroller } from '../typings';

import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createScene } from './components/scene';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

import { loadIsland } from './components/loaders/island';
import { loadCube } from './components/loaders/cube';
import { createEarth } from './components/earth';

let camera: PerspectiveCamera & Scroller;
let scene: Scene;
let renderer: WebGLRenderer;
let loop: Loop;
let scrollers: Scroller[] = [];
const textureLoader = new TextureLoader();

class World {
	started?: boolean;
	constructor(canvas: HTMLCanvasElement) {
		camera = createCamera(canvas);
		scene = createScene();
		renderer = createRenderer(canvas);
		loop = new Loop(camera, scene, renderer);
		const { light, ambientLight } = createLights();

		scene.add(light, ambientLight);
		new Resizer(camera, renderer);
		scrollers.push(camera);

		if (window.innerWidth > 768) document.body.onscroll = this.scroll;
		this.init();
	}
	async init() {
		const island = await loadIsland();
		scene.add(island);
		loop.updatables.push(island);

		const cube = await loadCube();
		scene.add(cube);
		scrollers.push(cube);

		const earth = createEarth(textureLoader);
		scene.add(earth);
		scrollers.push(earth);
	}
	render() {
		renderer.render(scene, camera);
	}
	start = () => {
		loop.start();
		this.started = true;
	};
	stop = () => {
		loop.stop();
		this.started = false;
	};
	scroll = () => {
		for (const object of scrollers) object.scroll?.();
	};
}

export { World };
