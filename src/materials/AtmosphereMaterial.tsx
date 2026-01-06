import { Color, ShaderMaterial, Vector3 } from "three";

import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import atmosphereVertexShader from "../shaders/atmosphere/vertex.glsl";
import atmosphereFragmentShader from "../shaders/atmosphere/fragment.glsl";

export const AtmosphereMaterial = shaderMaterial(
  {
    uSunDirection: null,
    uAtmosphereDayColor: null,
    uAtmosphereTwilightColor: null,
  },
  atmosphereVertexShader,
  atmosphereFragmentShader
);

export type AtmosphereMaterialInstance = ShaderMaterial & {
  uSunDirection: Vector3;
  uAtmosphereDayColor: Color;
  uAtmosphereTwilightColor: Color;
};

extend({ AtmosphereMaterial });
