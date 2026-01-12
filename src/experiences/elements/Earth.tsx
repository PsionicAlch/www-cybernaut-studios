import { useRef } from "react";

import { BackSide, Color, Mesh, SRGBColorSpace, Vector3 } from "three";

import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import { EarthMaterial } from "../materials/EarthMaterial";
import { AtmosphereMaterial } from "../materials/AtmosphereMaterial";

interface EarthProps {
  sunDirection: Vector3;
  cloudMix: number;
  atmosphereDayColor: string;
  atmosphereTwilightColor: string;
}

export default function Earth({
  sunDirection,
  cloudMix,
  atmosphereDayColor,
  atmosphereTwilightColor,
}: EarthProps) {
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
      earthMeshRef.current.rotation.y = clock.getElapsedTime() * -0.1;
    }
  });

  return (
    <group ref={earthMeshRef}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <earthMaterial
          key={EarthMaterial.key}
          uDayTexture={earthDayTexture}
          uNightTexture={earthNightTexture}
          uSpecularCloudsTexture={earthSpecularCloudTexture}
          uSunDirection={sunDirection}
          uCloudMix={cloudMix}
          uAtmosphereDayColor={new Color(atmosphereDayColor)}
          uAtmosphereTwilightColor={new Color(atmosphereTwilightColor)}
        />
      </mesh>

      <mesh scale={1.04}>
        <sphereGeometry args={[2, 64, 64]} />
        <atmosphereMaterial
          key={AtmosphereMaterial.key}
          side={BackSide}
          transparent
          uSunDirection={sunDirection}
          uAtmosphereDayColor={new Color(atmosphereDayColor)}
          uAtmosphereTwilightColor={new Color(atmosphereTwilightColor)}
        />
      </mesh>
    </group>
  );
}
