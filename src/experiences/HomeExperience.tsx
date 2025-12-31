import { Canvas } from "@react-three/fiber";

import { useControls } from "leva";

import { Perf } from "r3f-perf";

import Debug from "../components/Debug";

import Earth from "./elements/Earth";

export default function HomeExperience() {
  const { showPerf } = useControls("Home Experience", {
    showPerf: false,
  });

  return <>
    <Debug />

    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 7] }}>
        {showPerf && <Perf position="top-left" />}

        <Earth />
      </Canvas>
    </div>
  </>;
}