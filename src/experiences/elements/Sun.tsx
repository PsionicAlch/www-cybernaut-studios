import type { Vector3 } from "three";

interface SunProps {
  position: Vector3,
}

export default function Sun({ position }: SunProps) {
  return <mesh position={position.multiplyScalar(5)}>
    <icosahedronGeometry args={[0.1, 2]} />
    <meshBasicMaterial />
  </mesh>;
}