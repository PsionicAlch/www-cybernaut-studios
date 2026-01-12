import { Color, ShaderMaterial, Texture, Vector3 } from "three";

import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import earthVertexShader from "../shaders/earth/vertex.glsl";
import earthFragmentShader from "../shaders/earth/fragment.glsl";

export const EarthMaterial = shaderMaterial(
  {
    uDayTexture: null,
    uNightTexture: null,
    uSpecularCloudsTexture: null,
    uSunDirection: null,
    uCloudMix: 0.0,
    uAtmosphereDayColor: null,
    uAtmosphereTwilightColor: null,
  },
  earthVertexShader,
  earthFragmentShader
);

export type EarthMaterialInstance = ShaderMaterial & {
  uDayTexture: Texture;
  uNightTexture: Texture;
  uSpecularCloudsTexture: Texture;
  uSunDirection: Vector3;
  uCloudMix: number;
  uAtmosphereDayColor: Color;
  uAtmosphereTwilightColor: Color;
};

extend({ EarthMaterial });
