import { ShaderMaterial } from "three";

import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import earthVertexShader from "../shaders/earth/vertex.glsl";
import earthFragmentShader from "../shaders/earth/fragment.glsl";

export const EarthMaterial = shaderMaterial(
  {},
  earthVertexShader,
  earthFragmentShader
);

export type EarthMaterialInstance = ShaderMaterial & {};

extend({ EarthMaterial });