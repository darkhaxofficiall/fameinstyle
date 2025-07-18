import { useEffect, useRef } from 'react';

interface Corner3DProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'small' | 'medium' | 'large';
}

export default function Corner3D({ position, size = 'medium' }: Corner3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    import('three').then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true 
      });

      const dimensions = {
        small: 150,
        medium: 200,
        large: 250
      };

      const canvasSize = dimensions[size];
      
      renderer.setSize(canvasSize, canvasSize);
      renderer.setClearColor(0x000000, 0);

      // Create a single gold geometric shape
      const geometries = [
        new THREE.TetrahedronGeometry(0.8),
        new THREE.OctahedronGeometry(0.7),
        new THREE.IcosahedronGeometry(0.6)
      ];

      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshLambertMaterial({ 
        color: 0xD4AF37,
        transparent: true,
        opacity: 0.8,
        emissive: 0x332211
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xD4AF37, 0.8);
      directionalLight.position.set(2, 2, 2);
      scene.add(directionalLight);

      camera.position.z = 3;

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.008;
        mesh.rotation.z += 0.003;

        renderer.render(scene, camera);
      }

      animate();

      return () => {
        renderer.dispose();
      };
    });
  }, [size]);

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} pointer-events-none z-10`}>
      <canvas 
        ref={canvasRef}
        className="opacity-30"
      />
    </div>
  );
}