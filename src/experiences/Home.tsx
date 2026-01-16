import { useRef } from "react";

import { Group, Vector3, type Object3DEventMap } from "three";

import { useFrame } from "@react-three/fiber";

import ScifiHelmetModel from "./models/ScifiHelmet";

export default function HomeExperience() {
  const helmetRef = useRef<Group<Object3DEventMap>>(null);

  useFrame(({ pointer, camera }) => {
    if (helmetRef.current) {
      const multiplier = 3;
      const offset = 0;
      const x = pointer.x + offset;
      const y = pointer.y;
      const xOffset = x * multiplier;
      const yOffset = y * multiplier;

      helmetRef.current.lookAt(new Vector3(xOffset, yOffset, camera.position.z));
    }
  });

  return (
    <>
      <ScifiHelmetModel
        ref={helmetRef}
        scale={0.009}
      />
    </>
  );
}
