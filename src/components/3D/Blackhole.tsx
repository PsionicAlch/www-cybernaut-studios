import { useRef } from "react";

import {
  AdditiveBlending,
  Color,
  DoubleSide,
  Mesh,
  ShaderMaterial,
  Uniform,
} from "three";

import { useFrame } from "@react-three/fiber";

import { useControls } from "leva";

import useNoiseTexture from "../../hooks/3D/useNoiseTexture";

import blackHoleDiscVertexShader from "../../shaders/blackHoleDisc/vertex.glsl";
import blackHoleDiscFragmentShader from "../../shaders/blackHoleDisc/fragment.glsl";

export default function Blackhole() {
  const { wireframe, innerColor, outerColor } = useControls("Black Hole", {
    wireframe: false,
    innerColor: "#ff8080",
    outerColor: "#3633ff",
  });

  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const noiseTexture = useNoiseTexture();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[5, 1, 0, 64, 10, true]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={blackHoleDiscVertexShader}
        fragmentShader={blackHoleDiscFragmentShader}
        side={DoubleSide}
        blending={AdditiveBlending}
        depthWrite={false}
        depthTest={false}
        transparent={true}
        wireframe={wireframe}
        uniforms={{
          uTime: new Uniform(0),
          uNoiseTexture: new Uniform(noiseTexture),
          uInnerColor: new Uniform(new Color(innerColor)),
          uOuterColor: new Uniform(new Color(outerColor)),
        }}
      />
    </mesh>
  );
}
