<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

  let el = $state<HTMLCanvasElement>();
  let { textureImage } = $props();

  onMount(() => {
    if (!el) {
      console.error("Canvas not found");
      return;
    }

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;

    const init = async () => {
      scene = new THREE.Scene();
      const width = el?.clientWidth;
      const height = el?.clientHeight;
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(window.devicePixelRatio);
      const light = new THREE.AmbientLight(0xffffff);
      scene.add(light);

      const textureLoader = new THREE.TextureLoader();
      const texture = await textureLoader.loadAsync(textureImage);
      texture.center.set(0.5, 0.5);
      texture.rotation = Math.PI / 2;

      texture.colorSpace = THREE.SRGBColorSpace;

      const loader = new GLTFLoader();
      const card = await loader.loadAsync("/models/PokeCard.glb");

      card.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Plane_2") {
          console.log("Mesh:", child.name);
          child.material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
          });
        }
      });

      scene.add(card.scene);

      camera.position.x = 2;
      camera.position.y = 1.5;
      camera.rotation.y = Math.PI / 2;
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      resizeCanvas();

      render();
    };

    const resizeCanvas = () => {
      if (!el) return;

      const width = el.clientWidth;
      const height = el.clientHeight;

      if (el.width !== width || el.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    init();
    animate();
    window.addEventListener("resize", resizeCanvas);
  });
</script>

<canvas
  class="laptop:h-[500px] max-w-full h-auto bg-white border"
  id="canvas"
  bind:this={el}
>
</canvas>
