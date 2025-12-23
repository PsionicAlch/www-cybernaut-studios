import { useRef, useState } from "react";

import { AdditiveBlending, DoubleSide } from "three";

import { useFrame } from "@react-three/fiber";

import { useControls } from "leva";

import useNoiseTexture from "../../hooks/3D/useNoiseTexture";

import BlackholeParticles from "./BlackholeParticles";

import { type BlackHoleDiscMaterialInstance } from "../../materials/BlackHoleDiscMaterial";

export default function Blackhole() {
  const [innerColor, setInnerColor] = useState("#ff8080");
  const [outerColor, setOuterColor] = useState("#3633ff");

  const { wireframe } = useControls("Black Hole", {
    wireframe: false,
    innerColor: {
      value: innerColor,
      onChange: setInnerColor,
    },
    outerColor: {
      value: outerColor,
      onChange: setOuterColor,
    },
  });

  const materialRef = useRef<BlackHoleDiscMaterialInstance>(null);

  const noiseTexture = useNoiseTexture();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <group>
      <mesh>
        <cylinderGeometry args={[5, 1, 0, 64, 10, true]} />

        <blackHoleDiscMaterial
          ref={materialRef}
          side={DoubleSide}
          blending={AdditiveBlending}
          depthWrite={false}
          depthTest={false}
          transparent={true}
          wireframe={wireframe}
          uNoiseTexture={noiseTexture}
          uInnerColor={innerColor}
          uOuterColor={outerColor}
        />
      </mesh>

      <BlackholeParticles innerColor={innerColor} outerColor={outerColor} />
    </group>
  );
}
