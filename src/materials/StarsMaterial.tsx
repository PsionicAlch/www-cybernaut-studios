import type { ShaderMaterial } from "three";

import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import starsParticlesVertexShader from "../shaders/starsParticles/vertex.glsl";
import starsParticlesFragmentShader from "../shaders/starsParticles/fragment.glsl";

export const StarsMaterial = shaderMaterial(
  {
    uViewHeight: 0,
    uSize: 0,
  },
  starsParticlesVertexShader,
  starsParticlesFragmentShader
);

export type StarsMaterialInstance = ShaderMaterial & {
  uViewHeight: number,
  uSize: number,
};

extend({ StarsMaterial });