"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// A single Box that applies the 3 textures to the 6 faces.
function PackagingBox() {
  const meshRef = useRef();
  const [textures, setTextures] = useState(null);

  useEffect(() => {
    // We load textures inside a useEffect to prevent SSR hydration errors in Next.js
    const loader = new THREE.TextureLoader();
    
    // The user MUST place these exact files in the /public folder!
    try {
      // Using temporary placeholders so the 3D viewer works immediately!
      // Once you download her files, change these back to '/pack-front.jpg', etc.
      const frontTex = loader.load('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800');
      const backTex = loader.load('https://images.unsplash.com/photo-1584820927498-cafe2c1b8248?auto=format&fit=crop&q=80&w=800');
      const sideTex = loader.load('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800');
      
      // Fix texture rotation/flipping for the back panel
      backTex.wrapS = THREE.RepeatWrapping;
      backTex.repeat.x = -1;

      setTextures({ front: frontTex, back: backTex, side: sideTex });
    } catch (e) {
      console.warn("Textures not found. Please add pack-front.jpg, pack-back.jpg, and pack-side.jpg to the public folder.");
    }
  }, []);

  // Gentle auto-rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  if (!textures) {
    return (
      <mesh>
        <boxGeometry args={[4, 6, 0.8]} />
        <meshStandardMaterial color="#f0f0f0" wireframe />
      </mesh>
    );
  }

  // BoxGeometry face order: right, left, top, bottom, front, back
  const materials = [
    new THREE.MeshStandardMaterial({ map: textures.side, roughness: 0.8 }), // Right
    new THREE.MeshStandardMaterial({ map: textures.side, roughness: 0.8 }), // Left
    new THREE.MeshStandardMaterial({ map: textures.side, roughness: 0.8 }), // Top
    new THREE.MeshStandardMaterial({ map: textures.side, roughness: 0.8 }), // Bottom
    new THREE.MeshStandardMaterial({ map: textures.front, roughness: 0.5, metalness: 0.1 }), // Front
    new THREE.MeshStandardMaterial({ map: textures.back, roughness: 0.5, metalness: 0.1 }), // Back
  ];

  return (
    <mesh ref={meshRef} material={materials}>
      <boxGeometry args={[4, 6, 0.8]} />
    </mesh>
  );
}

export default function Product3DViewer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center animate-pulse">Loading 3D Engine...</div>;

  return (
    <div className="w-full h-[500px] md:h-[600px] relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] rounded-2xl overflow-hidden shadow-inner border border-gray-200">
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2 pointer-events-none">
        <span className="material-symbols-outlined text-sm text-gray-500 animate-spin-slow">360</span>
        <span className="text-xs font-bold text-gray-700 tracking-widest uppercase">Drag to Rotate</span>
      </div>
      
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Soft studio lighting environment */}
        <Environment preset="city" />
        
        <PackagingBox />
        
        {/* Ground shadow for realism */}
        <ContactShadows position={[0, -3.2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  );
}
