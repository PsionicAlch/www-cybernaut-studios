import { useMemo } from "react";

import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
} from "three";

import { useThree } from "@react-three/fiber";

import noiseVertexShader from "../../shaders/noise/vertex.glsl";
import noiseFragmentShader from "../../shaders/noise/fragment.glsl";

export default function useNoiseTexture(width = 128, height = 128) {
  const { gl } = useThree();

  const noiseTexture = useMemo(() => {
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({
      vertexShader: noiseVertexShader,
      fragmentShader: noiseFragmentShader,
    });

    const plane = new Mesh(geometry, material);
    plane.frustumCulled = false;
    scene.add(plane);

    const renderTarget = new WebGLRenderTarget(width, height, {
      generateMipmaps: false,
      wrapS: RepeatWrapping,
      wrapT: RepeatWrapping,
    });

    gl.setRenderTarget(renderTarget);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    material.dispose();
    geometry.dispose();

    return renderTarget.texture;
  }, [gl, width, height]);

  return noiseTexture;
}
