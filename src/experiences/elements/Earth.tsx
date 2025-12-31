import { useRef } from "react";

import { Mesh, SRGBColorSpace, Vector3 } from "three";

import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import "../../materials/EarthMaterial";

interface EarthProps {
  sunDirection: Vector3;
  cloudMix: number;
  atmosphereDayColor: string;
  atmosphereTwilightColor: string;
}

export default function Earth({ sunDirection, cloudMix, atmosphereDayColor, atmosphereTwilightColor }: EarthProps) {
  const earthMeshRef = useRef<Mesh>(null);

  const { earthDayTexture, earthNightTexture, earthSpecularCloudTexture } =
    useTexture({
      earthDayTexture: "/textures/earth/2k_earth_daymap.jpg",
      earthNightTexture: "/textures/earth/2k_earth_nightmap.jpg",
      earthSpecularCloudTexture:
        "/textures/earth/2k_earth_specular_cloudmap.jpg",
    });
  earthDayTexture.colorSpace = SRGBColorSpace;
  earthDayTexture.anisotropy = 8;
  earthNightTexture.colorSpace = SRGBColorSpace;
  earthNightTexture.anisotropy = 8;
  earthSpecularCloudTexture.anisotropy = 8;

  useFrame(({ clock }) => {
    if (earthMeshRef.current) {
      earthMeshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={earthMeshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <earthMaterial
        uDayTexture={earthDayTexture}
        uNightTexture={earthNightTexture}
        uSpecularCloudsTexture={earthSpecularCloudTexture}
        uSunDirection={sunDirection}
        uCloudMix={cloudMix}
        uAtmosphereDayColor={atmosphereDayColor}
        uAtmosphereTwilightColor={atmosphereTwilightColor}
      />
    </mesh>
  );
}
