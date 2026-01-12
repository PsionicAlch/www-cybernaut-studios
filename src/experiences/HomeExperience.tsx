import { Canvas, useThree } from "@react-three/fiber";

import Debug from "../components/Debug";

import ScifiHelmet from "./models/ScifiHelmet";
import { Environment } from "@react-three/drei";

export default function HomeExperience() {
  // const {} = useControls({});

  const { camera } = useThree();

  return (
    <>
      <Debug />

      <div className="absolute w-dvw h-dvh top-0 left-0">
        <Canvas>
          <Environment preset="studio" />
          <ScifiHelmet scale={0.02} position={[4, 0, 0]} lookAt={camera.position} />
        </Canvas>
      </div>

      <main className="w-dvw h-dvh overflow-hidden bg-white font-black p-10">
        <div className="relative w-full h-full border border-black">
          <div className="p-1 bg-white absolute -top-4 -left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>

          <div className="p-1 bg-white absolute -bottom-4 -right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>

          <nav className="w-full flex flex-row justify-between items-center absolute -top-6 left-0 px-5 py-2">
            <h1 className="bg-white px-2 font-normal text-xl hover:underline">
              <a href="/">Cybernaut Studio</a>
            </h1>

            <ul className="flex flex-row gap-6 font-normal">
              <li className="bg-white px-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="bg-white px-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <footer className="w-full flex flex-row justify-between items-center absolute -bottom-5 right-0 px-5 py-2">
            <ul className="flex flex-row gap-6 font-normal">
              <li className="bg-white px-2">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li className="bg-white px-2">
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
            </ul>

            <p className="bg-white px-2 font-normal">&copy; Cybernaut Studios 2026</p>
          </footer>
        </div>
      </main>
    </>
  );
}
