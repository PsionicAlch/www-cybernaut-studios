import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";

import HomePage from "./pages/Home";
import HomeExperience from "./experiences/Home";
import DefaultLayout from "./layouts/Default";

function App() {
  return (
    <DefaultLayout>
      <div className="w-full h-full">
        <HomePage />
      </div>

      <div className="w-full h-full">
        <Canvas camera={{ fov: 35 }}>
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.3, 0]} />

          <HomeExperience />
        </Canvas>
      </div>
    </DefaultLayout>
  );
}

export default App;
