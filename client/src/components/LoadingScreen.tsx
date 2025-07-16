import { useEffect, useRef, useState } from 'react';
import logoPath from "@assets/ChatGPT Image May 28, 2025, 01_33_21 AM_1752661190416.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Initialize 3D loading animation
    import('three').then((THREE) => {
      if (!canvasRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true 
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);

      // Create floating particles
      const particleCount = 100;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        colors[i * 3] = 0.8;     // R
        colors[i * 3 + 1] = 0.7; // G
        colors[i * 3 + 2] = 0.2; // B (Gold color)
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Create central loading ring
      const ringGeometry = new THREE.RingGeometry(2, 2.2, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xD4AF37,
        transparent: true,
        opacity: 0.8
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      scene.add(ring);

      camera.position.z = 5;

      let animationId: number;
      let startTime = Date.now();

      function animate() {
        animationId = requestAnimationFrame(animate);

        const elapsedTime = (Date.now() - startTime) / 1000;
        
        // Rotate particles
        particles.rotation.y += 0.01;
        particles.rotation.x += 0.005;

        // Animate ring
        ring.rotation.z += 0.02;
        ring.scale.set(1 + Math.sin(elapsedTime * 2) * 0.1, 1 + Math.sin(elapsedTime * 2) * 0.1, 1);

        // Update camera position for dynamic effect
        camera.position.x = Math.sin(elapsedTime * 0.5) * 0.5;
        camera.position.y = Math.cos(elapsedTime * 0.3) * 0.3;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }

      animate();

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
        renderer.dispose();
      };
    });

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowLogo(true);
          setTimeout(() => {
            onComplete();
          }, 2000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="relative z-10 text-center">
        {showLogo ? (
          <div className="animate-fade-in">
            <img 
              src={logoPath} 
              alt="Fame & Style Logo" 
              className="w-32 h-32 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl font-montserrat font-bold text-gold mb-4">
              Fame & Style
            </h1>
            <p className="text-xl text-gray-300">Creative Agency</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-gold border-opacity-20"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-gold border-t-transparent animate-spin"
                style={{ animationDuration: '1s' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gold">{Math.round(progress)}%</span>
              </div>
            </div>
            <h2 className="text-2xl font-montserrat font-semibold text-white mb-2">
              Loading Experience
            </h2>
            <p className="text-gray-400">Preparing your creative journey...</p>
          </div>
        )}
      </div>
    </div>
  );
}