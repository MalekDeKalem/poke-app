<script lang="ts">
    import { onMount } from "svelte";
	import * as THREE from 'three';

    let el = $state<HTMLCanvasElement>();

    onMount(() => {
		if (!el) {
			console.error("Canvas not found");
			return;
    	}

		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let renderer: THREE.WebGLRenderer;
		let cube: THREE.Mesh;

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
			
			// Cube setup
			const geometry = new THREE.BoxGeometry(1, 1, 1);
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
			cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			camera.position.z = 5;
		};

		const render = () => {
			renderer.render(scene, camera);
		};

		const animate = () => {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.005;
			cube.rotation.y += 0.05;
			cube.rotation.z += 0.1;
			camera.rotation.x += 0.05;

			render();
		};

		const resizeCanvas = () => {
			if (!el) return;

			const width = window.innerWidth;
			const height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};

		init();
		animate();
		window.addEventListener("resize", resizeCanvas);
    });


</script>

<canvas class="laptop:h-[500px] relative top-0 bottom-0 left-0 right-0 m-auto" id="canvas" bind:this={el}>

</canvas>

