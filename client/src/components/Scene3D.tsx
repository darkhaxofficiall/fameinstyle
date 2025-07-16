import { useEffect, useRef } from 'react';

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Import Three.js dynamically
    import('three').then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true 
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Create floating geometric elements with gold material
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshLambertMaterial({ 
        color: 0xD4AF37,
        transparent: true,
        opacity: 0.7 
      });

      const cubes: THREE.Mesh[] = [];
      for (let i = 0; i < 50; i++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = (Math.random() - 0.5) * 20;
        cube.position.y = (Math.random() - 0.5) * 20;
        cube.position.z = (Math.random() - 0.5) * 20;
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        scene.add(cube);
        cubes.push(cube);
      }

      // Add professional lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xD4AF37, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      camera.position.z = 15;

      // Professional animation loop
      function animate() {
        requestAnimationFrame(animate);

        cubes.forEach((cube, index) => {
          cube.rotation.x += 0.001 + index * 0.0001;
          cube.rotation.y += 0.001 + index * 0.0001;
          cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });

        renderer.render(scene, camera);
      }

      animate();

      // Responsive canvas
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    });
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-1"
      style={{ zIndex: 1 }}
    />
  );
}
