import { Color, ShaderMaterial } from "three";

import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import blackHoleParticlesVertexShader from "../shaders/blackHoleParticles/vertex.glsl";
import blackHoleParticlesFragmentShader from "../shaders/blackHoleParticles/fragment.glsl";

export const BlackHoleParticlesMaterial = shaderMaterial(
  {
    uTime: 0,
    uInnerColor: new Color(),
    uOuterColor: new Color(),
    uViewHeight: 0,
    uSize: 0,
  },
  blackHoleParticlesVertexShader,
  blackHoleParticlesFragmentShader
);

export type BlackHoleParticlesMaterialInstance = ShaderMaterial & {
  uTime: number;
  uInnerColor: Color;
  uOuterColor: Color;
  uViewHeight: number;
  uSize: number;
};

extend({ BlackHoleParticlesMaterial });
