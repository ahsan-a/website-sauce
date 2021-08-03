import { World } from './World/World';
import aos from 'aos';

async function main() {
	const canvas = document.getElementById('bg');
	if (!canvas) return;

	const world = new World(canvas as HTMLCanvasElement);
	world.start();
}

main();

aos.init();
