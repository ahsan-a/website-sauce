import { Mesh, MeshStandardMaterial, SphereBufferGeometry, TextureLoader } from 'three';
import { Scroller } from '../../typings';

export function createEarth(textureLoader: TextureLoader) {
	const geometry = new SphereBufferGeometry(2, 32, 32);
	const material = new MeshStandardMaterial({
		map: textureLoader.load('/assets/textures/earth/map.webp'),
	});

	const earth: Mesh<SphereBufferGeometry, MeshStandardMaterial> & Scroller = new Mesh(geometry, material);
	earth.position.set(-20, 0, -20);

	earth.scroll = () => {
		earth.rotation.y = window.pageYOffset / 100;
		earth.scale.set(window.pageYOffset / 700, window.pageYOffset / 700, window.pageYOffset / 700);
	};
	if (window.innerWidth > 768) earth.scale.set(window.pageYOffset / 700, window.pageYOffset / 700, window.pageYOffset / 700);
	else earth.scale.set(0, 0, 0);

	return earth;
}
