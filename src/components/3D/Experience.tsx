import { StrictMode } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useControls } from "leva";

import { Perf } from "r3f-perf";

import Debug from "../Debug";
import Blackhole from "./Blackhole";
import Stars from "./Stars";

export default function Experience() {
  // const [loaded, setLoaded] = useState(false);

  const { showPerf } = useControls("Experience", {
    showPerf: false,
  });

  // useEffect(() => setLoaded(true), []);

  // if (!loaded) return null;

  return (
    <StrictMode>
      <Debug />

      <div className="fixed top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [0, 5, 8] }}>
          {showPerf && <Perf position="top-left" />}

          <OrbitControls />

          <Blackhole />

          <Stars />
        </Canvas>
      </div>
    </StrictMode>
  );
}
