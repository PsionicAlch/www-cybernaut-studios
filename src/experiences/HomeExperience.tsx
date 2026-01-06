import { useMemo, useRef } from "react";

import { Mesh, Spherical, Vector3 } from "three";

import { ToneMappingMode } from "postprocessing";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  GodRays,
  ToneMapping,
} from "@react-three/postprocessing";

import { folder, useControls } from "leva";

import { Perf } from "r3f-perf";

import Debug from "../components/Debug";

import Earth from "./elements/Earth";
import Sun from "./elements/Sun";

export default function HomeExperience() {
  const {
    showPerf,
    activeControls,
    toneMapping,
    sunRadius,
    sunPhi,
    sunTheta,
    cloudMix,
    atmosphereDayColor,
    atmosphereTwilightColor,
  } = useControls({
    showPerf: {
      value: false,
      label: "Show Performance Metrics",
    },
    activeControls: {
      value: false,
      label: "Turn On Orbit Controls",
    },
    Postprocessing: folder({
      toneMapping: {
        options: {
          Linear: ToneMappingMode.LINEAR,
          Reinhard: ToneMappingMode.REINHARD,
          Reinhard_2: ToneMappingMode.REINHARD2,
          Reinhard_2_Adaptive: ToneMappingMode.REINHARD2_ADAPTIVE,
          Uncharted_2: ToneMappingMode.UNCHARTED2,
          Optimized_Cineon: ToneMappingMode.OPTIMIZED_CINEON,
          Cineon: ToneMappingMode.CINEON,
          ACES_Filmic: ToneMappingMode.ACES_FILMIC,
          AGX: ToneMappingMode.AGX,
          Neutral: ToneMappingMode.NEUTRAL,
        },
        value: ToneMappingMode.ACES_FILMIC,
      },
    }),
    "Sun Controls": folder({
      sunRadius: {
        value: 1,
        label: "Radius",
      },
      sunPhi: {
        value: Math.PI * 0.5,
        label: "Phi",
      },
      sunTheta: {
        value: -2.4,
        label: "Theta",
      },
    }),
    "Earth Controls": folder({
      cloudMix: {
        value: 0.5,
        min: 0.0,
        max: 1.0,
        label: "Cloud Mix",
      },
      atmosphereDayColor: {
        value: "#00aaff",
        label: "Atmosphere Day Color",
      },
      atmosphereTwilightColor: {
        value: "#ff6600",
        label: "Atmosphere Twilight Color",
      },
    }),
  });

  const sunRef = useRef<Mesh>(null!);

  const sunDirection = useMemo(() => {
    const sunSpherical = new Spherical(sunRadius, sunPhi, sunTheta);
    const sunDirection = new Vector3();
    sunDirection.setFromSpherical(sunSpherical);

    return sunDirection;
  }, [sunRadius, sunPhi, sunTheta]);

  return (
    <>
      <Debug />

      <div className="fixed top-0 left-0 w-full h-full">
        <Canvas camera={{ fov: 30, position: [0, 0, 7] }}>
          {showPerf && <Perf position="top-left" />}

          {activeControls && <OrbitControls />}

          <EffectComposer>
            <ToneMapping mode={toneMapping} />
          </EffectComposer>

          <group position={[1.8, -1, 2]}>
            {/* <Sun ref={sunRef} position={sunDirection} /> */}

            <Earth
              sunDirection={sunDirection}
              cloudMix={cloudMix}
              atmosphereDayColor={atmosphereDayColor}
              atmosphereTwilightColor={atmosphereTwilightColor}
            />
          </group>
        </Canvas>
      </div>
    </>
  );
}
