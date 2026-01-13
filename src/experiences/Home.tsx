import { useMemo } from "react";

import { Euler, Vector3 } from "three";

import { useThree } from "@react-three/fiber";

import ScifiHelmetModel from "./models/ScifiHelmet";

export default function HomeExperience() {
  const { size } = useThree();

  const { scale, position, rotation } = useMemo(() => {
    const scale = 0.017;
    const position = new Vector3(3, 0, 0);
    const rotation = new Euler(0, Math.PI * 1.9, 0);
    const { width, height } = size;

    console.log(width, height);

    // TODO: Set media query breaklines for the model.

    return { scale, position, rotation };
  }, [size]);

  return (
    <>
      <ScifiHelmetModel scale={scale} position={position} rotation={rotation} />
    </>
  );
}
