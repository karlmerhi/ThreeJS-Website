import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef();

  const loader = new THREE.TextureLoader();
  const texture = loader.load("/star_05.png");

  const particleMaterial = new THREE.PointsMaterial({
    // color: 0x888888,
    size: 0.15,
    map: texture,
    transparent: true,
    color: "white",
    blending: THREE.AdditiveBlending,
    // depthWrite: false,
  });

  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 200000;
  const posArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 3) * 37;
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  const particleMesh = new THREE.Points(particleGeometry, particleMaterial);

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", animateParticles);

  function animateParticles(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
  }

  useFrame(() => {
    if (meshRef.current) {
      particleMesh.rotation.y = mouseY * 0.0001;
      particleMesh.rotation.x = mouseX * 0.0001;
    }
  });

  return <points geometry={particleGeometry} material={particleMaterial} />;
}

export default Particles;
