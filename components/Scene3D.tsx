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

      // Create multiple geometric shapes for variety
      const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.TetrahedronGeometry(0.8),
        new THREE.OctahedronGeometry(0.7),
        new THREE.DodecahedronGeometry(0.6),
        new THREE.IcosahedronGeometry(0.7)
      ];

      const materials = [
        new THREE.MeshLambertMaterial({ 
          color: 0xD4AF37,
          transparent: true,
          opacity: 0.8,
          emissive: 0x332211
        }),
        new THREE.MeshLambertMaterial({ 
          color: 0xFFD700,
          transparent: true,
          opacity: 0.6,
          emissive: 0x221100
        }),
        new THREE.MeshLambertMaterial({ 
          color: 0xB8860B,
          transparent: true,
          opacity: 0.7,
          emissive: 0x110000
        })
      ];

      const meshes: THREE.Mesh[] = [];
      
      // Create floating geometric elements
      for (let i = 0; i < 60; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.x = (Math.random() - 0.5) * 30;
        mesh.position.y = (Math.random() - 0.5) * 30;
        mesh.position.z = (Math.random() - 0.5) * 30;
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;
        
        // Add scale variation
        const scale = 0.3 + Math.random() * 0.7;
        mesh.scale.set(scale, scale, scale);
        
        scene.add(mesh);
        meshes.push(mesh);
      }

      // Add particle system for extra visual appeal
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 200;
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xD4AF37,
        size: 0.1,
        transparent: true,
        opacity: 0.6
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Enhanced lighting system
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      scene.add(ambientLight);

      const directionalLight1 = new THREE.DirectionalLight(0xD4AF37, 0.8);
      directionalLight1.position.set(5, 5, 5);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xFFD700, 0.4);
      directionalLight2.position.set(-5, -3, 2);
      scene.add(directionalLight2);

      const pointLight = new THREE.PointLight(0xD4AF37, 0.5, 50);
      pointLight.position.set(0, 10, 0);
      scene.add(pointLight);

      camera.position.z = 20;

      // Mouse interaction
      let mouseX = 0;
      let mouseY = 0;
      
      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
        mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
      };
      
      window.addEventListener('mousemove', handleMouseMove);

      // Enhanced animation loop
      function animate() {
        requestAnimationFrame(animate);

        // Camera movement based on mouse
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        // Animate geometries
        meshes.forEach((mesh, index) => {
          mesh.rotation.x += 0.001 + index * 0.0001;
          mesh.rotation.y += 0.001 + index * 0.0001;
          mesh.rotation.z += 0.0005 + index * 0.00005;
          
          // Floating motion
          mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
          mesh.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.0005;
        });

        // Animate particles
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;

        // Animate lights
        pointLight.position.x = Math.sin(Date.now() * 0.001) * 10;
        pointLight.position.z = Math.cos(Date.now() * 0.001) * 10;

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
        window.removeEventListener('mousemove', handleMouseMove);
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
