import { Color, ShaderMaterial, Texture } from "three";

import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import blackHoleDiscVertexShader from "../shaders/blackHoleDisc/vertex.glsl";
import blackHoleDiscFragmentShader from "../shaders/blackHoleDisc/fragment.glsl";

export const BlackHoleDiscMaterial = shaderMaterial(
  {
    uTime: 0,
    uInnerColor: new Color(),
    uOuterColor: new Color(),
    uNoiseTexture: null,
  },
  blackHoleDiscVertexShader,
  blackHoleDiscFragmentShader
);

export type BlackHoleDiscMaterialInstance = ShaderMaterial & {
  uTime: number;
  uInnerColor: Color;
  uOuterColor: Color;
  uNoiseTexture: Texture;
};

extend({ BlackHoleDiscMaterial });
