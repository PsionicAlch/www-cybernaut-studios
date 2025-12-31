import { useMemo } from "react";

import { Spherical, Vector3 } from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { folder, useControls } from "leva";

import { Perf } from "r3f-perf";

import Debug from "../components/Debug";

import Earth from "./elements/Earth";
import Sun from "./elements/Sun";

export default function HomeExperience() {
  const {
    showPerf,
    activeControls,
    showSun,
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
      value: true,
      label: "Turn On Orbit Controls",
    },
    "Sun Controls": folder({
      showSun: {
        value: true,
        label: "Show Debug Sun",
      },
      sunRadius: {
        value: 1,
        label: "Radius",
      },
      sunPhi: {
        value: Math.PI * 0.5,
        label: "Phi",
      },
      sunTheta: {
        value: 0.5,
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
        <Canvas camera={{ position: [0, 0, 7] }}>
          {showPerf && <Perf position="top-left" />}

          {activeControls && <OrbitControls />}

          <Earth
            sunDirection={sunDirection}
            cloudMix={cloudMix}
            atmosphereDayColor={atmosphereDayColor}
            atmosphereTwilightColor={atmosphereTwilightColor}
          />
          {showSun && <Sun position={sunDirection} />}
        </Canvas>
      </div>
    </>
  );
}
