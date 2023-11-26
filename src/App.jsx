import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Scene } from "./Scene.jsx";
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#21282a' }}></div>
    <Canvas style={{ height: '100%', width: '100%' }} camera={{ position: [50, 2.0365, 5.556165], far: 10000, fov: 70, rotation: [0, 0, 0] }} shadows>
      <Scene />
      <OrbitControls minDistance={1} maxDistance={100000} />
    </Canvas>
    </>
  )
}