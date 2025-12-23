import { useRef, useMemo } from "react";

import { AdditiveBlending } from "three";

import { useFrame } from "@react-three/fiber";

import { type BlackHoleParticlesMaterialInstance } from "../../materials/BlackHoleParticlesMaterial";

export type BlackHoleParticlesProps = {
  innerColor: string;
  outerColor: string;
  count?: number;
};

export default function BlackholeParticles({
  innerColor,
  outerColor,
  count = 50000,
}: BlackHoleParticlesProps) {
  const pointsMaterialRef = useRef<BlackHoleParticlesMaterialInstance>(null);

  const [distance, sizes, randoms] = useMemo(() => {
    const distance = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      distance[i * 3 + 0] = Math.random();
      distance[i * 3 + 1] = 0;
      distance[i * 3 + 2] = 0;
      sizes[i] = Math.random();
      randoms[i] = Math.random();
    }

    return [distance, sizes, randoms];
  }, [count]);

  useFrame((state) => {
    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.uTime = state.clock.getElapsedTime() + 9999.0;
      pointsMaterialRef.current.uViewHeight = state.size.height;
    }
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute args={[distance, 3]} attach="attributes-position" />
        <bufferAttribute args={[sizes, 1]} attach="attributes-aSize" />
        <bufferAttribute args={[randoms, 1]} attach="attributes-aRandom" />
      </bufferGeometry>

      <blackHoleParticlesMaterial
        ref={pointsMaterialRef}
        blending={AdditiveBlending}
        depthWrite={false}
        depthTest={false}
        transparent={true}
        uInnerColor={innerColor}
        uOuterColor={outerColor}
        uSize={0.015}
      />
    </points>
  );
}
