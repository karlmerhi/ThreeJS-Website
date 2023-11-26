import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Torus() {
  const meshRef = useRef();
  const particleMaterial = new THREE.PointsMaterial({
    color: 'red',
    size: 0.15,
  });

  const torusGeometry = new THREE.TorusGeometry(5, 2, 32, 100);
  const particleGeometry = new THREE.Points(torusGeometry, particleMaterial);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.z = 0; 
      meshRef.current.position.x = 0; 
    }
  });

  return (
    <points ref={meshRef} geometry={torusGeometry} material={particleMaterial} />
  );
}

export default Torus;
