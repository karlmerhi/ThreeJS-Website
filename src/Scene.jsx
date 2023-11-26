import Sphere from './Sphere.jsx'
import Torus from './Torus.jsx';
import Particles from './Particles.jsx';

export function Scene() {

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {/* <Sphere/> */}
      <Torus />
      <Particles />
    </>
  );
}
