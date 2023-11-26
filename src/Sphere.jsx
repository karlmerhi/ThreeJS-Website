import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SphereGeometry, MeshStandardMaterial, Mesh } from 'three';

export default function Sphere() {
  const mesh = useRef();
  const startTime = Date.now();
  const duration = 5000; // in milliseconds

  useFrame((state, delta) => {
    const elapsedTime = Date.now() - startTime;

    if (elapsedTime < duration) {
      mesh.current.rotation.y += 0.01;
      mesh.current.scale.x += 0.01;
      mesh.current.scale.y += 0.01;
      mesh.current.scale.z += 0.01;
    }

    mesh.current.rotation.x += 0.01 * delta;
    mesh.current.rotation.y += 0.01 * delta;
  });

  return (
    <mesh
      ref={mesh}
      onClick={(e) => console.log('click')}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
}