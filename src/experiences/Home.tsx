import { useMemo, useRef } from "react";

import { Group, Vector3, Euler, type Object3DEventMap } from "three";

import { useFrame, useThree } from "@react-three/fiber";

import ScifiHelmetModel from "./models/ScifiHelmet";

export default function HomeExperience() {
  const helmetRef = useRef<Group<Object3DEventMap>>(null);

  const { size } = useThree();

  const { scale, position, rotation } = useMemo(() => {
    const scale = 0.015;
    const position = new Vector3(4, 0, 0);
    const rotation = new Euler(0, Math.PI * 1.9, 0);
    const { width, height } = size;

    console.log(width, height);

    // TODO: Set media query breaklines for the model.

    return { scale, position, rotation };
  }, [size]);

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
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </>
  );
}
