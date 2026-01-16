import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";

import HomePage from "./pages/Home";
import HomeExperience from "./experiences/Home";
import DefaultLayout from "./layouts/Default";
import { Suspense } from "react";
import Loader from "./experiences/components/Loader";

function App() {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col justify-center">
        <HomePage />
      </div>

      <div className="w-full h-full">
        <Canvas camera={{ fov: 35 }}>
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.3, 0]} />

          <Suspense fallback={<Loader />}>
            <HomeExperience />
          </Suspense>
        </Canvas>
      </div>
    </DefaultLayout>
  );
}

export default App;
