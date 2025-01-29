<script lang="ts">
    import { onMount } from "svelte";
	import * as THREE from 'three';

    let el = $state<HTMLCanvasElement>();

    onMount(() => {
		let camera : THREE.PerspectiveCamera;
		let scene : THREE.Scene;
		let renderer : THREE.WebGLRenderer;
		let cube : THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer({antialias: true, canvas: el});
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
			cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;
		}

		const render = () => {
			renderer.clear()
			renderer.render(scene, camera);
		}

		const animate = () => {
			requestAnimationFrame(animate)

			cube.rotation.x += 0.005
			cube.rotation.y += 0.005

			render()
		}

		init()
		animate()
    });


</script>

<canvas bind:this={el}>

</canvas>