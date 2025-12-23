import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";

import { Color } from "three";

import { type StarsMaterialInstance } from "../../materials/StarsMaterial";

export default function Stars({ count = 50000 }) {
  const pointsMaterialRef = useRef<StarsMaterialInstance>(null);

  const [positions, sizes, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1.0);
      const x = Math.cos(theta) * Math.sin(phi) * 400;
      const y = Math.sin(theta) * Math.sin(phi) * 400;
      const z = Math.cos(phi) * 400;

      positions[i3 + 0] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      sizes[i] = Math.random();

      const color = new Color(
        `hsl(${Math.round(360 * Math.random())}, 100%, 80%)`
      );
      colors[i3 + 0] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return [positions, sizes, colors];
  }, [count]);

  useFrame((state) => {
    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.uViewHeight = state.size.height;
    }
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[sizes, 1]} attach="attributes-aSize" />
        <bufferAttribute args={[colors, 3]} attach="attributes-aColor" />
      </bufferGeometry>

      <starsMaterial
        ref={pointsMaterialRef}
        depthWrite={false}
        depthTest={false}
        uSize={0.001}
      />
    </points>
  );
}
