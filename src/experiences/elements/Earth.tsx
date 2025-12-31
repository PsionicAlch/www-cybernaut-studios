import { useRef } from "react";

import { Mesh } from "three";

import { useFrame } from "@react-three/fiber";

import "../../materials/EarthMaterial";

export default function Earth() {
  const earthMeshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (earthMeshRef.current) {
      earthMeshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={earthMeshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <earthMaterial />
    </mesh>
  );
}
