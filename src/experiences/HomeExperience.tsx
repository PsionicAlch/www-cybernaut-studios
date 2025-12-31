import { useControls } from "leva";
import Debug from "../components/Debug";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function HomeExperience() {
  const { showPerf } = useControls("Home Experience", {
    showPerf: false,
  });
  
  return <>
    <Debug />

    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas>
        {showPerf && <Perf position="top-left" />}
      </Canvas>
    </div>
  </>;
}